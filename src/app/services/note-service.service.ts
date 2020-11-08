import { environment } from './../../environments/environment';
import { take } from 'rxjs/operators';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Nota } from './../models/nota.model';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {

  private readonly API = `${environment.API}notas`;

  constructor(private http: HttpClient) {
  }

  /*httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }*/

  add(nota){
    return this.http.post(this.API, nota);
  }

  list() {
    return this.http.get<Nota[]>(this.API);
  }

  remove(id) {
    console.log(id);
    return this.http.delete(`${this.API}/${id}`);
    //return this.http.delete<Nota>('http://localhost:3000/notas' + '/' + id, this.httpOptions);
  }

  edit(nota){
    return this.http.put(`${this.API}/${nota.id}`, nota);
  }

  save(nota){
    if(nota.id)
      return this.edit(nota);
    else
      return this.add(nota);
  }
}