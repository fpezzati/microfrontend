import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DepotEditorComponent } from './depot-editor/depot-editor.component';
import { GenericPlaceComponent } from './generic-place/generic-place.component';
import { LocationDetailDirective } from './location-detail.directive';

@NgModule({
  declarations: [
    AppComponent,
    DepotEditorComponent,
    GenericPlaceComponent,
    LocationDetailDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
