import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "./material.module";
import {SideNavComponent} from "../layout/side-nav/side-nav.component";
import {ContentLayoutComponent} from "../layout/content-layout/content-layout.component";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    SideNavComponent,
    ContentLayoutComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    MaterialModule
  ]
})
export class SharedModule { }
