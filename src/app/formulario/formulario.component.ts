import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import { NoteService } from './../services/note-service.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  form: FormGroup;
  header: string = "Nova Nota";

  constructor(
    private fb: FormBuilder,
    private noteService: NoteService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {

    const nota = this.route.snapshot.data['nota'];

    this.form = this.fb.group(
      {
        id: [nota.id],
        titulo: [nota.titulo, Validators.required],
        texto: [nota.texto, Validators.required]
      }
    );

    if (this.form.controls['id'].value) {
      this.header = "Editar Nota";
    }
  }

  onSubmit() {
    this.noteService.save(this.form.value).subscribe(success => this.location.back());
  }

  onCancel() {
    this.form.reset();
  }
}
