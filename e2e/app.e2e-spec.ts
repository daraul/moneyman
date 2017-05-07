import { MoneymanPage } from './app.po';

describe('moneyman App', () => {
  let page: MoneymanPage;

  beforeEach(() => {
    page = new MoneymanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
