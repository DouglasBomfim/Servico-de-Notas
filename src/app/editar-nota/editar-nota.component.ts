import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import { Subscription } from 'rxjs';
import { NoteServiceService } from './../services/note-service.service';

@Component({
  selector: 'app-editar-nota',
  templateUrl: './editar-nota.component.html',
  styleUrls: ['./editar-nota.component.css']
})
export class EditarNotaComponent implements OnInit, OnDestroy {

  form: FormGroup;

  inscricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private noteservice: NoteServiceService,
    private location: Location) { }

  ngOnInit() {
    this.form = new FormGroup(
      {
        id: new FormControl(null),
        titulo: new FormControl(null, Validators.required),
        texto: new FormControl(null, Validators.required)
      }
    );
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        const id = params['id'];
        console.log(id);
        const curso$ = this.noteservice.getById(id);
        curso$.subscribe(curso => {
          this.setForm(curso);
        });
      }
   );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  setForm(curso) {
    this.form.setValue({
      id: curso.id,
      titulo: curso.titulo,
      texto: curso.texto
    });
  }

  onSubmit() {
    this.noteservice.edit(this.form.value).subscribe(success => this.location.back());
  }

  onCancel() {
    this.location.back();
  }

}
