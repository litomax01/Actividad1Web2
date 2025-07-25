import { Component, OnInit } from '@angular/core';
import { Producto } from './producto';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  products: Producto[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Producto[]>('assets/productos.json').subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (err) => {
        console.error('Error cargando productos:', err);
      }
    });
  }

  trackById(index: number, producto: Producto): number {
    return producto.id;
  }
}
