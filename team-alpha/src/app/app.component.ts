import { Component, OnInit, OnDestroy, ComponentFactoryResolver, ViewContainerRef, ViewChild, Directive } from '@angular/core';
import { DepotEditorComponent } from './depot-editor/depot-editor.component';
import { GenericPlaceComponent } from './generic-place/generic-place.component';

@Directive({ selector: '[detailContainer]'})
export class DetailContainer {
  constructor(public viewContainerRef: ViewContainerRef) {}
}

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
  @ViewChild(DetailContainer, {static: true}) detailContainer: DetailContainer;

  constructor(private componentFactory: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef) {
    this.depot = { "name": "some depot", "node": { "lat":10, "lon":10 } };
    this.place = { "type": "parking area", "node": { "lat":20, "lon":20 }, "parking places": 20, "watched": true};

    this.detailTypeMap["depot"] = DepotEditorComponent;
    this.detailTypeMap["default"] = GenericPlaceComponent;

    this.addDepot();
  }

  renderComponent(component: any) {
    this.viewContainerRef.clear();
    this.viewContainerRef.createComponent(this.componentFactory.resolveComponentFactory(component));
  }

  addDepot() {
    this.renderComponent(this.detailTypeMap["depot"]);
  }

  addSomethingelse() {
    this.renderComponent(this.detailTypeMap["default"]);
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
