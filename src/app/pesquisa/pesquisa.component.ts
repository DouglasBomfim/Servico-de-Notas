import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';
import { NoteServiceService } from '../services/note-service.service';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {

  notas$;
  inscricao: Subscription;

  constructor(private route: ActivatedRoute, private noteService: NoteServiceService) { }

  ngOnInit() {
    this.inscricao = this.route.queryParams.subscribe(
      (queryParams: any) => {
        const titulo = queryParams['titulo'];
        this.notas$ = this.noteService.getByTitle(titulo);
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
