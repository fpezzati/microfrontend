import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotEditorComponent } from './depot-editor.component';

describe('DepotEditorComponent', () => {
  let component: DepotEditorComponent;
  let fixture: ComponentFixture<DepotEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepotEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepotEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
