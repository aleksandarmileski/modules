import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AwesomePipe } from './components/contact/awesome.pipe';

import { ContactComponent } from './components/contact/contact.component';
import { HighlightDirective } from './components/contact/highlight.directive';

import { ContactService } from './services/contact.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ContactComponent,
    AwesomePipe,
    HighlightDirective,
  ],
  providers: [
    ContactService
  ],
  exports: [
    ContactComponent
  ]
})
export class ContactModule { }