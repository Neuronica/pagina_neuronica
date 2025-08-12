import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface order_by{
  ID_ORDER_BY: string,
  ORDER_BY: string,
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private jsonURL = 'assets/Data/order_by.json';

  constructor(private http: HttpClient){}

  getList():Observable<order_by[]>{
    return this.http.get<order_by[]>(this.jsonURL);
  }
}
