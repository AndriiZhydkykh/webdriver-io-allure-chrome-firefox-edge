const HelperScripts = require('../../helper/helper.scripts');
const MainPage = require('../pages/main.page');
const HeaderPage = require('../pages/header.page');
const SupportCenterPage = require('../pages/supportCenter.page');

beforeEach(async function () {
    await MainPage.open();
    await HelperScripts.maximizeWindow();
    await HelperScripts.closeModalCookiesWindow();
  });
  
describe('Header testing', () => {
    it('ID - 18 Open the article How to Sign Up for a Telnyx account on the support center page', async () => {
        await HeaderPage.clickSupportCenterLink();

        await SupportCenterPage.clickGettingStartedArticle();
        await SupportCenterPage.clickHowToSignUpArticle();
        await expect(await SupportCenterPage.getHowToSignUpArticleTitle()).toBeDisplayedInViewport();
    });
    it('ID - 19 Find the article How to Sign Up for a Telnyx account on the support center using search', async () => {
        await HeaderPage.clickSupportCenterLink();

        await SupportCenterPage.typeSearchField('How to Sign Up for a Telnyx account');
        await SupportCenterPage.clickHowToSignUpArticleFromSearch();
        await expect(await SupportCenterPage.getHowToSignUpArticleTitle()).toBeDisplayedInViewport()
    });
    it('ID - 20 Find non-existent page on the support page using search', async () => {
      await HeaderPage.clickSupportCenterLink();

      await SupportCenterPage.typeSearchField('12345689352156');
      await expect(await SupportCenterPage.getCouldNotFindMessage()).toBeDisplayedInViewport()
  });
    
});
