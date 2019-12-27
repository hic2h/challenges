import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConsentComponent } from './add-consent.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../../../shared/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckbox, MatCheckboxChange} from '@angular/material';

describe('AddConsentComponent', () => {
  let component: AddConsentComponent;
  let fixture: ComponentFixture<AddConsentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddConsentComponent ],
      imports: [FormsModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MaterialModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddConsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create AddConsentComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should return an invalid form when nothing is filled yet', () => {
    expect(component.addConsentForm.invalid).toBeTruthy();
  });

  it('should name input display error when input field is empty', () => {
    component.addConsentForm.controls.name.markAsTouched();
    fixture.detectChanges();
    const errorsElement: HTMLElement = fixture.nativeElement.querySelector('mat-error');
    expect(errorsElement.textContent).toBe('Name is required');
  });

  it('should name input display error when input field has only one character', () => {
    component.addConsentForm.controls.name.setValue('a');
    component.addConsentForm.controls.name.markAsTouched();
    fixture.detectChanges();
    const errorsElement: HTMLElement = fixture.nativeElement.querySelector('mat-error');
    expect(errorsElement.textContent).toBe('Name must contain at least two characters.');
  });

  it('should email input display error when input field is empty', () => {
    component.addConsentForm.controls.email.markAsTouched();
    fixture.detectChanges();
    const errorsElement: HTMLElement = fixture.nativeElement.querySelector('mat-error');
    expect(errorsElement.textContent).toBe('Email Address is required');
  });

  it('should email input has a valid email address', () => {
    component.addConsentForm.controls.email.setValue('not valid email address');
    component.addConsentForm.controls.email.markAsTouched();
    fixture.detectChanges();
    const errorsElement: HTMLElement = fixture.nativeElement.querySelector('mat-error');
    expect(errorsElement.textContent).toBe('Invalid Email Address.');
  });

  it('should givenConsents array an empty array', () => {
    expect(component.addConsentForm.controls.givenConsents.value).toEqual([]);
  });

  it('should onCheckboxChange update givenConsents array', () => {
    const event = new MatCheckboxChange();
    event.checked = true;
    event.source = {value : 'A'} as MatCheckbox;
    component.onCheckboxChange(event);
    fixture.detectChanges();
    expect(component.addConsentForm.controls.givenConsents.value).toEqual(['A']);
  });
});
