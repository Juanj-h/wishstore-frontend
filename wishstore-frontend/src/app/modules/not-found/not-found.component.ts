import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div style="text-align: center; padding: 50px 20px;">
      <h1 style="font-size: 4rem; color: #e74c3c; margin-bottom: 10px;">404</h1>
      <h2>Página no encontrada</h2>
      <p style="color: #666; margin-bottom: 20px;">
        La ruta a la que intentas acceder no existe o ha sido movida.
      </p>
      <a routerLink="/" style="padding: 10px 20px; background-color: #007bff; color: white; text-decoration: none; border-radius: 4px;">
        Volver al Inicio
      </a>
    </div>
  `
})
export class NotFoundComponent {}