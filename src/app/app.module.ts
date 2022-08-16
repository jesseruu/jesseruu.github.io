import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PagesComponent } from './components/pages/pages.component';
import { PagesTwoComponent } from './components/pages-two/pages-two.component';
import { PagesThreeComponent } from './components/pages-three/pages-three.component';

@NgModule({
  declarations: [AppComponent, PagesComponent, PagesTwoComponent, PagesThreeComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ServiceWorkerModule.register('ngsw-worker.js', {
    enabled: environment.production,
    registrationStrategy: 'registerImmediately',
  })],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
