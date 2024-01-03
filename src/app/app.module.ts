import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import{MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmpresaComponent } from './empresa/empresa.component';
import { InicioComponent } from './inicio/inicio.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { EscogenosComponent } from './escogenos/escogenos.component';
import { HogarComponent } from './hogar/hogar.component';
import { EmpresarialComponent } from './empresarial/empresarial.component';
import { CctvComponent } from './cctv/cctv.component';
import { DomoticaComponent } from './domotica/domotica.component';
import { CableadoComponent } from './cableado/cableado.component';
import { SoftwareComponent } from './software/software.component';
import { HardwareComponent } from './hardware/hardware.component';
import { ImpresionComponent } from './impresion/impresion.component';
import * as AOS from 'aos';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFunctions, provideFunctions } from '@angular/fire/functions';

@NgModule({
  declarations: [
    AppComponent,
    EmpresaComponent,
    InicioComponent,
    ServiciosComponent,
    EscogenosComponent,
    HogarComponent,
    EmpresarialComponent,
    CctvComponent,
    DomoticaComponent,
    CableadoComponent,
    SoftwareComponent,
    HardwareComponent,
    ImpresionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    provideFirebaseApp(() => initializeApp({"projectId":"pagina-neuronica","appId":"1:490354620288:web:4b47b4a3bf8292b27e3365","storageBucket":"pagina-neuronica.appspot.com","apiKey":"AIzaSyCehxyCwkvTQalStC5dS73oNNvOtKFOvVE","authDomain":"pagina-neuronica.firebaseapp.com","messagingSenderId":"490354620288"})),
    provideFunctions(() => getFunctions())
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
