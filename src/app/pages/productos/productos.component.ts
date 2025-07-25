import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GaleriaProductosComponent } from "../../components/galeria/galeria.component";

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  descripcion: string;
  imagen: string;
}

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  imports: [GaleriaProductosComponent]
})
export class ProductosComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Omit<Producto, 'id'>[]>('assets/productos.json').subscribe({
      next: (data) => {
        // Asignar un id secuencial a cada producto
        this.productos = data.map((prod, index) => ({ id: index + 1, ...prod }));
        console.log('Productos cargados:', this.productos);
      },
      error: (err) => {
        console.error('Error cargando productos:', err);
      }
    });
  }
}
