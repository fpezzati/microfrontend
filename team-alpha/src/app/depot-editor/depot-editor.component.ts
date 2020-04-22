import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-depot-editor',
  templateUrl: './depot-editor.component.html',
  styleUrls: ['./depot-editor.component.css']
})
export class DepotEditorComponent implements OnInit {

  @Input() depot: any;

  constructor() { }

  ngOnInit(): void {
  }
}
