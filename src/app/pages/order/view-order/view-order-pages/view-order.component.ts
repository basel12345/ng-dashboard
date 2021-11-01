import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/shared/services/order/order.service';
import { Order } from './../../../../shared/interfaces/orders';
import { ToastrService } from 'ngx-toastr';
import { response } from './../../../../shared/interfaces/response';

@Component({
	selector: 'app-view-order',
	templateUrl: './view-order.component.html',
	styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {
	orders!: Order[];

	constructor(
		private router: Router,
		private service: OrderService,
		private route: ActivatedRoute,
		private toastr: ToastrService
	) { }

	ngOnInit(): void {
		this.getAllOrder();
	}

	getAllOrder(): void {
		this.route.data.subscribe(res => {
			this.orders = res.Order;
		});
	}

	edit(id: string): void {
		this.router.navigate([`order/add-edit/${id}`]);
	}

	delete(id: string) {
		this.service.deleteOrder(id).subscribe((res: response | any) => {
			if(res.status) {
				this.toastr.success('Successfull', res.message);
				this.orders = this.orders.filter((order: Order) => order._id !== id)
			}
		});
	}

}
