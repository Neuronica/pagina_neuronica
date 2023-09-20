import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkPaginasComponent } from './link-paginas/link-paginas.component';
import {InicioComponent} from './inicio/inicio.component';
import { EmpresaComponent } from './empresa/empresa.component';
import {ServiciosComponent} from './servicios/servicios.component';
import {EscogenosComponent} from './escogenos/escogenos.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {path: 'Inicio' , component: InicioComponent},
  {path: 'Empresa' , component: EmpresaComponent},
  {path: 'Servicios' , component: ServiciosComponent},  
  {path: '¿Porque escogernos?' , component: EscogenosComponent},
  {path: '', redirectTo: 'Inicio', pathMatch: 'full'}
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
