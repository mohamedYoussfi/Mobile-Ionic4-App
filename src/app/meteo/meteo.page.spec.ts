import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoPage } from './meteo.page';

describe('MeteoPage', () => {
  let component: MeteoPage;
  let fixture: ComponentFixture<MeteoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeteoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeteoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
