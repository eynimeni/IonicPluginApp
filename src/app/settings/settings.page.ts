import { Component, OnInit } from '@angular/core';
import {LocalNotifications} from "@awesome-cordova-plugins/local-notifications/ngx";
import {StorageService} from "../services/storage.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  coordsDisplay = true
  flashLightDisplay = true

  constructor(private localNotifications: LocalNotifications, protected storageService: StorageService)
  {

  }

  ngOnInit() {
  }

  async updateCoordsDisplay() {
    console.log("Koordinatendisplay " + this.coordsDisplay)
    await this.saveInStorage()
  }

  async updateFlashLightDisplay() {
    console.log("Flashlightdisplay " + this.flashLightDisplay)
    await this.saveInStorage()
  }

  sendNotification() {
    this.localNotifications.setDefaults({
      led: {color: '#FF00FF', on: 500, off: 500}
    })
    this.localNotifications.schedule({
      id: 1,
      title: 'Notification Title',
      text: 'Notification Text',
    })
  }

  async saveInStorage() {
    const booleansArray = [this.flashLightDisplay, this.coordsDisplay]
    await this.storageService.save(booleansArray);
    this.sendNotification()
  }


}
