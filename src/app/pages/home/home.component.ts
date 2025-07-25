import { Component } from '@angular/core';
import { BannerComponent } from "../../components/banner/banner.component";
import { CarruselComponent } from "../../components/carrusel/carrusel.component";
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, CarruselComponent, NavBarComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  mostrarBanner = true;
}
