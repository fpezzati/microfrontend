import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appLocationDetail]'
})
export class LocationDetailDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
