import { Component, OnInit } from '@angular/core';
import {LocalNotifications} from "@awesome-cordova-plugins/local-notifications/ngx";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  coordsDisplay = true
  flashLightDisplay = false

  constructor(private localNotifications: LocalNotifications)
  {

  }

  ngOnInit() {
  }

  updateCoordsDisplay() {
    //zum testen hier ein storage service get
    this.sendNotification()
    console.log("coordsDisplay")
  }

  updateFlashLightDisplay() {
    this.sendNotification()
    console.log("flashlightDisplay")

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
}
