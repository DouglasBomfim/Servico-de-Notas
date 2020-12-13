import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {

  inscricao: Subscription;
  titulo;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.inscricao = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.titulo = queryParams['titulo'];
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
