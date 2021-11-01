import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { Order } from './../../interfaces/orders';
import { HandleErrorService } from "../handle-error/handle-error.service";
import { catchError } from "rxjs/operators";

@Injectable({
    providedIn: "root"
})

export class OrderService {
    constructor(
        private httpClient: HttpClient,
        private handleErrorService: HandleErrorService
    ) { }

    allOrder() {
        return this.httpClient.get(`${environment.URL}/order/getAllOrder`)
            .pipe(catchError(this.handleErrorService.logError));
    }

    orderById(id: string | null) {
        return this.httpClient.get(`${environment.URL}/order/getOrderById/${id}`)
            .pipe(catchError(this.handleErrorService.logError));
    }

    deleteOrder(id: string) {
        return this.httpClient.delete(`${environment.URL}/order/deleteById/${id}`)
            .pipe(catchError(this.handleErrorService.logError));
    }

    addOrder(order: Order) {
        return this.httpClient.post(`${environment.URL}/order/addOrder`, order)
            .pipe(catchError(this.handleErrorService.logError));
    }

    editOrder(order: Order, id: string) {
        return this.httpClient.put(`${environment.URL}/order/editOrderById/${id}`, order)
            .pipe(catchError(this.handleErrorService.logError));
    }
}