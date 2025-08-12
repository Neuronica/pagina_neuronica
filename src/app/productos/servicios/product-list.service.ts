import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface product_list{
    ID_PRODUCT: string,
    ID_SUPPLIER: string,
    ID_REFERENCES: string,
    VERSION: string,
    DATE_ENTRY: string,
    DESCRIPTION: string,
    ID_CHARACTERISTIC: string,
    ID_PRODUCT_TYPE: string,
    ID_PART: string,
    PRICE: number,
    DISCOUNT: number,
    COLOR: string,
    STOCK: number
}

@Injectable({
  providedIn: 'root'
})

export class ProductListService {
  private jsonURL = 'assets/Data/products.json';

  constructor(private http: HttpClient){}

  getList():Observable<product_list[]>{
    return this.http.get<product_list[]>(this.jsonURL);
  }
}
