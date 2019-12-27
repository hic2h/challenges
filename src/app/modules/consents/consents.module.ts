import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GiveConsentsComponent} from "./pages/give-consents/give-consents.component";
import {ConsentsComponent} from "./pages/consents/consents.component";
import {ConsentsRoutingModule} from "./consents-routing.module";
import {MaterialModule} from "../../shared/material.module";
import { ConsentsListComponent } from './components/consents-list/consents-list.component';

@NgModule({
  declarations: [
    GiveConsentsComponent,
    ConsentsComponent,
    ConsentsListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ConsentsRoutingModule
  ]
})
export class ConsentsModule { }
