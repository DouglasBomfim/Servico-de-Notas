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

  //notas: Nota[];
  notas$: Observable<Nota[]>;

  constructor(private noteService : NoteServiceService) { }

  ngOnInit(){
    //this.noteService.list().subscribe(dados => this.notas = dados);
    //this.notas$ = this.noteService.list();
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
  
  add(){
    var abc: Nota = {
      "id": 12,
      "titulo": "qqrqyqyqdyqdyd",
      "texto": "Eu não vou por os fundamentos da minha fé em pequenos deuses que podem ser destruídos em uma era atômica, mas em um Deus que tem sido nosso socorro desde as eras passadas, e nossa esperança para os anos que virão, e nosso abrigo no tempo da tempestade, e nosso eterno lar. Este é o Deus em quem eu estou colocando o fundamento da minha fé. Este é o Deus que eu rogo a vocês para adorarem nesta manhã.Eu não vou por os fundamentos da minha fé em pequenos deuses que podem ser destruídos em uma era atômica, mas em um Deus que tem sido nosso socorro desde as eras passadas, e nossa esperança para os anos que virão, e nosso abrigo no tempo da tempestade, e nosso eterno lar. Este é o Deus em quem eu estou colocando o fundamento da minha fé. Este é o Deus que eu rogo a vocês para adorarem nesta manhã."
    }
    this.noteService.add(abc).subscribe(() => {
      this.onRefresh();
    });;
  }

  OnEdit(){
  }

  OnDelete(obj){
    this.noteService.remove(obj.id).subscribe(() => {
      this.onRefresh();
    });;
  }

}
