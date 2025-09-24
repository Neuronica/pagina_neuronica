import { Component, HostListener, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DomSanitizer } from '@angular/platform-browser';
import { forkJoin} from 'rxjs';
import { finalize } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';
import { ProductMediaService, product_cover_list} from '../../productos/servicios/product_media.service';
import { ProductListService, product_list } from '../../productos/servicios/product-list.service';;
import * as AOS from 'aos';

@Component({
  selector: 'app-dlp',
  standalone: false,
  templateUrl: './dlp.component.html',
  styleUrl: './dlp.component.css'
})
export class DlpComponent implements OnInit{
  relatedProducts: product_list[] = []; 
  indiceRelacionadoActual: number = 0; 
  images: product_cover_list[] = [];
  todasLasImagenes: product_cover_list[] = [];
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
      window.addEventListener('load', AOS.refresh);;
      this.title.setTitle("Impresión 3D en Bogotá con SLA | Neurónica");
      this.meta.addTag({name: 'description', content: 'Descubre la precisión y detalle de la tecnología SLA. Ideal para prototipos complejos y producciones que requieran acabados de alta calidad.'});
      this.meta.addTag({name: 'keywords', content: 'Impresión 3D Bogotá, SLA, Impresión resina, Ingeniería y fabricación personalizada'});
    }

    forkJoin({
      images: this.ProductMediaService.getCovers(),
      relatedProducts: this.productoservice.getList()
    }).pipe(
      finalize(() => this.cargandoDatos = false)
    ).subscribe({
      next: (results) => {
        this.images = results.images;
        //this.relatedProducts = results.relatedProducts.filter(pro => pro.ID_PRODUCT_TYPE === 'PTS-5DV1IHJS');
      },
      error: (err) => {
        console.error('Error al cargar datos iniciales:', err);
        this.errorAlCargar = true;
      }
    });
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
    const imagenProducto = this.images.find(img => img.product_id === idProducto);
    return imagenProducto ? imagenProducto.url : 'assets/default-product-image.png';
  }

}
