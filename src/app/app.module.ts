import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppVersion } from "@awesome-cordova-plugins/app-version/ngx";
import { BuildInfo } from "@awesome-cordova-plugins/build-info/ngx";
import { Flashlight} from "@awesome-cordova-plugins/flashlight/ngx";
import {Geolocation} from "@awesome-cordova-plugins/geolocation/ngx";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    { provide:
    RouteReuseStrategy,
    useClass: IonicRouteStrategy },
    AppVersion,
    BuildInfo,
    Flashlight,
    Geolocation

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
