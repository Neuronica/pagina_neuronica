import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface product_types {
  product_type_id: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductTypesService {
  private jsonURL = 'https://pagina-neuronica-backend-490354620288.us-west1.run.app/api/product-types/';

  constructor(private http:HttpClient){}

  getList():Observable<product_types[]>{
    return this.http.get<product_types[]>(this.jsonURL);
  }
}
