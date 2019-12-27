import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatCheckboxChange} from '@angular/material';
import {Consent} from '../../data/schema/consent';

/**
 * This is a presentation (dump) component responsible for displaying
 * the add consent form and manages the validations
 */
@Component({
  selector: 'app-add-consent',
  templateUrl: './add-consent.component.html',
  styleUrls: ['./add-consent.component.scss']
})
export class AddConsentComponent implements OnInit {

  @Output() addConsent: EventEmitter<Consent> = new EventEmitter();
  addConsentForm: FormGroup;
  givenConsentsData = [
    'Receive newsletter',
    'Be shown targeted Ads',
    'Contribute to anonymous visit statistics'
  ];
  submitting = false;
  constructor(public fb: FormBuilder) { }

  /**
   * Initialize the form group when the component is loaded
   */
  ngOnInit() {
    this.addConsentForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      givenConsents: new FormArray([], [Validators.required])
    });
  }

  /**
   * Every time a checkbox is checked or unchecked, either add or delete it from the array
   */
  onCheckboxChange(e: MatCheckboxChange) {
    const givenConsents: FormArray = this.addConsentForm.get('givenConsents') as FormArray;

    if (e.checked) {
      givenConsents.push(new FormControl(e.source.value));
    } else {
      let i = 0;
      givenConsents.controls.forEach((item: FormControl) => {
        if (item.value === e.source.value) {
          givenConsents.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  /**
   * When clicking submit, set submitting to true to disable the button
   * and notify the parent component by emitting the addConsent event
   */
  submitForm() {
    this.submitting = true;
    this.addConsent.emit(this.addConsentForm.value as Consent);
  }

}
