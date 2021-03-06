import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

// Interface Proyects
import { proyects } from '../models/interfaceDatos';

// Cliente HTTP
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Enviroment const
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  private apiURL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getProyects() {
    return this.http.get<any>(`${this.apiURL}proyectos`);
  }

  addproyects(proyect: proyects): Observable<proyects> {
    return this.http.post<proyects>(
      `${this.apiURL}proyectos`,
      proyect,
      httpOptions
    );
  }

  editproyects(proyect: proyects, id: number): Observable<proyects> {
    return this.http.put<proyects>(
      `${this.apiURL}proyectos/${id}`,
      proyect,
      httpOptions
    );
  }

  deleteProyect(id: number): Observable<proyects> {
    return this.http.delete<proyects>(`${this.apiURL}proyectos/borrar/${id}`);
  }
}
