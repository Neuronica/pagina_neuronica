import { importProvidersFrom, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { DomoticaComponent } from './domotica/domotica.component';
import { IotComponent } from './iot/iot.component';
import { SoftwareComponent } from './software/software.component'; //Linea
import { AutomatizacionComponent } from './software/automatizacion/automatizacion.component';
import { FirmwareComponent } from './software/firmware/firmware.component';
import { RecopilacionDatosComponent } from './software/recopilacion-datos/recopilacion-datos.component';
import { HardwareComponent } from './hardware/hardware.component';//Linea
import { ComponentesComponent } from './hardware/componentes/componentes.component';
import { DisenoProductoComponent } from './hardware/diseno-producto/diseno-producto.component';
import { IngenieriaInversaComponent } from './hardware/ingenieria-inversa/ingenieria-inversa.component';
import { PCBComponent } from './hardware/pcb/pcb.component';
import { PCBAComponent } from './hardware/pcba/pcba.component';
import { ManufacturaComponent } from './manufactura/manufactura.component'; //Linea
import { CncComponent } from './manufactura/cnc/cnc.component';
import { FdmComponent } from './manufactura/fdm/fdm.component';
import { LaserComponent } from './manufactura/laser/laser.component';
import { SlaComponent } from './manufactura/sla/sla.component';

const routes: Routes = [
  { path:'', component:InicioComponent},
  { path:'quienes-somos-neuronica', component:NosotrosComponent},
  { path: 'domotica-personalizada', component:DomoticaComponent},
  { path:'linea-servicio-iot', component:IotComponent},
  { path:'linea-servicio-software', component:SoftwareComponent}, //Linea
  { path: 'automatizaciones', component:AutomatizacionComponent},
  { path: 'firmware', component:FirmwareComponent},
  { path: 'recopilacion-datos', component:RecopilacionDatosComponent},
  { path:'linea-servicio-hardware', component:HardwareComponent}, //Linea
  { path:'importacion-componentes', component:ComponentesComponent},
  { path:'ingenieria-inversa', component:IngenieriaInversaComponent},
  { path:'diseno-producto', component:DisenoProductoComponent},
  { path:'PCB', component:PCBComponent},
  { path:'PCBA', component:PCBAComponent},
  { path:'linea-servicio-manufactura', component:ManufacturaComponent}, //Linea
  { path: 'cnc', component:CncComponent},
  { path: 'fdm', component:FdmComponent},
  { path: 'laser', component:LaserComponent},
  { path: 'sla', component:SlaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
