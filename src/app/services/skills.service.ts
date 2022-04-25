import { Injectable } from '@angular/core';

// Interface skills
import { skills } from '../models/interfaceDatos';

// Cliente HTTP
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
export class SkillsService {
  private apiURL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getSkills() {
    return this.http.get<any>(`${this.apiURL}skills`);
  }

  addSkills(skill: skills): Observable<skills> {
    return this.http.post<skills>(`${this.apiURL}skills`, skill, httpOptions);
  }

  editSkills(skill: skills, id: number): Observable<skills> {
    return this.http.put<skills>(
      `${this.apiURL}skills/${id}`,
      skill,
      httpOptions
    );
  }

  deleteSkills(id: number): Observable<skills> {
    return this.http.delete<skills>(`${this.apiURL}skills/borrar/${id}`);
  }
}
