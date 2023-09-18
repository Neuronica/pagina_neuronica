import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkPaginasComponent } from './link-paginas/link-paginas.component';

const routes: Routes = [
  {path: 'Inicio' , component: LinkPaginasComponent},
  {path: 'Empresa' , component: LinkPaginasComponent},
  {path: 'Servicios' , component: LinkPaginasComponent},  
  {path: '¿Porque escogernos?' , component: LinkPaginasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
