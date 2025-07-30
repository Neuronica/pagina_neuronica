import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Suppliers {
  ID_SUPPLIER: string,
  SUPPLIER: string
}

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {
  private API_URL = 'http://192.168.1.24:3000/api/activities';

  constructor(private http: HttpClient) {}

  /**
   * Obtiene la lista de proveedores, opcionalmente filtrada por parámetros.
   * @param params Un objeto con los parámetros clave-valor para la consulta.
   * Ejemplo: { search: 'texto', category: 'cat1' }
   */
  getList(params?: { [key: string]: any }): Observable<Suppliers[]> {
    let httpParams = new HttpParams();

    // Si se proporcionan parámetros, los agregamos a HttpParams
    if (params) {
      for (const key in params) {
        if (params.hasOwnProperty(key) && params[key] !== null && params[key] !== undefined) {
          httpParams = httpParams.set(key, params[key].toString());
        }
      }
    }

    // Realiza la petición GET, pasando los HttpParams en el objeto de opciones
    return this.http.get<Suppliers[]>(`${this.API_URL}/list`, { params: httpParams });
  }
}