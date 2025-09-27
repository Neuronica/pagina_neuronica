import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ProductTypesService, product_types } from './servicios/product-types.service';
import { BrandsService, brands_list } from './servicios/brands.service';
import { ProductListService, product_list, PaginationMeta } from './servicios/product-list.service';
import { ProductMediaService, product_cover_list } from './servicios/product_media.service';

@Component({
  selector: 'app-productos',
  standalone: false,
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})

export class ProductosComponent implements OnInit{
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
    name: "Filrar por"
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
  textoFiltro = "Filtar por";
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

  constructor(
    private productypeservice: ProductTypesService, 
    private brandservice: BrandsService,
    private productlistservice: ProductListService,
    private ProductMediaService: ProductMediaService,
  ){}

  ngOnInit(): void {
    this.cargarDatosIniciales();
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
        this.productTypes.unshift(this.defaultFilterOption);
        this.brands = results.brands;
        this.brands.unshift(this.defaultBrandOption);
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

  seleccionarTipo(productType: product_types): void {
    this.selectedType = productType;
    this.textoFiltro = productType.name;
    this.updatePagination();
  }

  seleccionarOrden(order: any): void {
    this.selectedOrder = order.name;
    this.textoOrden = order.name;
    this.updatePagination();
  }

  seleccionarProveedor(brand: brands_list): void {
    this.selectedBrand = brand;
    this.textoMarca = brand.name;
    console.log("Marca");
    console.log(brand);
    this.updatePagination();
  }

  handlePageEvent(event: any): void {
    this.pageIndex = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.updatePagination();
  }

  buscarProductos(): void {
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
}