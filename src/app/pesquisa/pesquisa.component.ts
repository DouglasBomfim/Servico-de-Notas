import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteServiceService } from '../services/note-service.service';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {

  notas$;

  constructor(private route: ActivatedRoute, private noteService : NoteServiceService) { }

  ngOnInit(){
    this.route.params.subscribe(
      (params: any) => {
        const titulo = params['titulo'];
        this.notas$ = this.noteService.getByTitle(titulo);
     }
   );  
  }

  
}
