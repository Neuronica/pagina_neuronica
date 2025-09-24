import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface brands_list{
  brand_id: string,
  name :string,
}

@Injectable({
  providedIn: 'root'
})

export class BrandsService {
  private jsonURL = 'http://localhost:8080/api/brands/';

  constructor(private http: HttpClient){}

  getList():Observable<brands_list[]>{
    return this.http.get<brands_list[]>(this.jsonURL);
  }
}
