import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MustMatch } from './../../../shared/shared-functions/MustMatch';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	registerForm!: FormGroup;
	submitted: boolean = false;
	constructor(
		private fb: FormBuilder,
		private service: AuthService,
		private router: Router,
		private toastr: ToastrService
	) { }

	ngOnInit(): void {
		this.createRegisterForm();
	}

	createRegisterForm(): void {
		this.registerForm = this.fb.group({
			name: ['', Validators.required],
			email: ['', [Validators.required, Validators.email]],
			password: ['', Validators.required],
			confirmPassword: ['', Validators.required]
		}, { validator: MustMatch("password", "confirmPassword") }
		);
	}


	submit() {
		this.submitted = true;
		if (this.registerForm.invalid) return;
		this.service.register(this.registerForm.value).subscribe(res => {
			if (res) localStorage.setItem("token", res.token)
			this.toastr.success('Welcome', 'Successful');
			this.router.navigate(['order/view']);
		});
	}

	logIn() {
		this.router.navigate(['auth/login']);
	};

}
