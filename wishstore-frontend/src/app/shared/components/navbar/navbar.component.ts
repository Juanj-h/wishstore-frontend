import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav style="display:flex; gap: 20px; padding: 15px; background: #333; color: white;">
      <strong>WishStore</strong>
      <a routerLink="/catalog" style="color:white; text-decoration:none;">Catálogo</a>
      <a routerLink="/wishlist" style="color:white; text-decoration:none;">Lista de Deseos</a>
      <a routerLink="/history" style="color:white; text-decoration:none;">Historial</a>
    </nav>
  `
})
export class NavbarComponent {}