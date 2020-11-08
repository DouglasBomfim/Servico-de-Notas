import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNotaComponent } from './add-nota/add-nota.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'addnota', component: AddNotaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
