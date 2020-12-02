import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import { NoteServiceService } from './../services/note-service.service';

@Component({
  selector: 'app-add-nota',
  templateUrl: './add-nota.component.html',
  styleUrls: ['./add-nota.component.css']
})
export class AddNotaComponent implements OnInit {

  form: FormGroup;

  constructor(
    private noteService: NoteServiceService,
    private location: Location) { }

  ngOnInit(): void {
    this.form = new FormGroup(
      {
        id: new FormControl(null),
        titulo: new FormControl(null, Validators.required),
        texto: new FormControl(null, Validators.required)
      }
    );
  }

  onSubmit(){
    this.noteService.add(this.form.value).subscribe(success => this.location.back());
  }

  onCancel() {
    this.form.reset();
  }

}
