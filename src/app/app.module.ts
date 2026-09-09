import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { CatalogModule } from './modules/catalog/catalog.module';
import { WishlistModule } from './modules/wishlist/wishlist.module';
import { HistoryModule } from './modules/history/history.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    AppRoutingModule,
    SharedModule,
    CatalogModule,
    WishlistModule,
    HistoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}