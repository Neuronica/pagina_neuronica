import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { forkJoin, throwError, Subscription, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { ImagesService, image_list } from '../servicios/images.service';
import { CaracteristicasService, lista_caracteristicas } from '../servicios/caracteristicas.service';
import { ProductListService, product_list } from '../servicios/product-list.service';
import { VideosService, lista_videos } from '../servicios/videos.service';

@Component({
  selector: 'app-detalle',
  standalone: false,
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent implements OnInit, OnDestroy {

  relatedProducts: product_list[] = []; 
  indiceRelacionadoActual: number = 0; 
  images: image_list[] = [];
  todasLasImagenes: image_list[] = [];
  caracteristica: lista_caracteristicas[] = [];
  producto: product_list[] = [];
  video: lista_videos[] = [];
  idProducto: string | null = null;
  imagenActualIndex = 0;
  imagenActual: image_list | undefined;
  videoUrl: SafeResourceUrl | null = null;
  colorMap: { [key: string]: string } = {
    'ROJO': '#FF0000',
    'VAINILLA': '#F9E5BC',
    'GRIS': '#8A9597',
    'NEGRO': '#000000',
    'BLANCO': '#FFFFFF',
  };

  cargandoDatos = true;
  errorAlCargar = false;
  private routeSubscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private imagesservice: ImagesService,
    private carcateristicaservice: CaracteristicasService,
    private productoservice: ProductListService,
    private videoservice: VideosService,
  ){}

  ngOnInit(): void {
    // Usamos switchMap para gestionar los cambios de la URL
    this.routeSubscription = this.route.paramMap.pipe(
      // switchMap cancela la petición anterior si hay una nueva
      switchMap(params => {
        this.cargandoDatos = true;
        this.errorAlCargar = false;
        this.idProducto = params.get('id');

        // Si no hay ID, retornamos un observable vacío
        if (!this.idProducto) {
          return of({ images: [], caracteristicas: [], productos: [], videos: [] });
        }

        const requests = {
          images: this.imagesservice.getList(),
          caracteristicas: this.carcateristicaservice.getList(),
          productos: this.productoservice.getList(),
          videos: this.videoservice.getList()
        };

        return forkJoin(requests).pipe(
          catchError(error => {
            console.error('Error al cargar los datos del producto:', error);
            this.cargandoDatos = false;
            this.errorAlCargar = true;
            return throwError(() => new Error('Error al cargar los datos del producto.'));
          })
        );
      })
    ).subscribe(
      ({ images, caracteristicas, productos, videos }) => {
        // Reiniciamos los datos para evitar que se mezclen
        this.images = [];
        this.caracteristica = [];
        this.producto = [];
        this.video = [];
        this.relatedProducts = [];
        this.imagenActual = undefined;
        this.videoUrl = null;
        this.indiceRelacionadoActual = 0;
        
        // Ahora asignamos los nuevos datos del producto
        if (this.idProducto) {
          this.todasLasImagenes = images;
          this.images = images.filter(img => img.ID_PRODUCT === this.idProducto);
          this.caracteristica = caracteristicas.filter(c => c.ID_PRODUCT === this.idProducto);
          this.producto = productos.filter(p => p.ID_PRODUCT === this.idProducto);
          this.video = videos.filter(v => v.ID_PRODUCT === this.idProducto);
  
          if (this.images.length > 0) {
            this.imagenActual = this.images[0];
          }
  
          if (this.video && this.video.length > 0) {
            const videoId = this.video[0].URL;
            const youtubeEmbedUrl = `https://www.youtube.com/embed/${videoId}`;
            this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(youtubeEmbedUrl);
          }
  
          const productoActual = this.producto[0];
          if (productoActual) {
            this.relatedProducts = productos.filter(p => 
              p.ID_PRODUCT_TYPE === productoActual.ID_PRODUCT_TYPE && p.ID_PRODUCT !== productoActual.ID_PRODUCT
            );
          }
        }
        this.cargandoDatos = false; 
      }
    );
  }

  ngOnDestroy(): void {
    // Es crucial desuscribirse para evitar fugas de memoria
    this.routeSubscription.unsubscribe();
  }

  siguienteImagen(): void {
    if (this.images.length > 0) {
      this.imagenActualIndex = (this.imagenActualIndex + 1) % this.images.length;
      this.imagenActual = this.images[this.imagenActualIndex];
    }
  }

  anteriorImagen(): void {
    if (this.images.length > 0) {
      this.imagenActualIndex = (this.imagenActualIndex - 1 + this.images.length) % this.images.length;
      this.imagenActual = this.images[this.imagenActualIndex];
    }
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
    const imagenProducto = this.todasLasImagenes.find(img => img.ID_PRODUCT === idProducto);
    return imagenProducto ? imagenProducto.URL : 'assets/default-product-image.png';
  }

  getColorCode(colorName: string): string {
    return this.colorMap[colorName] || '#000000';
  }
}
