import { Component, OnInit } from '@angular/core';
import { AppVersion } from "@awesome-cordova-plugins/app-version/ngx";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private appversion: AppVersion) {
  }

  ngOnInit() {
  }

  getAppVersion() {
    return this.appversion;
  }

}
