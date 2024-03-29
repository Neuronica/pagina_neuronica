import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { ImpresionComponent } from './impresion/impresion.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {path: '' , component: InicioComponent},
  {path: 'quienes-somos-neuronica' , component: EmpresaComponent},
  {path: 'servicios-de-ingenieria' , component: ServiciosComponent},  
  {path: 'por-que-escogernos-neuronica' , component: EscogenosComponent},
  {path: 'ingenieria-para-hogar' , component: HogarComponent},
  {path: 'ingenieria-empresarial', component: EmpresarialComponent},
  {path: 'cctv-bogota', component:CctvComponent},
  {path: 'domotica-personalizada', component:DomoticaComponent},
  {path: 'cableado-estructurado-bogota', component:CableadoComponent},
  {path: 'desarrollo-de-software-a-medida', component:SoftwareComponent},
  {path: 'diseno-y-desarrollo-electronico', component:HardwareComponent},
  {path: 'impresion-3d-bogota', component:ImpresionComponent},
  {path: '', redirectTo: '/', pathMatch: 'full'},
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
