import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Flashlight} from "@awesome-cordova-plugins/flashlight/ngx";
import {Geolocation} from "@awesome-cordova-plugins/geolocation/ngx";

import {Observable, timeout} from "rxjs";
//import {Map, tileLayer} from 'leaflet';
//import * as Leaflet from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public latitude = 0
  public longitude = 0
  //public watching: Observable<Geoposition | PositionError>
  public latit2 = 0
  public longi2 = 0
  public location: any

  /*
  @ViewChild('map') mapRef: ElementRef<HTMLElement> | undefined;
  map: Map;
  center: any = {
    lat: 48.3,
    long: 17
  };
  location: any = {
    lat: '',
    long: '',
  }

   */

  constructor(public flashlight: Flashlight, private geolocation: Geolocation,
              // public map : Map,
  ) {

    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude
      this.longitude = resp.coords.longitude
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    this.location = this.geolocation.watchPosition()
    this.location.subscribe((resp: any) => {
      this.longi2 = resp.coords.longitude
    })




    //leaflet integrated in index.html und homepage.html aber wie kann ich es ansprechen? wo muss ich wie importieren?
    //und alles was die bewegung watcht hab ich mal wieder auskommentiert, damit es lauffähig ist

  }


  ngOnInit() {

  }


  ionViewDidEnter() {
  }


    watchPosition() {

  }



  /*
    private createLeafletMap() {
      this.map = new Map("map").setView(this.center, 13);
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© Angular LeafLet',
      }).addTo(this.map);
    };
   */


  switchOnTorch() {
    console.log("flashlight on")
    this.flashlight.switchOn()
  }


  switchOffTorch() {
    console.log("flashlight on")
    this.flashlight.switchOff()
  }
}
