import { Component, OnInit } from '@angular/core';
import {Flashlight} from "@awesome-cordova-plugins/flashlight/ngx";


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public flashlight: Flashlight) {
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
