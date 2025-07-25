import { Component } from '@angular/core';
import { BannerComponent } from "../../components/banner/banner.component";
import { CarruselComponent } from "../../components/carrusel/carrusel.component";
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { ListaProductosComponent } from "../../components/lista-productos/lista-productos.component";
import { HistoriaComponent } from "../../components/historia/historia.component";
import { CardProductComponent } from "../../components/card-product/card-product.component";
import { ProductosComponent } from "../productos/productos.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, CarruselComponent, NavBarComponent, FooterComponent, ListaProductosComponent, HistoriaComponent, CardProductComponent, ProductosComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  mostrarBanner = true;
}
