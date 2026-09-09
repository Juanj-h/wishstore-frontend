import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './app/shared/components/navbar/navbar';
import { Footer } from './app/shared/components/footer/footer';
import { Loading } from './app/shared/components/loading/loading';
import { ProductCard } from './app/shared/components/product-card/product-card';
import { EmptyState } from './app/shared/components/empty-state/empty-state';
import { ErrorState } from './app/shared/components/error-state/error-state';
import { CatalogPage } from './app/modules/catalog/components/catalog-page/catalog-page';
import { ProductDetail } from './app/modules/catalog/components/product-detail/product-detail';
import { ProductSearch } from './app/modules/catalog/components/product-search/product-search';
import { CategoryFilter } from './app/modules/catalog/components/category-filter/category-filter';
import { CatalogRoutingModule } from './app/modules/catalog/catalog-routing/catalog-routing-module';
import { WishlistPage } from './app/modules/wishlist/components/wishlist-page/wishlist-page';
import { WishlistItem } from './app/modules/wishlist/components/wishlist-item/wishlist-item';
import { WishlistRoutingModule } from './app/modules/wishlist/wishlist-routing/wishlist-routing-module';
import { HistoryPage } from './app/modules/history/components/history-page/history-page';
import { HistoryTable } from './app/modules/history/components/history-table/history-table';
import { HistoryRoutingModule } from './app/modules/history/history-routing/history-routing-module';
import { NotFound } from './app/modules/not-found/not-found/not-found';

@NgModule({
  declarations: [
    App,
    Navbar,
    Footer,
    Loading,
    ProductCard,
    EmptyState,
    ErrorState,
    CatalogPage,
    ProductDetail,
    ProductSearch,
    CategoryFilter,
    WishlistPage,
    WishlistItem,
    HistoryPage,
    HistoryTable,
    NotFound,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CatalogRoutingModule,
    WishlistRoutingModule,
    HistoryRoutingModule,
  ],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
