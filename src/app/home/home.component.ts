import { Component, OnInit } from '@angular/core';

import { catchError } from 'rxjs/operators';
import { Nota } from 'src/app/models/nota.model';
import { Observable, empty } from 'rxjs';
import { NoteService } from './../services/note-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  notas$: Observable<Nota[]>;

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.onRefresh();
  }

  onRefresh() {
    this.notas$ = this.noteService.list().pipe(
      catchError(error => {
        console.error(error);
        return empty();
      })
    );
  }

  OnDelete(obj) {
    this.noteService.remove(obj.id).subscribe(() => {
      this.onRefresh();
    });
  }

}
