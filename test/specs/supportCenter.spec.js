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
    xit('ID - 18 Open the article How to Sign Up for a Telnyx account on the support center page', async () => {
        await HeaderPage.clickSupportCenterLink();

        await SupportCenterPage.clickGettingStartedArticle();
        await SupportCenterPage.clickHowToSignUpArticle();
        await expect(await SupportCenterPage.getHowToSignUpArticleTitle()).toBeDisplayedInViewport();
    });
     xit('ID - 19 Find the article How to Sign Up for a Telnyx account on the support center using search', async () => {
        await HeaderPage.clickSupportCenterLink();

        await SupportCenterPage.typeSearchField('How to Sign Up for a Telnyx account');
        await SupportCenterPage.clickHowToSignUpArticleFromSearch();
        await expect(await SupportCenterPage.getHowToSignUpArticleTitle()).toBeDisplayedInViewport()
    });
    it('ID - 20 Come back to the main page from support center page', async () => {
      await HeaderPage.clickSupportCenterLink();

      await SupportCenterPage.typeSearchField('How to Sign Up for a Telnyx account');
      await expect(await SupportCenterPage.getHowToSignUpArticleTitle()).toBeDisplayedInViewport()
  });
    
});
