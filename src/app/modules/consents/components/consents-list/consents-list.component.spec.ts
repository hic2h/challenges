import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsentsListComponent } from './consents-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "../../../../shared/material.module";
import {SimpleChange, SimpleChanges} from "@angular/core";

describe('ConsentsListComponent', () => {
  let component: ConsentsListComponent;
  let fixture: ComponentFixture<ConsentsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsentsListComponent ],
      imports: [FormsModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MaterialModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsentsListComponent);
    component = fixture.componentInstance;
    const consentsMock = [{
      "id": 1,
      "name": "user 1",
      "email": "emai1l@didomi.io",
      "givenConsents": [
        "Receive newsletter"
      ]
    },
      {
        "id": 2,
        "name": "user 2",
        "email": "emai1l@didomi.io",
        "givenConsents": [
          "Be shown targeted Ads"
        ]
      }];
    component.consents = consentsMock;
    const simpeChanges : SimpleChanges = {
      consents: new SimpleChange(null, consentsMock, true)
    }
    component.ngOnChanges(simpeChanges);
    fixture.detectChanges();
  });

  it('should a table be created with 2 rows', () => {
    const tableElement: HTMLElement = fixture.nativeElement.querySelector('table');
    expect(tableElement).toBeDefined();
    const tableRows = fixture.nativeElement.querySelectorAll('.mat-row');
    expect(tableRows.length).toBe(2);
  });
});
