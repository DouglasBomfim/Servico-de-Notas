import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { NotaResolver } from './formulario/nota-resolver.resolver';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'addnota', component: FormularioComponent, resolve: {nota: NotaResolver} },
  { path: 'editarnota/:id', component: FormularioComponent, resolve: {nota: NotaResolver} },
  { path: 'pesquisa', component: PesquisaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
