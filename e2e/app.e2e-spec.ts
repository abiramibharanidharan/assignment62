import { AAssignment62Page } from './app.po';

describe('a-assignment62 App', function() {
  let page: AAssignment62Page;

  beforeEach(() => {
    page = new AAssignment62Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
