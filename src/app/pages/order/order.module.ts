import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule } from './order-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderComponent } from './order-pages/order.component';
import { NavbarComponent } from 'src/app/shared/shared-components/navbar/navbar.component';



@NgModule({
	declarations: [
		OrderComponent,
		NavbarComponent
	],
	imports: [
		CommonModule,
		OrderRoutingModule,
		ReactiveFormsModule,
	]
})
export class OrderModule { }
