import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import {GoogleMap, MapAdvancedMarker} from '@angular/google-maps';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FooterContainerComponent } from './footer-container/footer-container.component';
import { InicioComponent } from './inicio/inicio.component';
import { DetalleComponent } from './productos/detalle/detalle.component';
import { LoadingComponent } from './loading/loading.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component'; 
import { NosotrosComponent } from './nosotros/nosotros.component';
import { HardwareComponent } from './hardware/hardware.component';
import { DisenoProductoComponent } from './hardware/diseno-producto/diseno-producto.component';
import { PCBComponent } from './hardware/pcb/pcb.component';
import { PCBAComponent } from './hardware/pcba/pcba.component';
import { ComponentesComponent } from './hardware/componentes/componentes.component';
import { IngenieriaInversaComponent } from './hardware/ingenieria-inversa/ingenieria-inversa.component';
import { ManufacturaComponent } from './manufactura/manufactura.component';
import { LaserComponent } from './manufactura/laser/laser.component';
import { CncComponent } from './manufactura/cnc/cnc.component';
import { FdmComponent } from './manufactura/fdm/fdm.component';
import { SlaComponent } from './manufactura/sla/sla.component';
import { DlpComponent } from './manufactura/dlp/dlp.component';
import { SoftwareComponent } from './software/software.component';
import { FirmwareComponent } from './software/firmware/firmware.component';
import { RecopilacionDatosComponent } from './software/recopilacion-datos/recopilacion-datos.component';
import { AutomatizacionComponent } from './software/automatizacion/automatizacion.component';
import { Impresion3dComponent } from './manufactura/impresion3d/impresion3d.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    FooterContainerComponent,
    InicioComponent,
    DetalleComponent,
    LoadingComponent,
    ErrorComponent,
    LoginComponent,
    NosotrosComponent,
    HardwareComponent,
    DisenoProductoComponent,
    PCBComponent,
    PCBAComponent,
    ComponentesComponent,
    IngenieriaInversaComponent,
    ManufacturaComponent,
    LaserComponent,
    CncComponent,
    FdmComponent,
    SlaComponent,
    DlpComponent,
    SoftwareComponent,
    FirmwareComponent,
    RecopilacionDatosComponent,
    AutomatizacionComponent,
    Impresion3dComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    HttpClientModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatMenuModule,
    BrowserAnimationsModule,
    GoogleMap,
    MapAdvancedMarker
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withInterceptorsFromDi()), 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
