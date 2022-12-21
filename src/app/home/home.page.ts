import {Component, OnInit} from '@angular/core';
import {Flashlight} from "@awesome-cordova-plugins/flashlight/ngx";
import {Geolocation} from "@awesome-cordova-plugins/geolocation/ngx";
import {CoordsStorageService} from "../services/coordsStorage.service";
import {FlashlightStorageService} from "../services/flashlightStorage.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public latitude = 0
  public longitude = 0
  public location: any
  protected coordsDisplay = true
  protected flashlightDisplay = true

  constructor(public flashlight: Flashlight, private geolocation: Geolocation, protected coordsStorageService: CoordsStorageService, protected flashLightStorageService: FlashlightStorageService) {


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
    })
  }

  async ngOnInit() {
    await this.getBooleansFromStorageService()

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

  async getBooleansFromStorageService() {
    let coords = await this.coordsStorageService.get()
    let flashLight = await this.flashLightStorageService.get()

    if (coords != null) {
      this.coordsDisplay = coords
      console.log(this.coordsDisplay)
    }
    if (flashLight != null) {
      this.flashlightDisplay = flashLight
      console.log(this.flashlightDisplay)
    }
  }
}
