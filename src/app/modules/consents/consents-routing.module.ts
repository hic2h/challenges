import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GiveConsentsComponent} from './pages/give-consents/give-consents.component';
import {ConsentsComponent} from './pages/consents/consents.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'give-consent'
  },
  {
    path: 'give-consent',
    component: GiveConsentsComponent
  },
  {
    path: 'consents',
    component: ConsentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsentsRoutingModule { }
