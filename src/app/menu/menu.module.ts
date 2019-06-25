import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
      children:[
          { path: 'home', loadChildren: '../home/home.module#HomePageModule' },
          { path: 'meteo', loadChildren: '../meteo/meteo.module#MeteoPageModule' },
          { path: 'gallery', loadChildren: '../gallery/gallery.module#GalleryPageModule' },
          { path: 'locations', loadChildren: '../locations/locations.module#LocationsPageModule' },
          { path: 'new-location', loadChildren: '../new-location/new-location.module#NewLocationPageModule' },
          { path: 'location-details', loadChildren: '../location-details/location-details.module#LocationDetailsPageModule' }
      ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
