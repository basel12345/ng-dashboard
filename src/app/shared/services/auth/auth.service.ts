import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '../../interfaces/user';
import { Observable } from 'rxjs';
import { HandleErrorService } from '../handle-error/handle-error.service';
import { catchError } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor(
		private httpClient: HttpClient,
		private handleErrorService: HandleErrorService
	) { }

	login(user: User): Observable<any> {
		return this.httpClient.post(`${environment.URL}/auth/login`, user)
			.pipe(catchError(this.handleErrorService.logError));
	}

	register(user: User): Observable<any> {
		return this.httpClient.post(`${environment.URL}/auth/register`, user)
			.pipe(catchError(this.handleErrorService.logError));
	}
}
