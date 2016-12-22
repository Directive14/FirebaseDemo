import { TestFirebasePage } from './app.po';

describe('test-firebase App', function() {
  let page: TestFirebasePage;

  beforeEach(() => {
    page = new TestFirebasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
