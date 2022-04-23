import { Injectable } from '@angular/core';

//Cliente HTTP
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class AboutService {
  private apiURL = 'https://fathomless-springs-67646.herokuapp.com/';

  constructor(private http: HttpClient) {}

  getTextAbout(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}descripcion`);
  }

  addTextAbout(aboutform: any): Observable<any> {
    return this.http.put<any>(
      `${this.apiURL}descripcion/1`,
      aboutform,
      httpOptions
    );
  }
}
