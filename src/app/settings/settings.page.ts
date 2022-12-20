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

  constructor(
    private localNotifications: LocalNotifications
  ) {


        this.localNotifications.schedule({
        id: 1,
        text: 'Notification',
    }
    )



  }

  ngOnInit() {
  }

  updateCoordsDisplay() {
    //zum testen hier ein storage service get
    console.log("coordsDisplay")
  }

  updateFlashLightDisplay() {
    console.log("flashlightDisplay")

  }
}
