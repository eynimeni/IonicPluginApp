import { Injectable } from '@angular/core';
import { Storage} from "@ionic/storage";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private storageKey = 'localStorage'

  constructor(protected storage: Storage) { }

  public save(data: any){
    return this.storage.set(this.storageKey, data)
  }

  public get() {
    return this.storage.get(this.storageKey)
  }

}
