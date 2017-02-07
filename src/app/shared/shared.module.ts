import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighlightDirective } from './highlight.directive';
import { AwesomePipe } from './awesome.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AwesomePipe,
    HighlightDirective
  ],
  exports: [
    AwesomePipe,
    HighlightDirective,
    CommonModule,
    FormsModule,
  ]
})
export class SharedModule { }
