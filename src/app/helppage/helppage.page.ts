import { Component, OnInit } from '@angular/core';
import { AppVersion } from "@awesome-cordova-plugins/app-version/ngx";
import {BuildInfo} from "@awesome-cordova-plugins/build-info/ngx";


@Component({
  selector: 'app-helppage',
  templateUrl: './helppage.page.html',
  styleUrls: ['./helppage.page.scss'],
})
export class HelppagePage implements OnInit {

  public developerDetails = "Die Developerin heißt Magdalena Holczik"
  public versionnumber = ""
  public appname = ""
  public buildingInformations = ""



  constructor(public appVersion: AppVersion, public buildinfo: BuildInfo) {

    this.appVersion.getAppName().then(value => {this.appname = "Appname: " + value;
    }).catch(error => {alert(error)})
    this.appVersion.getVersionNumber().then(value => {this.versionnumber ="Versionnumber: " + value;
    }).catch(error => {alert(error)})

    this.buildingInformations = "Debugging enabled: " + this.buildinfo.debug + " Builddate: " + this.buildinfo.buildDate + " Buildtype: " + this.buildinfo.buildType

  }

  ngOnInit() {
  }



}
