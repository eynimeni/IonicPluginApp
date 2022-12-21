import { Injectable } from '@angular/core';
import { Storage} from "@ionic/storage";

@Injectable({
  providedIn: 'root'
})
export class FlashlightStorageService {

  private storageKey = 'flashlight'

  constructor(protected storage: Storage) { }

  public save(data: boolean){
    return this.storage.set(this.storageKey, data)
  }

  public get(){
    return this.storage.get(this.storageKey)
  }

}
