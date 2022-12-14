import { Component } from '@angular/core';
import {Storage} from '@ionic/storage'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Settings', url: '/settings', icon: 'settings' },
    { title: 'Help', url: '/helppage', icon: 'help' },
  ];
  constructor(protected storage: Storage) {
    this.storage.create();
  }
}
