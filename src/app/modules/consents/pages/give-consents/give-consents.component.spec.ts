import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveConsentsComponent } from './give-consents.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "../../../../shared/material.module";
import {AddConsentComponent} from "../../components/add-consent/add-consent.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ConsentsService} from "../../data/services/consents.service";
import {Consent} from "../../data/schema/consent";
import {Router, RouterModule} from "@angular/router";
import {of} from "rxjs";

describe('GiveConsentsComponent', () => {
  let component: GiveConsentsComponent;
  let fixture: ComponentFixture<GiveConsentsComponent>;
  let consentsService: any;
  let router: any;

  beforeEach(async(() => {
    const MockConsentsService =
      jasmine.createSpyObj('ConsentsService', ['addConsent']);
    const MockRouter =
      jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [ GiveConsentsComponent, AddConsentComponent ],
      imports: [
        BrowserAnimationsModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([])
      ],
      providers: [
        {provide: ConsentsService, useValue: MockConsentsService},
        {provide: Router, useValue: MockRouter},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    consentsService = TestBed.get(ConsentsService);
    router = TestBed.get(Router);

    consentsService.addConsent.and.returnValue(of({}));
    router.navigate.and.returnValue(null);

    fixture = TestBed.createComponent(GiveConsentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should onAddConsent call addConsent from consentsService', () => {
    component.onAddConsent(new Consent());
    fixture.detectChanges();
    expect(consentsService.addConsent).toHaveBeenCalledTimes(1);

  });
});
