import { AdminFrontEndPage } from './app.po';

describe('admin-front-end App', () => {
  let page: AdminFrontEndPage;

  beforeEach(() => {
    page = new AdminFrontEndPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
