import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  coordsDisplay = true
  flashLightDisplay = true

  constructor() { }

  ngOnInit() {
  }

  updateCoordsDisplay() {
    console.log("coordsDisplay")
  }

  updateFlashLightDisplay() {
    console.log("flashlightDisplay")

  }
}
