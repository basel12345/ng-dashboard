import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './shared/auth-guard/auth-guard.guard';

const routes: Routes = [
	{
		path: 'order',
		loadChildren: () => import("./pages/order/order.module").then(m => m.OrderModule),
		canActivate: [AuthGuardGuard]
	},
	{
		path: "auth",
		loadChildren: () => import("./pages/auth/auth.module").then(m => m.AuthModule)
	},
	{
		path: '',
		redirectTo: 'order/view',
		pathMatch: "full"
	},
	{
		path: '**',
		redirectTo: 'order/view',
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
