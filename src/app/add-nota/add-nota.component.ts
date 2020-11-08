import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { NoteServiceService } from './../services/note-service.service';
import { Nota } from './../models/nota.model';

@Component({
  selector: 'app-add-nota',
  templateUrl: './add-nota.component.html',
  styleUrls: ['./add-nota.component.css']
})
export class AddNotaComponent implements OnInit {

  form = new FormGroup(
    {
      id: new FormControl(''),
      titulo: new FormControl(''),
      texto: new FormControl('')
    }
  );
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private noteService: NoteServiceService,
    private location: Location) { }

  ngOnInit(): void {
    //const nota = this.route.snapshot.data['addnota'];

    //this.form = this.fb.group({
    //  id: [nota.id],
    //  titulo: [nota.titulo],
    //  texto: [nota.texto]
    //});
  }

  onSubmit(){
    this.submitted = true;
    this.noteService.add(this.form.value).subscribe(success => this.location.back());
    console.log(this.form);
  }

  onCancel() {
    this.submitted = false;
    this.form.reset();
  }

}
