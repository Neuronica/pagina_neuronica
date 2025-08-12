import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface lista_videos{
  ID_VIDEO: string,
  ID_PRODUCT: string,
  URL: string,
}


@Injectable({
  providedIn: 'root'
})
export class VideosService {
    private jsonURL = 'assets/Data/videos.json';
  
    constructor(private http: HttpClient){}
  
    getList():Observable<lista_videos[]>{
      return this.http.get<lista_videos[]>(this.jsonURL);
    } 
}
