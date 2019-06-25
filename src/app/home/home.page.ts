import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public contact={
    name:"ENSET",
      email:"med@youssfi.net",
      tel:"05234354",
      logo:"assets/images/logo.png",
      location:"assets/images/loc.png"
  }

  constructor() {}

}
