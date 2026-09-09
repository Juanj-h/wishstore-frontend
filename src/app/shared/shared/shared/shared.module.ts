import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { EmptyStateComponent } from './components/empty-state/empty-state.component';
import { ErrorStateComponent } from './components/error-state/error-state.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    LoadingComponent,
    ProductCardComponent,
    EmptyStateComponent,
    ErrorStateComponent
  ],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,

    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],

  exports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,

    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatProgressSpinnerModule,

    NavbarComponent,
    FooterComponent,
    LoadingComponent,
    ProductCardComponent,
    EmptyStateComponent,
    ErrorStateComponent
  ]
})
export class SharedModule {}