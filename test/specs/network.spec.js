const HelperScripts = require('../../helper/helper.scripts');
const MainPage = require('../pages/main.page');
const HeaderPage = require('../pages/header.page');
const Network = require('../pages/network.page');

beforeEach(async function () {
    await MainPage.open();
    await HelperScripts.maximizeWindow();
    await HelperScripts.closeModalCookiesWindow();
  });
  
describe('Network page testing', () => {
    this.retries(4)
    it('ID - 7 Open the virtual cross connects page from Network link in Header menu', async () => {
        await HeaderPage.clickNetworkButton();

        await Network.clickExploreVXCs();
        await expect(await Network.getExploreVXCsPageTitle()).toHaveText('Run your comms and data on a private cloud highway.');
        await expect(browser).toHaveUrlContaining('virtual-cross-connects')
    });
    it('ID - 8 See price for Elastic SIP Trunking from Network Page', async () => {
        await HeaderPage.clickNetworkButton();

        await Network.clickSeePriceButton();
        await Network.clickElasticSIPTrunkingPriceLink();

        await expect(await Network.getExploreVXCsPageTitle()).toHaveText('SIP Trunk Pricing');
        await expect(browser).toHaveUrlContaining('pricing/elastic-sip')
    });
    it('ID - 9 Open SMS API from Network Page', async () => {
        await HeaderPage.clickNetworkButton();

        await Network.clickExploreMessaging();
        await expect(await Network.getExploreVXCsPageTitle()).toHaveText('SMS API');
        await expect(browser).toHaveUrlContaining('sms-api')
    });
    
});
