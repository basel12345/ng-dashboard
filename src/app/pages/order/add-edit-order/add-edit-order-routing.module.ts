import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneOrderResolver } from 'src/app/shared/resolver/OneOrder.resolver';
import { AddEidtOrderComponent } from './add-edit-order-page/add-edit-order.component';

const routes: Routes = [
    {
        path: '',
        component: AddEidtOrderComponent,
        resolve: {
            OneOrder: OneOrderResolver
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddEditOrderRoutingModule { }
