import { OnlyQPage } from './app.po';

describe('only-q App', () => {
  let page: OnlyQPage;

  beforeEach(() => {
    page = new OnlyQPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
