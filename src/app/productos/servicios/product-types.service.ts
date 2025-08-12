import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface product_types {
  ID_PRODUCT_TYPE: string;
  PRODUCT_TYPE: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductTypesService {
  private jsonURL = 'assets/Data/product_types.json';

  constructor(private http:HttpClient){}

  getList():Observable<product_types[]>{
    return this.http.get<product_types[]>(this.jsonURL);
  }
}
