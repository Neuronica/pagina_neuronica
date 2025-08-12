import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { forkJoin, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
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
export class DetalleComponent implements OnInit{
  images: image_list[] = [];
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
    // Puedes agregar más colores aquí
  };

  cargandoDatos = true;
  errorAlCargar = false;

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private imagesservice: ImagesService,
    private carcateristicaservice: CaracteristicasService,
    private productoservice: ProductListService,
    private videoservice: VideosService,
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.idProducto = params.get('id');
      if (this.idProducto) {
        this.cargarDatos(this.idProducto);
      }
    });
  }

  cargarDatos(id: string): void {
    this.cargandoDatos = true;
    this.errorAlCargar = false; 
  
    const requests = {
      images: this.imagesservice.getList(),
      caracteristicas: this.carcateristicaservice.getList(),
      productos: this.productoservice.getList(),
      videos: this.videoservice.getList()
    };

    forkJoin(requests).pipe(
      catchError(error => {
        console.error('Error al cargar los datos del producto:', error);
        this.cargandoDatos = false;
        this.errorAlCargar = true;
        return throwError(() => new Error('Error al cargar los datos del producto.'));
      })
    ).subscribe(
      ({ images, caracteristicas, productos, videos }) => {
        this.images = images.filter(img => img.ID_PRODUCT === id);
        this.caracteristica = caracteristicas.filter(c => c.ID_PRODUCT === id);
        this.producto = productos.filter(p => p.ID_PRODUCT === id);
        this.video = videos.filter(v => v.ID_PRODUCT === id);

        if (this.images.length > 0) {
          this.imagenActual = this.images[0];
        }

        if (this.video && this.video.length > 0) {
          const videoId = this.video[0].URL;
          const youtubeEmbedUrl = `https://www.youtube.com/embed/${videoId}`;
          this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(youtubeEmbedUrl);
        }

        this.cargandoDatos = false; 
      }
    );
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

  getColorCode(colorName: string): string {
    return this.colorMap[colorName] || '#000000';
  }
}