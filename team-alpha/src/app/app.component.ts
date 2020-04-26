import { Component, OnInit, OnDestroy, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'team-alpha';
  detailTypeMap = {};
  depot = {};
  place = {};
  @ViewChild("detailContainer", { read: detailContainerRef }) container;

  constructor(private componentFactory: ComponentFactoryResolver) {
    this.depot = { "name": "some depot", "node": { "lat":10, "lon":10 } };
    this.place = { "type": "parking area", "node": { "lat":20, "lon":20 }, "parking places": 20, "watched": true};

    this.detailTypeMap.depot = this.componentFactory.resolveComponentFactory(DepotEditorComponent);
    this.detailTypeMap.default = this.componentFactory.resolveComponentFactory(GenericPlaceComponent);

    this.addDepot();
  }

  renderComponent(cmpnnt: any) {

  }

  addDepot() {
    this.container = this.detailTypeMap["depot"].create();
  }

  addSomethingelse() {
    this.container = this.detailTypeMap["default"].create();
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
