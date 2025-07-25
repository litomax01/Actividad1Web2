import { Component, Input } from '@angular/core';
import { Producto } from '../lista-productos/producto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent {
  @Input() producto!: Producto;
}
