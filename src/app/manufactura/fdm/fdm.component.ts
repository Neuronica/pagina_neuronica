import { Component, HostListener, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DomSanitizer } from '@angular/platform-browser';
import { forkJoin} from 'rxjs';
import { finalize } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';
import { ImagesService, image_list} from '../../productos/servicios/images.service';
import { ProductListService, product_list } from '../../productos/servicios/product-list.service';
import * as AOS from 'aos';

@Component({
    selector: 'app-fdm',
    templateUrl: './fdm.component.html',
    styleUrls: ['./fdm.component.css'],
    standalone: false
})
export class FdmComponent implements OnInit{
  public getwidth: any;
  public getheight: any;
  iconoVariable: boolean = false;
  relatedProducts: product_list[] = []; 
  indiceRelacionadoActual: number = 0; 
  images: image_list[] = [];
  todasLasImagenes: image_list[] = [];
  cargandoDatos = true;
  errorAlCargar = false; 

  constructor(
    @Inject(PLATFORM_ID) private platformId:Object, 
    private title:Title, private meta:Meta,
    private sanitizer: DomSanitizer,
    private imagesservice: ImagesService,
    private productoservice: ProductListService,
  ){}
  
  ngOnInit(){
    if(isPlatformBrowser(this.platformId)){
      AOS.init();
      window.addEventListener('load', AOS.refresh);
      this.getwidth = window.innerWidth;
      this.getheight = window.innerHeight;
      this.title.setTitle("Impresión 3D en Bogotá con FDM | Neurónica");
      this.meta.addTag({name: 'description', content: 'Optimiza tus proyectos con impresión 3D FDM en PLA, PETG o TPU. Ofrecemos prototipado y producción escalable para ingeniería y fabricación personalizada.'});
      this.meta.addTag({name: 'keywords', content: 'Impresión 3D Bogotá, FDM, PLA, PETG, TPU, Ingeniería y fabricación personalizada'});
    }

    forkJoin({
      images: this.imagesservice.getList(),
      relatedProducts: this.productoservice.getList()
    }).pipe(
      finalize(() => this.cargandoDatos = false)
    ).subscribe({
      next: (results) => {
        this.images = results.images;
        this.relatedProducts = results.relatedProducts.filter(pro => pro.ID_PRODUCT_TYPE === 'PTS-5DV1IHJS');
      },
      error: (err) => {
        console.error('Error al cargar datos iniciales:', err);
        this.errorAlCargar = true;
      }
    });
  }

  @HostListener('window:resize', ['$event'])

  onWindowResize(){
    this.getwidth = window.innerWidth;
    this.getheight = window.innerHeight;
  }

  siguienteRelacionado(): void {
    const totalItems = this.relatedProducts.length;
    const itemsPerSlide = 3;
    if (totalItems > 0) {
      this.indiceRelacionadoActual = (this.indiceRelacionadoActual + itemsPerSlide) % totalItems;
    }
  }
  
  anteriorRelacionado(): void {
    const totalItems = this.relatedProducts.length;
    const itemsPerSlide = 3;
    if (totalItems > 0) {
      this.indiceRelacionadoActual = (this.indiceRelacionadoActual - itemsPerSlide + totalItems) % totalItems;
    }
  }

  getProductoImageUrl(idProducto: string): string {
    const imagenProducto = this.images.find(img => img.ID_PRODUCT === idProducto);
    return imagenProducto ? imagenProducto.URL : 'assets/default-product-image.png';
  }
}
