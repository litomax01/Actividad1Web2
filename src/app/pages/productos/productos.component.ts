import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GaleriaComponent } from "../../components/galeria/galeria.component";
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";

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
  imports: [GaleriaComponent, NavBarComponent],  // Importa solo componentes existentes
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
        console.log('Productos cargados:', this.productos);
      },
      error: (err) => {
        console.error('Error cargando productos:', err);
      }
    });
  }
}
