import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { NoteServiceService } from './services/note-service.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { AddNotaComponent } from './add-nota/add-nota.component';
import { EditarNotaComponent } from './editar-nota/editar-nota.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddNotaComponent,
    EditarNotaComponent,
    PesquisaComponent
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
