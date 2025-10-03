import { Component, HostListener, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DomSanitizer } from '@angular/platform-browser';
import { forkJoin} from 'rxjs';
import { finalize } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';
import { ProductMediaService, product_cover_list} from '../../productos/servicios/product_media.service';
import { ProductListService, RelatedProductsList } from '../../productos/servicios/product-list.service';
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
  relatedProducts: RelatedProductsList[] = []; 
  indiceRelacionadoActual: number = 0; 
  images: product_cover_list[] = [];
  todasLasImagenes: product_cover_list[] = [];
  trackBySlug = (_: number, item: RelatedProductsList) => item.slug;
  cargandoDatos = true;
  errorAlCargar = false; 

  constructor(
    @Inject(PLATFORM_ID) private platformId:Object, 
    private title:Title, private meta:Meta,
    private sanitizer: DomSanitizer,
    private ProductMediaService: ProductMediaService,
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
      this.meta.addTag({name: 'keywords', content: 'Neurónica, Impresión 3D Bogotá, FDM, PLA, PETG, TPU, ABS, Ingeniería y fabricación personalizada'});
    }

    forkJoin({
      todasLasImagenes: this.ProductMediaService.getCovers(),
      relatedProducts: this.productoservice.getRelatedMachines('FDM')
    }).pipe(
      finalize(() => this.cargandoDatos = false)
    ).subscribe({
      next: (results) => {
        this.todasLasImagenes = results.todasLasImagenes;
        this.relatedProducts = results.relatedProducts;
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
    const itemsPerSlide = 1;
    if (totalItems > 0) {
      this.indiceRelacionadoActual = (this.indiceRelacionadoActual + itemsPerSlide) % totalItems;
    }
  }
  
  anteriorRelacionado(): void {
    const totalItems = this.relatedProducts.length;
    const itemsPerSlide = 1;
    if (totalItems > 0) {
      this.indiceRelacionadoActual = (this.indiceRelacionadoActual - itemsPerSlide + totalItems) % totalItems;
    }
  }

  getProductoImageUrl(idProducto: string): string {
    const imagenProducto = this.todasLasImagenes.find(img => img.slug === idProducto);
    return imagenProducto ? imagenProducto.url : 'assets/default-product-image.png';
  }
}
