const HelperScripts = require('../../helper/helper.scripts');
const MainPage = require('../pages/main.page');
const HeaderPage = require('../pages/header.page');
const DeveloperDocsPage = require('../pages/developerDocs.page');

before('Open main page and close cookies modal window',async () => {
    await MainPage.open();
    await HelperScripts.maximizeWindow();
    await HelperScripts.closeModalCookiesWindow();
    
});
describe('Header testing', () => {
    it('ID - 8 Open API v1 in the developers docs page', async () => {
        await HeaderPage.moveToResourcesButton();
        await HeaderPage.clickDeveloperDocsLinkInTheResourcesButton();

        DeveloperDocsPage.clickApiV1Button();
        await expect(await DeveloperDocsPage.getApiV1TopMessage()).toBeDisplayedInViewport();
        await expect(await DeveloperDocsPage.getApiV1TopMessage()).toHaveText('Telnyx API V1 Documentation')
    });

    it('ID - 9 Open SIP Trunking Configuration Guides in API v1 on the developers docs page', async () => {
      await HeaderPage.moveToResourcesButton();
      await HeaderPage.clickDeveloperDocsLinkInTheResourcesButton();

      DeveloperDocsPage.clickApiV1Button();
      DeveloperDocsPage.clickSipTrunkingButtonInLeftSidebarV1();
      DeveloperDocsPage.clickConfigurationGuidesButtonV1InMainSectorV1();

      await expect(await DeveloperDocsPage.getApiV1TopMessage()).toBeDisplayedInViewport();
      await expect(await DeveloperDocsPage.getSipTrunkingConfigurationGuidesTitleV1()).toHaveText('SIP Trunking Configuration Guides')
  });
    
});
