import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
	providedIn: 'root'
})
export class HandleErrorService {

	constructor() { }

	logError(err: HttpErrorResponse) {
		if (err.error instanceof ErrorEvent) {
			console.log("Client saide", err);
		} else {
			Swal.fire(`Status: ${err.status}`, err.statusText, 'error')
		}
		return throwError(err.statusText);
	}
}
