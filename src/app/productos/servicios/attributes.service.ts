import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface attributes_list{
  attribute: string,
  value: string,
  unit: string,
  name: string,
  slug: string,
}

@Injectable({
  providedIn: 'root'
})
export class AttibutesService {
    private jsonURL = 'https://pagina-neuronica-backend-490354620288.us-west1.run.app/api/attribute-variant/';
  
    constructor(private http: HttpClient){}
  
    getAttributesBySlug(
      slug: string
    ):Observable<attributes_list[]>{
      return this.http.get<attributes_list[]>(`${this.jsonURL}${slug}`);
    } 
}
