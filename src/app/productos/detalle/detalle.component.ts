import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { forkJoin, throwError, Subscription, of, map, switchMap, shareReplay } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ProductMediaService, product_cover_list, videos_byId, images_by_slug } from '../servicios/product_media.service';
import { AttibutesService, attributes_list } from '../servicios/attributes.service';
import { ProductListService, product_list, ProductInformation, RelatedProductsList } from '../servicios/product-list.service';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';

@Component({
  selector: 'app-detalle',
  standalone: false,
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent implements OnInit, OnDestroy {

  actualImageMaterial = 0;
  variableTotalItems = 0;
  relatedProducts: RelatedProductsList[] = []; 
  indiceRelacionadoActual: number = 0; 
  todasLasImagenes: product_cover_list[] = [];
  attribute: attributes_list[] = [];
  producto: product_list[] = [];
  informationProduct: ProductInformation[] = [];
  video: videos_byId[] = [];
  imagesList: images_by_slug[] = [];
  idProducto: string | null = null;
  imagenActualIndex = 0;
  imagenActual: images_by_slug | undefined;
  videoUrl: SafeResourceUrl | null = null;
  variantStock: number = 0;
  trackBySlug = (_: number, item: RelatedProductsList) => item.slug;


  colorMap: { [key: string]: string } = {
    'ROJO': '#FF0000',
    'vainilla': '#F9E5BC',
    'gris': '#8A9597',
    'NEGRO': '#000000',
    'blanco': '#FFFFFF',
  };

  cargandoDatos = true;
  errorAlCargar = false;
  private routeSubscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private ProductMediaService: ProductMediaService,
    private attributesservice: AttibutesService,
    private productoservice: ProductListService,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {}

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
          return of({
            imagesList: [],
            attributes: [],
            productos: [],
            relatedProducts: [],
            informationProduct: [],
            video: [],
            todasLasImagenes: [],
          });
        }

        // 1) Petición base de info del producto, se comparte en varios lugares
        const info$ = this.productoservice.getById(this.idProducto).pipe(
          shareReplay(1) // cachea la respuesta para reutilizar
        );

        const selected$ = this.productoservice.getById(this.idProducto).pipe(
          // si tu API ya devuelve array:
          map(list => Array.isArray(list) ? (list.find(p => (p as any).is_default) ?? list[0] ?? null) : null),
          shareReplay(1)
        );


        const related$ = selected$.pipe(
          switchMap(p => {
            if (!p) {
              return of<RelatedProductsList[]>([]);
            }

            // Caso A: materiales → relacionados de materiales
            if (p.type === 'material') {
              return this.productoservice.getRelatedMaterials().pipe(
                catchError(() => of<RelatedProductsList[]>([]))
              );
            }

            // Caso B: máquinas → relacionados por tecnología (solo si existe technology)
            if (p.type === 'machine' && p.technology) {
              return this.productoservice.getRelatedMachines(p.technology).pipe(
                catchError(() => of<RelatedProductsList[]>([]))
              );
            }

            // Fallback: nada
            return of<RelatedProductsList[]>([]);
          })
        );


        // 3) El forkJoin final
        const requests = {
          imagesList: this.ProductMediaService.getImagesBySlug(this.idProducto),
          attributes: this.attributesservice.getAttributesBySlug(this.idProducto),
          productos: this.productoservice.getList(),
          informationProduct: info$.pipe(shareReplay(1)),
          relatedProducts: related$,
          video: this.ProductMediaService.getVideoByid(this.idProducto),
          todasLasImagenes: this.ProductMediaService.getCovers(),
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
      ({ imagesList, attributes, productos, relatedProducts, informationProduct, video, todasLasImagenes }) => {
        // Reiniciamos los datos para evitar que se mezclen
        this.imagesList = [];
        this.attribute = [];
        this.producto = [];
        this.relatedProducts = [];
        this.informationProduct = [];
        this.video = [];
        this.todasLasImagenes = [];
        this.relatedProducts = [];
        this.imagenActual = undefined;
        this.videoUrl = null;
        this.indiceRelacionadoActual = 0;

        // Ahora asignamos los nuevos datos del producto
        if (this.idProducto) {
          this.imagesList = imagesList;
          this.attribute = attributes;
          this.relatedProducts = relatedProducts;
          this.variableTotalItems = this.relatedProducts.length;
          this.informationProduct = informationProduct;
          this.variantStock = informationProduct[0].stock;
          this.video = video;
          this.todasLasImagenes = todasLasImagenes;

          if (this.imagesList.length > 0) {
            this.imagenActual = this.imagesList[0];
          }

          if (this.video && this.video.length > 0) {
            this.videoUrl = this.buildYouTubeUrl(video[0].url);
          }

          const productoActual = this.producto[0];
          for(let i=0; i < this.relatedProducts.length; i++){
            console.log('Producto ' + this.relatedProducts[i].product);
          }
          //console.log('Relacionados' + this.relatedProducts[5].product);
        }

        this.cargandoDatos = false;

        this.refreshAosClientOnly();
      }
    );
  }

  private refreshAosClientOnly(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    import('aos').then(({ default: AOS }) => {
      // pequeño delay para asegurar DOM ya actualizado
      setTimeout(() => (AOS.refreshHard ?? AOS.refresh)?.(), 0);
    }).catch(() => { /* opcional: silenciar si AOS no está */ });
  }

  private buildYouTubeUrl(id: string): SafeResourceUrl {
    const embed = `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(embed);
  }


  ngOnDestroy(): void {
    // Es crucial desuscribirse para evitar fugas de memoria
    this.routeSubscription.unsubscribe();
  }

  siguienteImagen(): void {
    if (this.imagesList.length > 0) {
      this.imagenActualIndex = (this.imagenActualIndex + 1) % this.imagesList.length;
      this.imagenActual = this.imagesList[this.imagenActualIndex];
    }
  }

  anteriorImagen(): void {
    if (this.imagesList.length > 0) {
      this.imagenActualIndex = (this.imagenActualIndex - 1 + this.imagesList.length) % this.imagesList.length;
      this.imagenActual = this.imagesList[this.imagenActualIndex];
    }
  }

  changeVariant(variantNumbre: number, colorName: string): void {
    this.actualImageMaterial = variantNumbre;
    this.imagenActual = this.imagesList[variantNumbre];

    this.variantStock = this.informationProduct[variantNumbre].stock;

  }

  siguienteRelacionado(): void {
    const totalItems = this.relatedProducts.length;
    this.variableTotalItems = totalItems;
    const itemsPerSlide = 1;
    if (totalItems > 0) {
      this.indiceRelacionadoActual = (this.indiceRelacionadoActual + itemsPerSlide) % totalItems;
    }
  }

  anteriorRelacionado(): void {
    const totalItems = this.relatedProducts.length;
    this.variableTotalItems = totalItems;
    const itemsPerSlide = 1;
    if (totalItems > 0) {
      this.indiceRelacionadoActual = (this.indiceRelacionadoActual - itemsPerSlide + totalItems) % totalItems;
    }
  }

  getProductoImageUrl(idProducto: string): string {
    const imagenProducto = this.todasLasImagenes.find(img => img.slug === idProducto);
    return imagenProducto ? imagenProducto.url : 'assets/default-product-image.png';
  }

  getColorCode(colorName: string): string {
    return this.colorMap[colorName] || '#000000';
  }
}
