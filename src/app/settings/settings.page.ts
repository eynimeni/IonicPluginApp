import { Component, OnInit } from '@angular/core';
import {LocalNotifications} from "@awesome-cordova-plugins/local-notifications/ngx";
import {CoordsStorageService} from "../services/coordsStorage.service";
import {FlashlightStorageService} from "../services/flashlightStorage.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  public coordsDisplay = true
  public flashLightDisplay= true

  constructor(private localNotifications: LocalNotifications, protected coordsStorageService: CoordsStorageService, protected flashlightStorageService: FlashlightStorageService)
  {

  }

  async ngOnInit() {
    this.coordsDisplay = await this.coordsStorageService.get()
    if (this.coordsDisplay == null) {
      this.coordsDisplay = true
      console.log(this.coordsDisplay)
    }
    this.flashLightDisplay = await this.flashlightStorageService.get()
    if (this.flashLightDisplay == null) {
      this.flashLightDisplay = true
      console.log(this.flashLightDisplay)
    }

  }

  async updateCoordsDisplay() {
    console.log("Koordinatendisplay " + this.coordsDisplay)
    await this.coordsStorageService.save(this.coordsDisplay)
    console.log (await this.coordsStorageService.get())
    this.sendNotification({title: "Geolocation Display", text: "Changes made"})

  }

  async updateFlashLightDisplay() {
    console.log("Flashlightdisplay " + this.flashLightDisplay)
    await this.flashlightStorageService.save(this.flashLightDisplay)
    console.log (await this.flashlightStorageService.get())
    this.sendNotification({title: "Flashlight Display", text: "Changes made"})

  }

  sendNotification({title, text}: { title: any, text: any }) {
    this.localNotifications.schedule({
      id: 1,
      title: title,
      text: text,
    })
  }

}
