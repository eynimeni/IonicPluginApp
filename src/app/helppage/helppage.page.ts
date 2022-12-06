import { Component, OnInit } from '@angular/core';
import { AppVersion } from "@awesome-cordova-plugins/app-version/ngx";

@Component({
  selector: 'app-helppage',
  templateUrl: './helppage.page.html',
  styleUrls: ['./helppage.page.scss'],
})
export class HelppagePage implements OnInit {

  constructor(public appVersion: AppVersion) {

  }

  ngOnInit() {
  }

  public appName = this.appVersion.getVersionNumber()
  //hier kommt ein Object Promise - muss man die AppVersion erst irgendwo rein schreiben,
  // damit man sie auslesen kann?
  public developerDetails = "Die Developerin heißt Magdalena Holczik"

}
