import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent {
  images = [
    'assets/images/Auriculares Redragon H120.jpg',
    'assets/images/Cámara Web Logitech C270.jpg',
    'assets/images/Disco Duro Externo Seagate 1TB.jpg',
    'assets/images/Impresora Multifuncional Epson EcoTank.jpg',
    'assets/images/laptop-hp.jpg'
  ];
  currentIndex = 0;

  prev() {
    this.currentIndex = this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1;
  }

  next() {
    this.currentIndex = this.currentIndex === this.images.length - 1 ? 0 : this.currentIndex + 1;
  }

  goTo(index: number) {
    this.currentIndex = index;
  }
}
