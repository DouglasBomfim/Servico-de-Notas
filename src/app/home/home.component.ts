import { Component, Input, OnChanges, OnInit, SimpleChange} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { NoteService } from './../services/note-service.service';
import { Nota } from 'src/app/models/nota.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges {
  
  @Input() queryParameter = null;
  @Input() header = "Minhas Notas";

  notas$: Observable<Nota[]>;

  constructor(private noteService: NoteService, private router: Router) { }

  ngOnInit() {
    this.onRefresh();
  }

  ngOnChanges(changes: { [propName: string]: SimpleChange }) {
    if (changes['queryParameter'] && changes['queryParameter'].previousValue != changes['queryParameter'].currentValue) {
      this.onRefresh();
    }
  }

  onRefresh() {
    if (this.queryParameter) {
      this.notas$ = this.noteService.getByTitle(this.queryParameter);
    }
    else {
      this.notas$ = this.noteService.list();
    }
  }

  novaNota() {
    this.router.navigateByUrl('/addnota');
  }

  OnEdit(id) {
    this.router.navigateByUrl('/editarnota/' + id);
  }

  OnDelete(obj) {
    this.noteService.remove(obj.id).subscribe(() => this.onRefresh());
  }

}
