import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GiveConsentsComponent} from "./pages/give-consents/give-consents.component";
import {ConsentsComponent} from "./pages/consents/consents.component";
import {ConsentsRoutingModule} from "./consents-routing.module";
import {MaterialModule} from "../../shared/material.module";

@NgModule({
  declarations: [
    GiveConsentsComponent,
    ConsentsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ConsentsRoutingModule
  ]
})
export class ConsentsModule { }
