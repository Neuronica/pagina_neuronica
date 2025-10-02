import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ProductInformation {
  slug:string,
  name: string;
  description: string;
  json: Record<string, any>,
  is_default: boolean,
  price: number,
  offer: number,
  brand: string;
  type: string;
  stock: number;
  mercadoLibre: string;
  technology: string | null;
}

export interface RelatedProductsList {
  slug: string,
  product: string,
  price: number,
  offer: number,
  type: string,
  technology: string,
}

export interface ProductListResponse {
  data: product_list[];
  meta: PaginationMeta;
}

export interface PaginationMeta {
  page:        number;
  limit:       number;
  totalItems:  number;
  totalPages:  number;
}

export interface product_list{
    product_id: string,
    name: string,
    slug: string,
    price_from: number,
    offer: boolean,
    currency_id: string,
}

@Injectable({
  providedIn: 'root'
})

export class ProductListService {
  private jsonURL = 'https://pagina-neuronica-backend-490354620288.us-west1.run.app/api/products/';

  constructor(private http: HttpClient){}

  getList(
    page:   number = 1,
    limit:  number = 10,
    search: string = '',
    brandId?: string,
    productTypeId?: string,
    orderName?: string
  ):Observable< ProductListResponse>{
    let params = new HttpParams()
    .set('page', page.toString())
    .set('limit', limit.toString());


    if (search && search.trim() !== '') {
      params = params.set('search', search);
    }


    if (brandId) {
      params = params.set('brand_id', brandId);
    }
    
    if (productTypeId) {
      params = params.set('product_type_id', productTypeId);
    }

    if(orderName) {
      params = params.set('order_name', orderName);
    }
    
    return this.http.get< ProductListResponse>(this.jsonURL, {params});
  }

  getById(
    idProducto: string
  ):Observable<ProductInformation[]> {
    return this.http.get<ProductInformation[]>(`${this.jsonURL}${idProducto}`)
  }

  getRelatedMachines(
    technology: string
  ):Observable<RelatedProductsList[]>{
    return this.http.get<RelatedProductsList[]>(`${this.jsonURL}list/${technology}`)
  }

  getRelatedMaterials():Observable<RelatedProductsList[]>{
    return this.http.get<RelatedProductsList[]>(`${this.jsonURL}materials/`)
  }
}
