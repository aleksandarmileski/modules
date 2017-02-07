import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { ContactModule } from './contact/contact.module';

import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';

import { UserService } from './services/user.service';

import { HighlightDirective } from './directives/hihglight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    TitleComponent,
  ],
  imports: [
    BrowserModule,
    ContactModule,
    AppRoutingModule,
  ],
  providers: [
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
