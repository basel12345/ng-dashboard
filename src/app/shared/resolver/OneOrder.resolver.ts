import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { OrderService } from 'src/app/shared/services/order/order.service';

@Injectable()
export class OneOrderResolver implements Resolve<any> {
    constructor(public service: OrderService) { }
    resolve(route: ActivatedRouteSnapshot) {
        if(route.paramMap.get('id') !== "0") {
            return this.service.orderById(route.paramMap.get('id'));
        };
        return true;
    }

}