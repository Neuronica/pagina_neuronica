import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import{MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NmenuComponent } from './nmenu/nmenu.component';
import { LinkPaginasComponent } from './link-paginas/link-paginas.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { InicioComponent } from './inicio/inicio.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { EscogenosComponent } from './escogenos/escogenos.component';


@NgModule({
  declarations: [
    AppComponent,
    NmenuComponent,
    LinkPaginasComponent,
    EmpresaComponent,
    InicioComponent,
    ServiciosComponent,
    EscogenosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
