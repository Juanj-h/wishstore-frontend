import { NgModule, ApplicationRef, DoBootstrap } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from '../app/app-routing-module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppComponent
  ],
  providers: [
    provideHttpClient(withFetch())
  ]
})
export class AppModule implements DoBootstrap {
  ngDoBootstrap(appRef: ApplicationRef) {
    appRef.bootstrap(AppComponent);
  }
}