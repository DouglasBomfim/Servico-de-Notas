import { Observable, empty } from 'rxjs';
import { NoteServiceService } from './../../services/note-service.service';
import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Nota } from 'src/app/models/nota.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  notas$: Observable<Nota[]>;

  constructor(private noteService : NoteServiceService) { }

  ngOnInit(){
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

  OnDelete(obj){
    this.noteService.remove(obj.id).subscribe(() => {
      this.onRefresh();
    });;
  }

}
