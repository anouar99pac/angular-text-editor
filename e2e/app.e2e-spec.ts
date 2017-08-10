import { AngularTextEditorPage } from './app.po';

describe('angular-text-editor App', () => {
  let page: AngularTextEditorPage;

  beforeEach(() => {
    page = new AngularTextEditorPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
