import { Component, OnInit } from '@angular/core';
import { AppVersion } from "@awesome-cordova-plugins/app-version/ngx";
import {BuildInfo} from "@awesome-cordova-plugins/build-info/ngx";


@Component({
  selector: 'app-helppage',
  templateUrl: './helppage.page.html',
  styleUrls: ['./helppage.page.scss'],
})
export class HelppagePage implements OnInit {

  public developerDetails = "Die Developerin heißt Magdalena Holczik."
  public appname = "Auf ihrem mobilen Device werden angezeigt:"
  public versionnumber = "Appname und Versionsnummer,"
  public buildingInformations = "sowie Informationen zu Debugging und Building."



  constructor(public appVersion: AppVersion, public buildinfo: BuildInfo) {

    this.appVersion.getAppName().then(value => {this.appname = "Appname: " + value;
    }).catch(error => {alert(error)})
    this.appVersion.getVersionNumber().then(value => {this.versionnumber ="Versionnumber: " + value;
    }).catch(error => {alert(error)})

    if(this.buildinfo.debug != null) {
      this.buildingInformations = "Debugging enabled: " + this.buildinfo.debug + " Builddate: " + this.buildinfo.buildDate + " Buildtype: " + this.buildinfo.buildType

    }

  }

  ngOnInit() {
  }



}
