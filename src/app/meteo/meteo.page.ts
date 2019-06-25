import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MeteoService} from '../services/meteo.service';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.page.html',
  styleUrls: ['./meteo.page.scss'],
})
export class MeteoPage implements OnInit {

  public city:string;
    private dataMeteo;

  constructor(private meteoService:MeteoService) { }

  ngOnInit() {
  }

    onLoadMeteo() {
    this.meteoService.getMeteoData(this.city)
            .subscribe(data=>{
              this.dataMeteo=data;
            },err=>{
              console.log(err);
            });
    }
}
