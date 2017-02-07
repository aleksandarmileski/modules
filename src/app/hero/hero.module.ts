import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroRoutingModule } from './hero-routing.module';

import { HeroComponent } from './components/hero/hero.component';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';

import { HighlightDirective } from './highlight.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeroRoutingModule,
  ],
  declarations: [
    HighlightDirective,
    HeroComponent,
    HeroListComponent,
    HeroDetailComponent
  ]
})
export class HeroModule { }
