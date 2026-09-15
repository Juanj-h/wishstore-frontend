import { NgModule } from '@angular/core';
import { WishlistRoutingModule } from './wishlist-routing.module';
import { WishlistPageComponent } from './components/wishlist-page/wishlist-page.component';

@NgModule({
  declarations: [], 
  imports: [
    WishlistRoutingModule,
    WishlistPageComponent 
  ]
})
export class WishlistModule {}