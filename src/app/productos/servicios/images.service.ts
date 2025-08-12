import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface image_list{
  ID_IMAGE: string,
  ID_PRODUCT: string,
  URL: string,
}


@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  private jsonURL = 'assets/Data/images.json';

  constructor(private http: HttpClient){}

  getList():Observable<image_list[]>{
    return this.http.get<image_list[]>(this.jsonURL);
  } 
}
