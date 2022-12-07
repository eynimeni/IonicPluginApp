import { Component, OnInit } from '@angular/core';
import { AppVersion } from "@awesome-cordova-plugins/app-version/ngx";

@Component({
  selector: 'app-helppage',
  templateUrl: './helppage.page.html',
  styleUrls: ['./helppage.page.scss'],
})
export class HelppagePage implements OnInit {

  public versionnumber = ""
  public appname = ""

  constructor(public appVersion: AppVersion) {

    this.appVersion.getAppName().then(value => {this.appname = value;
    }).catch(error => {alert(error)})
    this.appVersion.getVersionNumber().then(value => {this.versionnumber = value;
    }).catch(error => {alert(error)})


  }

  ngOnInit() {
  }




  //hier kommt ein Object Promise - muss man die AppVersion erst irgendwo rein schreiben,
  // damit man sie auslesen kann?
  public developerDetails = "Die Developerin heißt Magdalena Holczik"

}
