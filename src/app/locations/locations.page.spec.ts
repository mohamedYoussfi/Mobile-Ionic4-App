import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsPage } from './locations.page';

describe('LocationsPage', () => {
  let component: LocationsPage;
  let fixture: ComponentFixture<LocationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
