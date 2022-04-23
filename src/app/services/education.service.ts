import { Injectable } from '@angular/core';

// interface datos
import { datos } from '../models/interfaceDatos';

//Cliente HTTP
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  private apiURL = 'https://fathomless-springs-67646.herokuapp.com/';

  constructor(private http: HttpClient) {}

  getEducacion() {
    return this.http.get<any>(`${this.apiURL}educacion`);
  }

  addEducacion(data: datos): Observable<datos> {
    return this.http.post<datos>(`${this.apiURL}educacion`, data, httpOptions);
  }

  editEducacion(data: datos, id: number): Observable<datos> {
    return this.http.put<datos>(
      `${this.apiURL}educacion/${id}`,
      data,
      httpOptions
    );
  }

  deleteEducacion(id: number): Observable<datos> {
    return this.http.delete<datos>(`${this.apiURL}educacion/borrar/${id}`);
  }
}
