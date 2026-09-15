import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true, // 👈 Permite importarlo en home.module.ts
  imports: [CommonModule, RouterModule],
  template: `
    <div style="text-align: center; padding: 40px 20px;">
      <h1>¡Bienvenido a WishStore!</h1>
      <p>Explora nuestro catálogo, guarda tus productos favoritos en la lista de deseos y revisa tu historial.</p>
      <div style="margin-top: 20px; display: flex; gap: 15px; justify-content: center;">
        <a routerLink="/catalog" style="padding: 10px 20px; background-color: #007bff; color: white; text-decoration: none; border-radius: 4px;">Ir al Catálogo</a>
        <a routerLink="/wishlist" style="padding: 10px 20px; background-color: #28a745; color: white; text-decoration: none; border-radius: 4px;">Ver Wishlist</a>
      </div>
    </div>
  `
})
export class HomeComponent {}