import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupLocationPage } from './pickup-location.page';

describe('PickupLocationPage', () => {
  let component: PickupLocationPage;
  let fixture: ComponentFixture<PickupLocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickupLocationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickupLocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
