const HelperScripts = require('../../helper/helper.scripts');
const MainPage = require('../pages/main.page');
const HeaderPage= require('../pages/header.page');
const SolutionPage= require('../pages/solutions.page');

beforeEach(async function () {
  await MainPage.open();
  await HelperScripts.maximizeWindow();
  await HelperScripts.closeModalCookiesWindow();
});

describe('Solution page testing', () => {
  this.retries(4)
    it('ID - 4 Open the Talk to an expert from Customer Engagement Platforms page', async () => {
      await HeaderPage.moveToSolutionsButton();
      await HeaderPage.clickCustomerEngagementPlatformsLinkInSolutionDropdown()

      await SolutionPage.clickScheduleCallButton();
      await expect(await SolutionPage.getContactUsTitle()).toBeDisplayedInViewport();
      await expect(browser).toHaveUrlContaining('contact-us')

    });
    it('ID - 5 Open Explore Healthcare Solutions from Solutions page', async () => {
      await HeaderPage.moveToSolutionsButton();
      await HeaderPage.clickSeeAllSolutionsInSolutionsDropdown()

      await SolutionPage.clickHealthCareApisLink();
      await expect(await SolutionPage.getHealthCarePageTitle()).toBeDisplayedInViewport();
      await expect(browser).toHaveUrlContaining('healthcare-apis')
    });

    it('ID - 6 Open the Contact Center Solutions from Solutions page', async () => {
      await HeaderPage.moveToSolutionsButton();
      await HeaderPage.clickSeeAllUseCasesInSolutionsDropdownInSolutionsDropdown()

      await SolutionPage.clickContactCenterLink();
      await expect(await SolutionPage.getContactCenterPageTitle()).toBeDisplayedInViewport();
      await expect(browser).toHaveUrlContaining('contact-center')
  });
   
    
});