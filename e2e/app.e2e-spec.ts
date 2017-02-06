import { AngularModulesPage } from './app.po';

describe('angular-modules App', function() {
  let page: AngularModulesPage;

  beforeEach(() => {
    page = new AngularModulesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('mod works!');
  });
});
