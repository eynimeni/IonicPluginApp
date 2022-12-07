import { Component, OnInit } from '@angular/core';
import {Flashlight} from "@awesome-cordova-plugins/flashlight/ngx";
import {Geolocation} from "@awesome-cordova-plugins/geolocation/ngx";


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public latitude = 0
  public longitude = 0

  constructor(public flashlight: Flashlight, public geolocation: Geolocation) {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude
      this.longitude = resp.coords.longitude
    }).catch((error) => {
      console.log('Error getting location', error);
    });

  }

  ngOnInit() {
  }

  switchOnTorch() {
    console.log("flashlight on")
    this.flashlight.switchOn()
  }


  switchOffTorch() {
    console.log("flashlight on")
    this.flashlight.switchOff()
  }
}
