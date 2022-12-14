import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
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
  public location: any

  constructor(public flashlight: Flashlight, private geolocation: Geolocation) {

    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude
      this.longitude = resp.coords.longitude
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    this.location = this.geolocation.watchPosition()
    this.location.subscribe((resp: any) => {
      this.latitude = resp.coords.longitude
      this.longitude = resp.coords.latitude
    }).catch((error: any) =>{
      console.log('Error updating location', error);
      })


  }


  ngOnInit() {

  }


  ionViewDidEnter() {
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
