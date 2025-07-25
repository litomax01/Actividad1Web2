import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  cantidad?: number;
  imagen: string;
  descripcion?: string;
}

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Omit<Producto, 'id'>[]>('assets/productos.json').subscribe({
      next: (data) => {
        // Agregamos un id manual si no viene en JSON
        this.productos = data.map((producto, index) => ({
          id: index + 1,
          cantidad: 1, // opcional, default 1
          ...producto
        }));
        console.log('Productos cargados:', this.productos);
      },
      error: (err) => {
        console.error('Error cargando productos:', err);
      }
    });
  }
}
