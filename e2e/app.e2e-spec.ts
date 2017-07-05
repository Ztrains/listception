import { ListceptionPage } from './app.po';

describe('listception App', () => {
  let page: ListceptionPage;

  beforeEach(() => {
    page = new ListceptionPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
