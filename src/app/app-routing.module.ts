import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkPaginasComponent } from './link-paginas/link-paginas.component';
import {InicioComponent} from './inicio/inicio.component';
import { EmpresaComponent } from './empresa/empresa.component';
import {ServiciosComponent} from './servicios/servicios.component';
import {EscogenosComponent} from './escogenos/escogenos.component';
import { HogarComponent } from './hogar/hogar.component';
import { EmpresarialComponent} from './empresarial/empresarial.component';
import { CctvComponent } from './cctv/cctv.component';
import { DomoticaComponent } from './domotica/domotica.component';
import { CableadoComponent } from './cableado/cableado.component';
import { SoftwareComponent } from './software/software.component';
import { HardwareComponent } from './hardware/hardware.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {path: 'Inicio' , component: InicioComponent},
  {path: 'Empresa' , component: EmpresaComponent},
  {path: 'Servicios' , component: ServiciosComponent},  
  {path: 'escogernos' , component: EscogenosComponent},
  {path: 'Hogar' , component: HogarComponent},
  {path: 'Empresarial', component: EmpresarialComponent},
  {path: 'Cctv', component:CctvComponent},
  {path: 'Domotica', component:DomoticaComponent},
  {path: 'Cableado', component:CableadoComponent},
  {path: 'Software', component:SoftwareComponent},
  {path: 'Hardware', component:HardwareComponent},
  {path: '', redirectTo: 'Inicio', pathMatch: 'full'},
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
