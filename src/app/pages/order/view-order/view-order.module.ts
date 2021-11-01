import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ViewOrderComponent } from './view-order-pages/view-order.component';
import { ViewOrderRoutingModule } from './view-order-routing.module';
import { OrderResolver } from 'src/app/shared/resolver/AllOrder.resolver';



@NgModule({
    declarations: [
        ViewOrderComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ToastrModule,
        ViewOrderRoutingModule
    ],
    providers: [
        OrderResolver
    ]
})
export class ViewOrderModule { }
