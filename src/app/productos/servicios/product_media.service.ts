import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface product_cover_list{
  product_id: string,
  alt: string,
  url: string,
  slug: string,
}

export interface images_by_slug{
  alt: string,
  url: string,
  sort: string,
  slug: string,
}

export interface videos_byId {
  alt: string,
  url: string,
  slug: string,
}


@Injectable({
  providedIn: 'root'
})
export class ProductMediaService {
  private jsonURL = 'http://localhost:8080/api/product-media/';

  constructor(private http: HttpClient){}

  getCovers():Observable<product_cover_list[]>{
    return this.http.get<product_cover_list[]>(`${this.jsonURL}covers/`);
  }
  
  getVideoByid(
    slug: string
  ):Observable<videos_byId[]>{
    return this.http.get<videos_byId[]>(`${this.jsonURL}videos/${slug}`)
  }

  getImagesBySlug(
    slug: string
  ):Observable<images_by_slug[]>{
    return this.http.get<images_by_slug[]>(`${this.jsonURL}images/${slug}`)
  }
}
