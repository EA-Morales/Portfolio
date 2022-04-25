import { datos } from '../models/interfaceDatos';
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
export class ExperienceService {
  private apiURL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getExperiencia() {
    return this.http.get<any>(`${this.apiURL}experiencia`);
  }

  addExperiencia(data: datos): Observable<datos> {
    return this.http.post<datos>(
      `${this.apiURL}experiencia`,
      data,
      httpOptions
    );
  }

  editExperiencia(data: datos, id: number): Observable<datos> {
    return this.http.put<datos>(
      `${this.apiURL}experiencia/${id}`,
      data,
      httpOptions
    );
  }

  deleteExperiencia(id: number): Observable<datos> {
    return this.http.delete<datos>(`${this.apiURL}experiencia/borrar/${id}`);
  }
}
