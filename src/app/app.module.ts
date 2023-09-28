import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import{MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NmenuComponent } from './nmenu/nmenu.component';
import { LinkPaginasComponent } from './link-paginas/link-paginas.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { InicioComponent } from './inicio/inicio.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { EscogenosComponent } from './escogenos/escogenos.component';
import { HogarComponent } from './hogar/hogar.component';
import { EmpresarialComponent } from './empresarial/empresarial.component';
import * as AOS from 'aos';

@NgModule({
  declarations: [
    AppComponent,
    NmenuComponent,
    LinkPaginasComponent,
    EmpresaComponent,
    InicioComponent,
    ServiciosComponent,
    EscogenosComponent,
    HogarComponent,
    EmpresarialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    console.log(AOS); // loaded script
  }

  ngOnInit() {
    AOS.init();
  }
}
