import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('assets/productos.json').subscribe({
      next: (data) => {
        this.productos = data;
        console.log('Productos cargados:', this.productos);  // para debug
      },
      error: (err) => {
        console.error('Error cargando productos:', err);
      }
    });
  }
}
