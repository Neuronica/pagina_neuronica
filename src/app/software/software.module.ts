import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirmwareComponent } from './firmware/firmware.component';
import { RecopilacionDatosComponent } from './recopilacion-datos/recopilacion-datos.component';
import { AutomatizacionComponent } from './automatizacion/automatizacion.component';
import { DashboardsComponent } from './dashboards/dashboards.component';



@NgModule({
  declarations: [
    FirmwareComponent,
    RecopilacionDatosComponent,
    AutomatizacionComponent,
    DashboardsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SoftwareModule { }
