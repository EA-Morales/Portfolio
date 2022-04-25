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
export class AboutService {
  private apiURL = environment.apiUrl;

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
