import { Component, Input } from '@angular/core';
import { Producto } from '../lista-productos/producto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent {
  @Input() productos: Producto[] = [];

  trackById(index: number, producto: Producto): number {
    return producto.id;
  }
}
