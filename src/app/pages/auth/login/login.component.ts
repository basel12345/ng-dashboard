import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	loginForm!: FormGroup;
	submitted: boolean = false;

	constructor(
		private fb: FormBuilder,
		private service: AuthService,
		private toastr: ToastrService,
		private router: Router
	) { }

	ngOnInit(): void {
		this.createLoginForm();
	}

	createLoginForm() {
		this.loginForm = this.fb.group({
			email: ['', [Validators.required, Validators.email]],
			password: ['', Validators.required],
		})
	}

	submit() {
		this.submitted = true;
		if (this.loginForm.invalid) return;
		this.service.login(this.loginForm.value).subscribe(res => {
			if(res) localStorage.setItem("token", res.token)			
			this.toastr.success('Welcome', 'Successful');
			this.router.navigate(['order/view']);
		});
	};

	register() {
		this.router.navigate(["auth/register"]);
	};
}
