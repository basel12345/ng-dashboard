import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AngularMaterialModule } from '../../shared/shared-module/angular-material.module';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
	declarations: [
		LoginComponent,
		RegisterComponent
	],
	imports: [
		CommonModule,
		AngularMaterialModule,
		AuthRoutingModule,
		ReactiveFormsModule,
	]
})
export class AuthModule { }
