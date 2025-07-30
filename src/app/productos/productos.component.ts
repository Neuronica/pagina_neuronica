import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SuppliersService, Suppliers } from './services/suppliers.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  supplier: Suppliers[] = [];

  constructor(private router: Router, private supplierService: SuppliersService){}

  ngOnInit(): void {
    this.loadSuppliers();
  }

  loadSuppliers(): void {
    this.supplierService
      .getList()
      .subscribe(data => {
        this.supplier  = data;
      });
  }


}
