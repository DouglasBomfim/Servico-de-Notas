import { NoteService } from './../services/note-service.service';
import { Nota } from './../models/nota.model';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotaResolver implements Resolve<Nota> {
  constructor(private service: NoteService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Nota> {
    if (route.params && route.params['id']) {
      return this.service.getById(route.params['id']);
    }

    return of({
      id: null,
      titulo: null,
      texto: null
    });
  }
}