import { Component, OnInit} from '@angular/core';
import { forkJoin } from 'rxjs'; // Importamos 'forkJoin' para manejar múltiples observables
import { finalize } from 'rxjs/operators'; // Importamos 'finalize'
import { ProductTypesService, product_types } from './servicios/product-types.service';
import { OrderService, order_by } from './servicios/order.service';
import { SuppliersService, supplier_list } from './servicios/suppliers.service';
import { ProductListService, product_list } from './servicios/product-list.service';
import { ImagesService, image_list } from './servicios/images.service';

@Component({
  selector: 'app-productos',
  standalone: false,
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})

export class ProductosComponent implements OnInit{
  defaultOrderOption = { 
    ID_ORDER_BY: "ORB-1", 
    ORDER_BY: "Ordenar por"
  };
  defaultFilterOption = { 
    ID_PRODUCT_TYPE: "PTS-1", 
    PRODUCT_TYPE: "Filrar por"
  };
  defaultSupplierOption = {
      ID_SUPPLIER: "SPS-1",
      NAME: "Marca",
      ID_COUNTRY: "NO APLICA",
      LOGO: "NO APLICA",
      NIT: "NO APLICA",
      EMAIL: "NO APLICA"
    };

  productTypes: product_types[] = [];
  images: image_list[] = [];
  suppliers: supplier_list[] = [];
  orders: order_by[] = [];
  test = null;
  productList: product_list[] = [];
  selectedType: product_types | null = null;
  selectedOrder: order_by | null = null;
  selectedSupplier: supplier_list | null = null;
  textoFiltro = "Filtar por";
  textoOrden = "Ordenar por";
  textoMarca = "Marca";
  paginatedList: product_list[] = [];
  pageSize = 9; 
  pageIndex = 0;
  cargandoDatos = true;
  errorAlCargar = false; 

  constructor(
    private productypeservice: ProductTypesService, 
    private orderservice: OrderService,
    private supplierservice: SuppliersService,
    private productlistservice: ProductListService,
    private imagesservice: ImagesService,
  ){}

  ngOnInit(): void {
    this.cargarDatosIniciales();
  }

  cargarDatosIniciales(): void {
    this.cargandoDatos = true;
    this.errorAlCargar = false;

    forkJoin({
      images: this.imagesservice.getList(),
      types: this.productypeservice.getList(),
      orders: this.orderservice.getList(),
      suppliers: this.supplierservice.getList(),
      products: this.productlistservice.getList()
    }).pipe(
      finalize(() => this.cargandoDatos = false)
    ).subscribe({
      next: (results) => {
        this.images = results.images;
        this.productTypes = results.types;
        this.productTypes.unshift(this.defaultFilterOption);
        this.orders = results.orders;
        this.orders.unshift(this.defaultOrderOption);
        this.suppliers = results.suppliers;
        this.suppliers.unshift(this.defaultSupplierOption);
        this.productList = results.products;
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
    this.textoFiltro = productType.PRODUCT_TYPE;

    console.log('Has seleccionado a:', productType.PRODUCT_TYPE);
  }

  seleccionarOrden(order: order_by): void {
    this.selectedOrder = order;
    this.textoOrden = order.ORDER_BY;
    console.log('Has seleccionado a:', order.ORDER_BY);
  }

  seleccionarProveedor(supplier: supplier_list): void {
    this.selectedSupplier = supplier;
    this.textoMarca = supplier.NAME;
    console.log('Has seleccionado a:', supplier.NAME);
  }

  handlePageEvent(event: any): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePagination();
  }

  // Función para actualizar la lista de productos a mostrar
  updatePagination(): void {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedList = this.productList.slice(startIndex, endIndex);
  }

  getProductoImageUrl(idProducto: string): string {
    const image = this.images.find(imagen => imagen.ID_PRODUCT === idProducto);
    return image ? image.URL : '';
  }

}
