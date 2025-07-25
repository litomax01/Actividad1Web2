import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardProductComponent, Producto } from '../card-product/card-product.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [CommonModule, CardProductComponent],
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Producto[]>('assets/productos.json').subscribe({
      next: (data) => {
        this.productos = data;
      },
      error: (err) => {
        console.error('Error cargando productos:', err);
      }
    });
  }
}
