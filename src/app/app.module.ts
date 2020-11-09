import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { NoteServiceService } from './services/note-service.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AddNotaComponent } from './add-nota/add-nota.component';
import { EditarNotaComponent } from './editar-nota/editar-nota.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddNotaComponent,
    EditarNotaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [NoteServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
