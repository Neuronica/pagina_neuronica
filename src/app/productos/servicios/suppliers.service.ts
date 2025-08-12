import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface supplier_list{
  ID_SUPPLIER: string,
  NAME: string,
  ID_COUNTRY: string,
  LOGO: string,
  NIT: string,
  EMAIL: string,
}

@Injectable({
  providedIn: 'root'
})

export class SuppliersService {
  private jsonURL = 'assets/Data/suppliers.json';

  constructor(private http: HttpClient){}

  getList():Observable<supplier_list[]>{
    return this.http.get<supplier_list[]>(this.jsonURL);
  }
}
