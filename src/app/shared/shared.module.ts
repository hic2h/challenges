import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from './material.module';
import {SideNavComponent} from '../layout/side-nav/side-nav.component';
import {ContentLayoutComponent} from '../layout/content-layout/content-layout.component';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

/**
 * The shared module contains classes and resources which are used in more than
 * one dynamically loaded module.
 * Now it imports the used material modules, the form and reactive form and the layout components
 */
@NgModule({
  declarations: [
    SideNavComponent,
    ContentLayoutComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    MaterialModule
  ]
})
export class SharedModule { }
