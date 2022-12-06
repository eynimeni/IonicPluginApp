import { Component, OnInit } from '@angular/core';
import { AppVersion } from "@awesome-cordova-plugins/app-version/ngx";

@Component({
  selector: 'app-helppage',
  templateUrl: './helppage.page.html',
  styleUrls: ['./helppage.page.scss'],
})
export class HelppagePage implements OnInit {


  constructor(private appVersion: AppVersion) {
    let appName = this.appVersion.getAppName()
    console.log(appName)

  }

  ngOnInit() {
  }

}
