import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InicioComponent } from './inicio.component';  // Asegúrate de que esta sea la ruta correcta a tu componente

@NgModule({
  declarations: [
    InicioComponent 
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    InicioComponent 
  ]
})
export class InicioModule { }
