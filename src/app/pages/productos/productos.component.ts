import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GaleriaComponent } from '../../components/galeria/galeria.component';
import { CarruselComponent } from '../../components/carrusel/carrusel.component';
import { ListaProductosComponent } from '../../components/lista-productos/lista-productos.component';


interface Producto {
  id: number;
  nombre: string;
  precio: number;
  descripcion: string;
  imagen: string;
}

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [
    GaleriaComponent,
    CarruselComponent,
    ListaProductosComponent
  ],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Omit<Producto, 'id'>[]>('assets/productos.json').subscribe({
      next: (data) => {
        this.productos = data.map((prod, index) => ({ id: index + 1, ...prod }));
      },
      error: (err) => {
        console.error('Error cargando productos:', err);
      }
    });
  }
}
