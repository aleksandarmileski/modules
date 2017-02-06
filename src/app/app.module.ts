import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
  ],
  providers: [
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
