import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppVersion } from "@awesome-cordova-plugins/app-version/ngx";
import { BuildInfo } from "@awesome-cordova-plugins/build-info/ngx";

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
    BuildInfo

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
