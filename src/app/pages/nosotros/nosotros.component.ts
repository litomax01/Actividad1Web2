import { Component } from '@angular/core';
import { CarruselComponent } from "../../components/carrusel/carrusel.component";
import { HistoriaComponent } from "../../components/historia/historia.component";
import { NavbarComponent } from "../../components/nav-bar/nav-bar.component";
import { FooterComponent } from "../../components/footer/footer.component";
@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [ HistoriaComponent, NavbarComponent, FooterComponent],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {

}
