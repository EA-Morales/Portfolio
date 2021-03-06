//import { datos } from './../models/datos-interface';
import { Injectable } from '@angular/core';

//Cliente HTTP
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// Environment const
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class BannerService {
  private apiURL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getInfoPersonal(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}banner`);
  }

  addinfoPersonal(infoPersonalForm: any): Observable<any> {
    return this.http.put<any>(
      `${this.apiURL}banner/1`,
      infoPersonalForm,
      httpOptions
    );
  }
}
