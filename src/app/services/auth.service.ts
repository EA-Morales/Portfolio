import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { map } from 'rxjs';

// Environment const
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiURL = environment.apiUrl;

  currentUserSubject: BehaviorSubject<any>;

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  constructor(private http: HttpClient, private router: Router) {
    //console.log('El servicio esta corriendo');
    this.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(sessionStorage.getItem('currentuser') || '{}')
    );
  }

  login(data: any): Observable<any> {
    let params = new HttpParams({
      fromObject: {
        username: data.username,
        password: data.password,
      },
    });

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    };

    return this.http
      .post(`${this.apiURL}login`, params.toString(), httpOptions)
      .pipe(
        catchError(this.handleError),
        map(userData => {
          //sessionStorage.setItem('token', JSON.stringify(userData));
          let tokenStr = JSON.stringify(userData);
          //console.log(tokenStr.substring(10, tokenStr.length - 2));
          sessionStorage.setItem('token', tokenStr);
          this.loggedIn.next(true);
          return userData;
        })
      );
  }

  get isUserLoggedIn() {
    if (sessionStorage.getItem('token') === null) {
      this.loggedIn.next(false);
      return this.loggedIn.asObservable();
    } else {
      this.loggedIn.next(true);
      return this.loggedIn.asObservable();
    }
  }

  logout() {
    this.loggedIn.next(false);
    sessionStorage.removeItem('token');
  }

  private handleError(httpError: HttpErrorResponse) {
    let message: string = '';

    if (httpError.error instanceof ProgressEvent) {
      console.log('in progrss event');
      message = 'Network error';
    } else {
      message = httpError.error.message;
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${httpError.status}, ` +
          `body was: ${httpError.error}`
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(message);
  }
}

/* login(login: any) {
  this.http
    .post(`${this.apiURL}login`, login, httpOptions)
    .subscribe((resp: any) => {
      this.router.navigate(['home']);
      localStorage.setItem('auth_token', resp.token);
    });
} */

// public get logIn(): boolean {
//   return localStorage.getItem('token') !== null;
// }
