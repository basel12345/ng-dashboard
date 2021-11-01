import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderResolver } from 'src/app/shared/resolver/AllOrder.resolver';
import { ViewOrderComponent } from './view-order-pages/view-order.component';

const routes: Routes = [
    {
        path: '',
        component: ViewOrderComponent,
        resolve: {
            Order: OrderResolver
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ViewOrderRoutingModule { }
