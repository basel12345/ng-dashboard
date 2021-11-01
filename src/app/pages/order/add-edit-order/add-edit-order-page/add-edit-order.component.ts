import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/shared/interfaces/orders';
import { OrderService } from 'src/app/shared/services/order/order.service';
import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'app-add-edit-order',
	templateUrl: './add-edit-order.component.html',
	styleUrls: ['./add-edit-order.component.css']
})
export class AddEidtOrderComponent implements OnInit {
	OrderForm!: FormGroup;
	isSubmitted: boolean = false;
	order!: Order;
	type: string = 'Add';
	id!: string;
	constructor(
		private fb: FormBuilder,
		private route: ActivatedRoute,
		private service: OrderService,
		private toastr: ToastrService,
		private router: Router
	) { }

	ngOnInit(): void {
		this.createFormOrder();
		this.route.params.subscribe(res => {
			this.id = res.id;
			if (this.id != "0") {
				this.type = "Edit";
				this.getOrderById();
			} else {
				this.type = "Add";
				this.OrderForm.patchValue({ name: "", type: "", price: 0 });
			};
		});
	}

	createFormOrder() {
		this.OrderForm = this.fb.group({
			name: ['', [Validators.required, Validators.minLength(3)]],
			price: ['', [Validators.required, Validators.min(5)]],
			type: ['', [Validators.required]]
		});
	};

	getOrderById() {
		this.route.data.subscribe(res => {
			this.order = res.OneOrder;
			this.OrderForm.patchValue(this.order);
		})
	}

	submit() {
		this.isSubmitted = true;
		if (this.OrderForm.invalid) {
			return;
		}
		if (this.id != "0") {
			this.service.editOrder(this.OrderForm.value, this.id).subscribe((res: Response | any) => {
				this.toastr.success('Successfull', res.message);
				this.router.navigate(['/view/order']);
			})
		} else {
			this.service.addOrder(this.OrderForm.value).subscribe((res: Response | any) => {
				this.toastr.success('Successfull', res.message);
				this.router.navigate(['/view/order']);
			});
		}
	}

}
