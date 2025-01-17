import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FdmComponent } from './fdm/fdm.component';
import { SlaComponent } from './sla/sla.component';
import { LaserComponent } from './laser/laser.component';
import { CncComponent } from './cnc/cnc.component';



@NgModule({
  declarations: [
    FdmComponent,
    SlaComponent,
    LaserComponent,
    CncComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ImpresionModule { }
