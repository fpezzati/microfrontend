import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'team-alpha';
  depot = {};
  place = {};

  constructor() {
    this.depot = { "name": "some depot", "node": { "lat":10, "lon":10 } };
    this.place = { "type": "parking area", "node": { "lat":20, "lon":20 }, "parking places": 20, "watched": true};
  }
}
