import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GiveConsentsComponent} from './pages/give-consents/give-consents.component';
import {ConsentsComponent} from './pages/consents/consents.component';
import {ConsentsRoutingModule} from './consents-routing.module';
import {MaterialModule} from '../../shared/material.module';
import { ConsentsListComponent } from './components/consents-list/consents-list.component';
import { AddConsentComponent } from './components/add-consent/add-consent.component';
import {ReactiveFormsModule} from '@angular/forms';

/**
 * This is a feature module responsible for managing consents
 */
@NgModule({
  declarations: [
    GiveConsentsComponent,
    ConsentsComponent,
    ConsentsListComponent,
    AddConsentComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    ConsentsRoutingModule
  ]
})
export class ConsentsModule { }
