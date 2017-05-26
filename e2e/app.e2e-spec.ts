import { FootballWatcherPage } from './app.po';

describe('football-watcher App', () => {
  let page: FootballWatcherPage;

  beforeEach(() => {
    page = new FootballWatcherPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
