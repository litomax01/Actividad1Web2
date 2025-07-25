import { Component } from '@angular/core';
import { BannerComponent } from "../../components/banner/banner.component";
import { CarruselComponent } from "../../components/carrusel/carrusel.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, CarruselComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  mostrarBanner = true;
}
