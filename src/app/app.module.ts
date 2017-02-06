import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/hihglight.directive';
import { TitleComponent } from './components/title/title.component';

import { UserService } from './services/user.service';
import { ContactService } from './services/contact.service';
import { ContactComponent } from './components/contact/contact.component';
import { AwesomePipe } from './components/contact/awesome.pipe';
import { HighlightDirective as ContactHighlightDirective } from './components/contact/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    TitleComponent,
    ContactComponent,
    AwesomePipe,
    ContactHighlightDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    UserService,
    ContactService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
