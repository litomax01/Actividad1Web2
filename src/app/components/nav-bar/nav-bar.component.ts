import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  standalone: true,
  imports: [CommonModule,RouterModule] 
})
export class NavbarComponent implements OnInit {
  usuarioLogueado = false;
  menuAbierto = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.usuarioLogueado = !!localStorage.getItem('user');
    window.addEventListener('storage', () => {
      this.usuarioLogueado = !!localStorage.getItem('user');
    });
  }

  logout() {
    localStorage.removeItem('user');
    this.usuarioLogueado = false;
    this.router.navigate(['/login']);
  }

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
      if (this.menuAbierto) {
        mobileMenu.classList.remove('hidden');
      } else {
        mobileMenu.classList.add('hidden');
      }
    }
  }
}
