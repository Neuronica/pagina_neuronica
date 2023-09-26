import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'neuronica';
  public getwidth: any;
  public getheight: any;
  public menuCel: boolean = false;
  public iconoVariable: boolean = false;
  abrirMenu(){
    this.menuCel =! this.menuCel;
    this.iconoVariable =! this.iconoVariable;
  }

  ngOnInit(){
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight;
  }

  @HostListener('window:resize', ['$event'])

  onWindowResize(){
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight;
  }
}

