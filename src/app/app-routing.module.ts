import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContentLayoutComponent} from './layout/content-layout/content-layout.component';

/**
 * ContentLayoutComponent is used as default app layout, for now it contains the side navigation
 * In larger apps, we may have different layouts based on user group/role
 */
const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/consents/consents.module').then(m => m.ConsentsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
