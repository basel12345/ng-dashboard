import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEidtOrderComponent } from './add-edit-order/add-edit-order-page/add-edit-order.component';
import { OrderComponent } from './order-pages/order.component';

const routes: Routes = [
    {
        path: '',
        component: OrderComponent,
        children: [
            {
                path: "add-edit/:id",
                loadChildren: () => import("./add-edit-order/add-edit-order.module").then(m => m.AddEditOrderModule)
            },
            {
                path: "view",
                loadChildren: () => import("./view-order/view-order.module").then(m => m.ViewOrderModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OrderRoutingModule { }
