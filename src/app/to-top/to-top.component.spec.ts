/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ToTopComponent } from './to-top.component';

describe('ToTopComponent', () => {
  let component: ToTopComponent;
  let fixture: ComponentFixture<ToTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});