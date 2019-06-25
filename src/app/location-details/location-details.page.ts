import { Component, OnInit } from '@angular/core';
import {LocationsService} from '../services/locations.service';
import {Place} from '../model/place.model';
import {CameraOptions,Camera} from '@ionic-native/camera/ngx';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.page.html',
  styleUrls: ['./location-details.page.scss'],
})
export class LocationDetailsPage implements OnInit {
    private currentPlace: Place;
  constructor(private camera:Camera, private alertCtrl:AlertController,
              private locService:LocationsService) { }

  ngOnInit() {
    this.currentPlace=this.locService.currentLocation;
  }

    public async onTakePicture() {
        const options1: CameraOptions = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType:this.camera.PictureSourceType.CAMERA,
            allowEdit:true
        };
        const options2: CameraOptions = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType:this.camera.PictureSourceType.PHOTOLIBRARY,
            allowEdit:true
        };

        let alert=await this.alertCtrl.create({
            header:'Confirmation',
            message:'Source?',
            buttons:[
                {
                  text:'Camera',
                    handler:()=>{
                      this.getPicture(options1);
                    }
                },
                {
                  text:'Library',
                    handler:()=>{
                        this.getPicture(options2);
                    }
                }
            ]
        });
        await alert.present();




    }

    private getPicture(params: CameraOptions) {
        this.camera.getPicture(params)
            .then(data=>{
                let base64Image = 'data:image/jpeg;base64,' + data;
                //this.currentPlace.photos.push(base64Image);
                this.locService.addPhoto(base64Image,this.currentPlace.timestamp);
            });
    }
}
