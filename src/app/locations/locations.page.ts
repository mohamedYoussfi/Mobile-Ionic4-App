import { Component, OnInit } from '@angular/core';
import {LocationsService} from '../services/locations.service';
import {Place} from '../model/place.model';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.page.html',
  styleUrls: ['./locations.page.scss'],
})
export class LocationsPage implements OnInit {
  public locations:Array<Place>;
  constructor(private locationService:LocationsService, private router:Router,
              private alertCtrlr:AlertController) { }

  ngOnInit() {

  }
  ionViewWillEnter(){
      this.onGetLocations();
  }

    onNewLocation() {
        this.router.navigateByUrl("/menu/new-location");
    }

    async onRemove(p: Place) {
        let alert = await this.alertCtrlr.create({
            header: 'Confirmation',
            message: 'Etes vous sûre?',
            buttons: [
                {
                    text: 'OUI',
                    handler: () => {
                        this.removeLocation(p);
                    }
                },
                {
                    text: 'NON',
                    handler: () => {

                    }
                }
            ]
        });
        await alert.present();
    }

    private onGetLocations() {
        this.locationService.getLocations().then(data=>{
            this.locations=data;
        });
    }

    private removeLocation(p: Place) {
        let index=this.locations.indexOf(p);
        this.locations.splice(index,1);
        this.locationService.updateLocations(this.locations);
    }

    onDetailLocation(p: Place) {
       this.locationService.currentLocation=p;
       this.router.navigateByUrl("/menu/location-details");
    }
}
