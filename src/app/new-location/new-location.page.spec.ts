import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLocationPage } from './new-location.page';

describe('NewLocationPage', () => {
  let component: NewLocationPage;
  let fixture: ComponentFixture<NewLocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLocationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
