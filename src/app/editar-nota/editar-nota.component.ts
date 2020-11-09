import { Component, OnInit } from '@angular/core';

import { NoteServiceService } from './../services/note-service.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-editar-nota',
  templateUrl: './editar-nota.component.html',
  styleUrls: ['./editar-nota.component.css']
})
export class EditarNotaComponent implements OnInit {

  form = new FormGroup(
    {
      id: new FormControl(''),
      titulo: new FormControl(''),
      texto: new FormControl('')
    }
  );

  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private noteservice: NoteServiceService,
    private location: Location) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: any) => {
        const id = params['id'];
        console.log(id);
        const curso$ = this.noteservice.get(id);
        curso$.subscribe(curso => {
        this.setForm(curso);
        });
      }
   );
  }

  setForm(curso) {
    this.form.setValue({
      id: curso.id,
      titulo: curso.titulo,
      texto: curso.texto
    });
  }

  onSubmit(){
    this.submitted = true;
    this.noteservice.edit(this.form.value).subscribe(success => this.location.back());
    console.log(this.form);
  }

  onCancel() {
    this.location.back();
  }

}
