import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface lista_caracteristicas{
  ID_CHARACTERISTIC: string,
  ID_PRODUCT: string,
  WEIGHT: string,
  DIMENSIONS: string,
  ENCLOSURE: string,
  VOLUME: string,
  ID_TECHNOLOGY: string,
  SPEED: string,
  THICKNESS: string,
}

@Injectable({
  providedIn: 'root'
})
export class CaracteristicasService {
    private jsonURL = 'assets/Data/characteristics.json';
  
    constructor(private http: HttpClient){}
  
    getList():Observable<lista_caracteristicas[]>{
      return this.http.get<lista_caracteristicas[]>(this.jsonURL);
    } 
}
