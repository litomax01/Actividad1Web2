import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  registerForm: FormGroup;
  mensaje = '';
  error = '';

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onRegister() {
    if (this.registerForm.valid) {
      const { nombre, email, password } = this.registerForm.value;
      this.http.get<any[]>(`http://localhost:3000/usuarios?email=${email}`)
        .subscribe(users => {
          if (users.length > 0) {
            this.error = 'El email ya está registrado';
            this.mensaje = '';
          } else {
            this.http.post('http://localhost:3000/usuarios', {
              nombre,
              email,
              password
            }).subscribe({
              next: () => {
                this.mensaje = '¡Usuario registrado con éxito!';
                this.error = '';
                this.registerForm.reset();
                setTimeout(() => this.router.navigate(['/login']), 1500); 
              },
              error: () => {
                this.error = 'Ocurrió un error al registrar el usuario';
                this.mensaje = '';
              }
            });
          }
        });
    }
  }
}
