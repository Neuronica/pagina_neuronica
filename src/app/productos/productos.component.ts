import { Component, OnDestroy, Inject, PLATFORM_ID, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductListStateService } from './product-list-state.service';
import { forkJoin, Subscription} from 'rxjs';
import { finalize } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { ProductTypesService, product_types } from './servicios/product-types.service';
import { BrandsService, brands_list } from './servicios/brands.service';
import { ProductListService, product_list, PaginationMeta } from './servicios/product-list.service';
import { ProductMediaService, product_cover_list } from './servicios/product_media.service';

type Filtros = {
  orden?: string;      // ej: 'relevancia' | 'precio_asc' | 'precio_desc' | 'novedades'
  proveedor?: string;  // ej: 'elegoo' | 'anycubic' | 'otromarca'
  tipo?: string;       // ej: 'impresoras' | 'resinas' | 'repuestos'
  page?: number;       // si tienes paginación
};

@Component({
  selector: 'app-productos',
  standalone: false,
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})

export class ProductosComponent implements AfterViewInit, OnDestroy {
  
  defaultOrderOption = [
    {
      order_id: "ORB-1", 
      name: "Ordenar Por"
    },
    {
      order_id: "ORB-2",
      name: "Mayor Precio"
    },
    {
      order_id: "ORB-3",
      name: "Menor Precio"
    },
    {
      order_id: "ORB-5",
      name: "Oferta"
    }
  ];
  defaultFilterOption = { 
    product_type_id: "PTS-1", 
    name: "Filtrar por"
  };
  defaultBrandOption = {
      brand_id: "SPS-1",
      name: "Marca",
  };

  productTypes: product_types[] = [];
  media: product_cover_list[] = [];
  brands: brands_list[] = [];
  order: any[] = [];
  test = null;
  productList: product_list[] = [];
  selectedType: product_types | null = null;
  selectedOrder: any | null = null;
  selectedBrand: brands_list | null = null;
  textoFiltro = "Filtrar por";
  filterBlocked: string = "";
  textoOrden = "Ordenar por";
  textoMarca = "Marca";
  paginationMeta: PaginationMeta | null = null;
  paginatedList: product_list[] = [];
  pageSize = 12; 
  pageIndex = 1;
  searchTerm = '';
  cargandoDatos = true;
  errorAlCargar = false;
  coverImage: any;

  @ViewChild('listContainer', { static: false }) listContainer!: ElementRef<HTMLDivElement>;

  orden?: Filtros['orden'];
  proveedor?: string;
  tipo?: string;
  productos: any[] = [];
  cargando = false;
  private restored = false;
  private dataSub?: Subscription;

  constructor(
    @Inject(PLATFORM_ID) private platformId:Object, 
    private title:Title, 
    private meta:Meta,
    private productypeservice: ProductTypesService, 
    private brandservice: BrandsService,
    private productlistservice: ProductListService,
    private ProductMediaService: ProductMediaService,
    private state: ProductListStateService,         
    private route: ActivatedRoute,                 
    private router: Router   
  ){}

  ngOnInit(): void {
    this.cargarDatosIniciales();
    if(isPlatformBrowser(this.platformId)){
      this.title.setTitle("Tienda De Productos Impresión 3D Neurónica");
      this.meta.addTag({name: 'description', content: 'Descubre todos los productos que Neurónica tiene para ti, tenemos materiales de impresión 3D, maquinas para hogar e industriales'});
      this.meta.addTag({name: 'keywords', content: 'Neurónica, Impresión 3D Bogotá, FDM, MSLA, DLP, Filamentos, Resinas, Repuestos impresión 3D, Tienda de productos, Tiendas impresión 3D'});
    }

    this.route.queryParams.subscribe(params => {
      const ordenId   = params['orden']     ?? this.state.getOrdenId();
      const tipoId    = params['tipo']      ?? this.state.getTipoId();
      const brandId   = params['proveedor'] ?? this.state.getBrandId();
      const q         = params['q']         ?? this.state.getQuery();
      const pageFromUrl     = params['page'] ? Number(params['page']) : undefined;
      const pageSizeFromUrl = params['pageSize'] ? Number(params['pageSize']) : undefined;

      this.pageIndex = pageFromUrl ?? this.state.getPage() ?? 1;
      this.pageSize  = pageSizeFromUrl ?? this.state.getPageSize() ?? 12;

      this.state.setPage(this.pageIndex);
      this.state.setPageSize(this.pageSize);
      this.state.setOrdenId(ordenId);
      this.state.setTipoId(tipoId);
      this.state.setBrandId(brandId);
      this.state.setQuery(q);

      // Orden
      const selectedOrder = this.defaultOrderOption.find(o => o.order_id === ordenId);
      this.selectedOrder = selectedOrder ? selectedOrder.name : null;
      this.textoOrden = selectedOrder ? selectedOrder.name : 'Ordenar Por';

      // Tipo
      const selectedType = this.productTypes.find(t => t.product_type_id === tipoId);
      this.selectedType = selectedType ?? null;
      this.textoFiltro = selectedType ? selectedType.name : 'Filrar por';

      // Marca
      const selectedBrand = this.brands.find(b => b.brand_id === brandId);
      this.selectedBrand = selectedBrand ?? null;
      this.textoMarca = selectedBrand ? selectedBrand.name : 'Marca';

      // Búsqueda
      this.searchTerm = q ?? '';


      this.updatePagination();
    });

  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const restore = () => {
        if (this.restored) return;
        const el = this.listContainer?.nativeElement;
        if (el) {
          const y = this.state.scrollTop || (this.state.getScroll?.() ?? 0);
          if (y > 0) el.scrollTop = y;
          this.restored = true;
        } else {
          requestAnimationFrame(restore);
      }
    };

    requestAnimationFrame(restore);
  }

  ngOnDestroy(): void {
    // Guarda la posición final del scroll antes de destruir el componente
    if (this.listContainer?.nativeElement) {
      const y = this.listContainer.nativeElement.scrollTop;
      this.state.scrollTop = y;
      if (this.state.setScroll) this.state.setScroll(y);
    }
  }
  
  cargarDatosIniciales(): void {
    this.cargandoDatos = true;
    this.errorAlCargar = false;

    forkJoin({
      media: this.ProductMediaService.getCovers(),
      types: this.productypeservice.getList(),
      brands: this.brandservice.getList(),
      products: this.productlistservice.getList(this.pageIndex, this.pageSize)
    }).pipe(
      finalize(() => this.cargandoDatos = false)
    ).subscribe({
      next: (results) => {
        this.media = results.media;
        this.productTypes = results.types;
        if(this.productTypes.filter(f => f.name === "Filtrar por").length === 0){
          this.productTypes.unshift(this.defaultFilterOption);
        }
        this.brands = results.brands;
        if(this.brands.filter(f => f.name === "Marca").length === 0){
          this.brands.unshift(this.defaultBrandOption);
        }
        this.productList = results.products.data;
        this.paginationMeta = results.products.meta;
        this.updatePagination();
      },
      error: (err) => {
        console.error('Error al cargar datos iniciales:', err);
        this.errorAlCargar = true;
      }
    });
  }

  seleccionarTipo(productType: any): void {
    this.selectedType = productType.name;
    this.textoFiltro = productType.name;
    this.state.setTipoId(productType.product_type_id);

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { tipo: productType.product_type_id, page: 1, pageSize: this.pageSize },
      queryParamsHandling: 'merge',
      replaceUrl: true
    });

    this.pageIndex = 1;
    this.updatePagination();
  }

  seleccionarOrden(order: any): void {
    this.selectedOrder = order.name;
    this.textoOrden = order.name;
    this.state.setOrdenId(order.order_id);

    // URL (resetea a pag 1, conserva pageSize)
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { orden: order.order_id, page: 1, pageSize: this.pageSize },
      queryParamsHandling: 'merge',
      replaceUrl: true
    });

    this.pageIndex = 1;
    this.updatePagination();
  }

  seleccionarProveedor(brand: any): void {
    this.selectedBrand = brand;
    this.textoMarca = brand.name;
    this.state.setBrandId(brand.brand_id);

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { proveedor: brand.brand_id, page: 1, pageSize: this.pageSize },
      queryParamsHandling: 'merge',
      replaceUrl: true
    });

    this.pageIndex = 1;
    this.updatePagination();
  }

  handlePageEvent(event: any): void {
    this.pageIndex = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    // Persistir en el state
    this.state.setPage(this.pageIndex);
    this.state.setPageSize(this.pageSize);

    // Llevarlo a la URL (para que al volver se restaure exacto)
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: this.pageIndex, pageSize: this.pageSize },
      queryParamsHandling: 'merge',
      replaceUrl: true
    });

    this.updatePagination();

    // (Opcional) subir al tope del contenedor cuando cambias de página
    const el = this.listContainer?.nativeElement;
    if (el) el.scrollTop = 0;
  }

  buscarProductos(): void {
    const q = this.searchTerm?.trim() || undefined;

    this.state.setQuery(q);

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { q, page: 1, pageSize: this.pageSize },
      queryParamsHandling: 'merge',
      replaceUrl: true
    });

    this.pageIndex = 1;
    this.updatePagination();
  }

  updatePagination(): void {
    this.cargandoDatos = true;
    this.errorAlCargar = false;

    const searchTerm = this.searchTerm.trim() !== '' ? this.searchTerm : undefined;
    const brandId = this.selectedBrand && this.selectedBrand.brand_id !== "SPS-1" ? this.selectedBrand.brand_id : undefined;
    const typeId = this.selectedType && this.selectedType.product_type_id !== "PTS-1" ? this.selectedType.product_type_id : undefined;
    const orderName = this.selectedOrder;

    this.productlistservice.getList(this.pageIndex, this.pageSize, searchTerm, brandId, typeId, orderName).pipe(
      finalize(() => this.cargandoDatos = false)
    ).subscribe({
      next: (response) => {
        this.productList = response.data;
        this.paginationMeta = response.meta;
      },
      error: (err) => {
        console.error('Error al cargar productos:', err);
        this.errorAlCargar = true;
      }
    });
  }

  getProductoMediaUrl(idProducto: string): string {
    this.coverImage = this.media.find(m => m.product_id === idProducto);
    return this.coverImage ? this.coverImage.url: '';
  }

  getProductoMediaAlt(idProducto: string): string {
    const media = this.media.find(m => (m.product_id === idProducto));
    return media ? media.alt : '';
  }

  onListScroll() {
    const el = this.listContainer?.nativeElement;
    if (!el) return;
    const y = el.scrollTop;
    this.state.scrollTop = y;
    this.state.setScroll?.(y);
  }

  private pushQueryParams(partial: any = {}) {
    const qp: any = {
      // ...tus filtros....
      page: partial.page ?? this.pageIndex ?? 1,
      pageSize: partial.pageSize ?? this.pageSize ?? 12,
      ...partial
    };
    Object.keys(qp).forEach(k => qp[k] === undefined && delete qp[k]);

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: qp,
      queryParamsHandling: 'merge',
      replaceUrl: true
    });
  }
}