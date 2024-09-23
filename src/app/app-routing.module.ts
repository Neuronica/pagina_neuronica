import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { HogarComponent } from './hogar/hogar.component';
import { EmpresarialComponent } from './empresarial/empresarial.component';
import { CctvComponent } from './cctv/cctv.component';
import { DomoticaComponent } from './domotica/domotica.component';
import { CableadoComponent } from './cableado/cableado.component';
import { SoftwareComponent } from './software/software.component';
import { HardwareComponent } from './hardware/hardware.component';
import { ImpresionComponent } from './impresion/impresion.component';

const routes: Routes = [
  { path:'', component:InicioComponent},
  { path:'quienes-somos-neuronica', component:NosotrosComponent},
  { path:'servicios-de-ingenieria', component:ServiciosComponent},
  { path:'ingenieria-para-hogar', component:HogarComponent},
  { path:'ingenieria-empresarial', component:EmpresarialComponent},
  { path:'cctv-bogota', component:CctvComponent},
  { path: 'domotica-personalizada', component:DomoticaComponent},
  { path:'cableado-estructurado-bogota', component:CableadoComponent},
  { path:'desarrollo-de-software-a-medida', component:SoftwareComponent},
  { path:'diseno-y-desarrollo-electronico', component:HardwareComponent},
  { path:'impresion-3d-bogota', component:ImpresionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
