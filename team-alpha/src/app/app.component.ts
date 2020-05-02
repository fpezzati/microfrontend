import { Component, OnInit, OnDestroy, ComponentFactoryResolver, ViewContainerRef, ViewChild, Directive, TemplateRef } from '@angular/core';
import { DepotEditorComponent } from './depot-editor/depot-editor.component';
import { GenericPlaceComponent } from './generic-place/generic-place.component';
import { LocationDetailDirective } from './location-detail.directive';

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
  vchild: ViewContainerRef;
  @ViewChild(LocationDetailDirective, {static: true}) detailContainer: LocationDetailDirective;

  constructor(private componentFactory: ComponentFactoryResolver) {
    this.depot = { "name": "some depot", "node": { "lat":10, "lon":10 } };
    this.place = { "type": "parking area", "node": { "lat":20, "lon":20 }, "parking places": 20, "watched": true};
  }

  renderComponent(component: any) {
    this.detailContainer.viewContainerRef.clear();
    var cmpnt = this.detailContainer.viewContainerRef.createComponent(this.componentFactory.resolveComponentFactory(component));
  }

  addDepot() {
    this.detailContainer.viewContainerRef.clear();
    var cmpnt = this.detailContainer.viewContainerRef.createComponent(this.componentFactory.resolveComponentFactory(this.detailTypeMap["depot"]));
    (<DepotEditorComponent>cmpnt.instance).depot = this.depot;
  //  this.renderComponent(this.detailTypeMap["depot"]);
  }

  addSomethingelse() {
    this.detailContainer.viewContainerRef.clear();
    var cmpnt = this.detailContainer.viewContainerRef.createComponent(this.componentFactory.resolveComponentFactory(this.detailTypeMap["default"]));
    (<GenericPlaceComponent>cmpnt.instance).place = this.place;
  //  this.renderComponent(this.detailTypeMap["default"]);
  }

  ngOnInit(): void {
    this.detailTypeMap["depot"] = DepotEditorComponent;
    this.detailTypeMap["default"] = GenericPlaceComponent;
  }

  ngOnDestroy(): void {}
}
