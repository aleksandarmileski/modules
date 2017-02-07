import { ContactComponent } from './components/contact/contact.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'contact', component: ContactComponent }
    ])
  ],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
