import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisenoProductoComponent } from './diseno-producto/diseno-producto.component';
import { PCBComponent } from './pcb/pcb.component';
import { PCBAComponent } from './pcba/pcba.component';
import { ComponentesComponent } from './componentes/componentes.component';
import { IngenieriaInversaComponent } from './ingenieria-inversa/ingenieria-inversa.component';



@NgModule({
  declarations: [
    DisenoProductoComponent,
    PCBComponent,
    PCBAComponent,
    ComponentesComponent,
    IngenieriaInversaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HardwareModule { }
