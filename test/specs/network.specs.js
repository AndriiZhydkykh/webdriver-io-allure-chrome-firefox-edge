const HelperScripts = require('../../helper/helper.scripts');
const MainPage = require('../pages/main.page');
const HeaderPage = require('../pages/header.page');
const Network = require('../pages/network.page');

before('Open main page and close cookies modal window',async () => {
    await MainPage.open();
    await HelperScripts.maximizeWindow();
    await HelperScripts.closeModalCookiesWindow();
    
});
describe('Header testing', () => {
    it('ID - 7 Open the virtual cross connects page from Network link in Header menu', async () => {
        await HeaderPage.clickNetworkButton();

        await Network.clickExploreVXCs();
        await expect(await Network.getExploreVXCsPageTitle()).toHaveText('Run your comms and data on a private cloud highway.');
        await expect(browser).toHaveTitleContaining('virtual-cross-connects')
    });
    
});
