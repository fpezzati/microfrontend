import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericPlaceComponent } from './generic-place.component';

describe('GenericPlaceComponent', () => {
  let component: GenericPlaceComponent;
  let fixture: ComponentFixture<GenericPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
