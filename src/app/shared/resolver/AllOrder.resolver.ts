import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { OrderService } from 'src/app/shared/services/order/order.service';

@Injectable()
export class OrderResolver implements Resolve<any> {

    constructor(public service: OrderService) { }

    resolve() {
        return this.service.allOrder();
    }

}