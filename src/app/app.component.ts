import { Component, HostListener, PLATFORM_ID, Inject, OnInit} from '@angular/core';
import { isPlatformBrowser, isPlatformServer} from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'neuronica';
  public getwidth: any;
  public getheight: any;
  public menuCel: boolean = false;
  public iconoVariable: boolean = false;
  public openMenu: boolean = false;
  public desplegar: boolean = false;

  public isBrowser: boolean;

  constructor( @Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }
  
  abrirMenu(){
    if (this.isBrowser){
      this.menuCel =! this.menuCel;
      this.iconoVariable =! this.iconoVariable;
      this.openMenu =! this.openMenu;
      this.desplegar  = false;
    }
  }

  desplegarMenu(){
    if(this.isBrowser){
      this.desplegar =! this.desplegar;
    }
  }

  cerrarVariables(){
    if(this.desplegar){
      this.desplegar = false;
    }
  }

  ngOnInit(){
    if (this.isBrowser){
      this.getwidth = window.innerWidth;
      this.getheight = window.innerHeight;
    }
  }

  @HostListener('window:resize', ['$event'])

  onWindowResize(){
    if (this.isBrowser){
      this.getwidth = window.innerWidth;
      this.getheight = window.innerHeight;
    }
  }
}

