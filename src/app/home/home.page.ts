import { Component, OnInit } from '@angular/core';
import {Flashlight} from "@awesome-cordova-plugins/flashlight/ngx";
import {Geolocation, Geoposition, PositionError} from "@awesome-cordova-plugins/geolocation/ngx";
import {Observable} from "rxjs";


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public latitude = 0
  public longitude = 0
  //public watching: Observable<Geoposition | PositionError>
  public latit2 = 0
  public longi2 = 0

  constructor(public flashlight: Flashlight, public geolocation: Geolocation) {


   // let watch = this.geolocation.watchPosition();
    /*watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      this.latit2 = data.coords.latitude
      this.longi2 = data.coords.longitude
    })

    const subscription = this.geolocation.watchPosition()
        .filter((p) => p.coords !== undefined) //Filter Out Errors
      .subscribe(position => {
        console.log(position.coords.longitude + ' ' + position.coords.latitude);
      });

*/

    /*
        function onSuccess(position : any) {
      console.log(position)
      let latit2 = position.coords.latitude
      let longi2 = position.coords.longitude
      console.log(latit2 + longi2)

    }
    function onError(error : any) {
      alert('code: '    + error.code    + '\n' +
        'message: ' + error.message + '\n');
    }

    let watchId = this.geolocation.watchPosition(onSuccess, onError)
    this.watching = watchId
    console.log(watchId)
   //this.latit2 = watchId.
   //this.longi2 = watchId.coords.longitude
     */


    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude
      this.longitude = resp.coords.longitude
    }).catch((error) => {
      console.log('Error getting location', error);
    });

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
