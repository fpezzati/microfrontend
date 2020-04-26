import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-generic-place',
  templateUrl: './generic-place.component.html',
  styleUrls: ['./generic-place.component.css']
})
export class GenericPlaceComponent implements OnInit {

  @Input() place: any;

  constructor() {}

  ngOnInit(): void {}

  stripAttributes(place: any) {
    var attributes = [];
    Object.keys(place).forEach(function(e) {
      attributes.push({"key": e, "value": place[e]});
    });
    return attributes;
  }

  attributeIsNotAnObject(attribute: any) {
    console.log(JSON.stringify(attribute));
    return !(typeof attribute === 'object' && attribute !== null);
  }
}
