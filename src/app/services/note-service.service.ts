import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../environments/environment';
import { Nota } from './../models/nota.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private readonly API = `${environment.API}notas`;

  constructor(private http: HttpClient) {
  }

  add(nota) {
    return this.http.post(this.API, nota);
  }

  list() {
    return this.http.get<Nota[]>(this.API);
  }

  getById(id) {
    return this.http.get<Nota>(`${this.API}/${id}`);
  }

  getByTitle(title) {
    return this.http.get<Nota>(`${this.API}?titulo_like=${title}`);
  }

  remove(id) {
    return this.http.delete(`${this.API}/${id}`);
  }

  edit(nota) {
    return this.http.put(`${this.API}/${nota.id}`, nota);
  }

  save(nota) {
    if (nota.id) {
      return this.edit(nota);
    }
    else {
      return this.add(nota);
    }
  }
}