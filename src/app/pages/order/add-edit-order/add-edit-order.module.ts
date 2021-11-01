import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { AddEditOrderRoutingModule } from './add-edit-order-routing.module';
import { AddEidtOrderComponent } from './add-edit-order-page/add-edit-order.component';
import { OneOrderResolver } from 'src/app/shared/resolver/OneOrder.resolver';
import { AngularMaterialModule } from 'src/app/shared/shared-module/angular-material.module';



@NgModule({
	declarations: [
		AddEidtOrderComponent,
	],
	imports: [
		CommonModule,
		AddEditOrderRoutingModule,
		ReactiveFormsModule,
        ToastrModule,
		AngularMaterialModule
	],
	providers: [
		OneOrderResolver
	]
})
export class AddEditOrderModule { }
