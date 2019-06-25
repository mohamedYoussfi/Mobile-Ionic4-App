import { Injectable } from '@angular/core';
import {Place} from '../model/place.model';
import {Storage} from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {
    private locations:Array<Place>=[];
    public currentLocation: Place;

  constructor(private storage:Storage) {
    this.locations.push({title:"A"});
      this.locations.push({title:"B"});
      this.locations.push({title:"C"});
  }

  public getLocations(){
    return this.storage.get("locations").then(data=>{
      this.locations=data!=null?data:[];
      return this.locations.slice();
    });
  }
  public addLocation(place:Place){
    this.locations.push(place);
    this.storage.set("locations",this.locations);
  }

    public updateLocations(locations) {
        this.storage.set("locations",locations);
    }


    addPhoto(base64Image: string, timestamp: number) {
        for (let i = 0; i < this.locations.length ; i++) {
            if(this.locations[i].timestamp===timestamp){
              this.locations[i].photos.push(base64Image);
              this.updateLocations(this.locations);
              break;
            }
        }
    }
}
