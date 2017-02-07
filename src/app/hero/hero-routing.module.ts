import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { HeroComponent } from './components/hero/hero.component';

const routes: Routes = [
  {
    path: '',
    component: HeroComponent,
    children: [
      {
        path: '', component: HeroListComponent
      },
      {
        path: ':id', component: HeroDetailComponent
      },
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HeroRoutingModule { }
