import { browser, element, by } from 'protractor';

export class AngularModulesPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('mod-root h1')).getText();
  }
}
