// product-list-state.service.ts
import { Injectable } from '@angular/core';

export interface Filtros {
  orden?: string;
  proveedor?: string;
  tipo?: string;
  page?: number;
}

const KEY_SCROLL = 'productListScrollTop';
const KEY_PAGE     = 'productListPage';
const KEY_PAGESIZE = 'productListPageSize';
const KEY_F_ORDEN  = 'productList_filter_ordenId'; 
const KEY_F_TIPO   = 'productList_filter_tipoId';
const KEY_F_BRAND  = 'productList_filter_brandId';
const KEY_F_Q      = 'productList_filter_query';

@Injectable({ providedIn: 'root' })
export class ProductListStateService {
  scrollTop = 0;        // posición del contenedor
  private page = 1;
  private pageSize = 12;
  private ordenId: string | undefined;
  private tipoId: string | undefined;
  private brandId: string | undefined;
  private query: string | undefined;

  // (Opcional) persistencia del scroll por sesión
  setScroll(top: number) {
    this.scrollTop = top;
    try { sessionStorage.setItem(KEY_SCROLL, String(top)); } catch {}
  }
  getScroll(): number {
    if (this.scrollTop) return this.scrollTop;
    try {
      const raw = sessionStorage.getItem(KEY_SCROLL);
      return raw ? Number(raw) : 0;
    } catch { return 0; }
  }

  setPage(p: number) {
    this.page = p;
    try { sessionStorage.setItem(KEY_PAGE, String(p)); } catch {}
  }
  getPage(): number {
    if (this.page) return this.page;
    try { return Number(sessionStorage.getItem(KEY_PAGE) ?? 1); } catch { return 1; }
  }

  setPageSize(n: number) {
    this.pageSize = n;
    try { sessionStorage.setItem(KEY_PAGESIZE, String(n)); } catch {}
  }

  getPageSize(): number {
    if (this.pageSize) return this.pageSize;
    try { return Number(sessionStorage.getItem(KEY_PAGESIZE) ?? 12); } catch { return 12; }
  }

  setOrdenId(id?: string) {
    this.ordenId = id;
    try { id === undefined ? sessionStorage.removeItem(KEY_F_ORDEN) : sessionStorage.setItem(KEY_F_ORDEN, id); } catch {}
  }

  getOrdenId(): string | undefined {
    if (this.ordenId !== undefined) return this.ordenId;
    try { return sessionStorage.getItem(KEY_F_ORDEN) ?? undefined; } catch { return undefined; }
  }

  setTipoId(id?: string) {
    this.tipoId = id;
    try { id === undefined ? sessionStorage.removeItem(KEY_F_TIPO) : sessionStorage.setItem(KEY_F_TIPO, id); } catch {}
  }

  getTipoId(): string | undefined {
    if (this.tipoId !== undefined) return this.tipoId;
    try { return sessionStorage.getItem(KEY_F_TIPO) ?? undefined; } catch { return undefined; }
  }

  setBrandId(id?: string) {
    this.brandId = id;
    try { id === undefined ? sessionStorage.removeItem(KEY_F_BRAND) : sessionStorage.setItem(KEY_F_BRAND, id); } catch {}
  }

  getBrandId(): string | undefined {
    if (this.brandId !== undefined) return this.brandId;
    try { return sessionStorage.getItem(KEY_F_BRAND) ?? undefined; } catch { return undefined; }
  }

  setQuery(q?: string) {
    this.query = q;
    try { q === undefined || q === '' ? sessionStorage.removeItem(KEY_F_Q) : sessionStorage.setItem(KEY_F_Q, q); } catch {}
  }
  
  getQuery(): string | undefined {
    if (this.query !== undefined) return this.query;
    try { return sessionStorage.getItem(KEY_F_Q) ?? undefined; } catch { return undefined; }
  }
}
