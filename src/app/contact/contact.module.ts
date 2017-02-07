import { NgModule } from '@angular/core';

import { ContactRoutingModule } from './contact-routing.module';
import { SharedModule } from './../shared/shared.module';

import { ContactComponent } from './components/contact/contact.component';

import { ContactService } from './services/contact.service';

@NgModule({
  imports: [
    SharedModule,
    ContactRoutingModule,
  ],
  declarations: [
    ContactComponent,
  ],
  providers: [
    ContactService
  ]
})
export class ContactModule { }
