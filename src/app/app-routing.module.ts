import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNotaComponent } from './add-nota/add-nota.component';
import { EditarNotaComponent } from './editar-nota/editar-nota.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'addnota', component: AddNotaComponent },
  { path: 'editarnota/:id', component: EditarNotaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
