import { Component } from '@angular/core';
import { Producto } from '../lista-productos/producto';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent {
  productos: Producto[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Producto[]>('assets/products.json').subscribe(producto => {
      this.productos = producto;
    });
  }
}
