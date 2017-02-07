import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrisisDetailComponent } from './components/crisis-detail/crisis-detail.component';
import { CrisisListComponent } from './components/crisis-list/crisis-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: CrisisListComponent },
  { path: ':id', component: CrisisDetailComponent },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CrisisRoutingModule { }
