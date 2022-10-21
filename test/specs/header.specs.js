const HelperScripts = require('../../helper/helper.scripts');
const Page = require('../pages/page');
const MainPage = require('../pages/main.page');
const headerLinksHaveDropdown =['Products','Solutions','Resources','Company','Pricing']

before('open main page and close cookies modal window',async () => {
    await MainPage.open();
    await HelperScripts.maximizeWindow();
    await HelperScripts.closeModalCookiesWindow();
    
});
describe('Header testing', () => {
    it('ID 2 - Open Voice Api from main page', async () => {
        headerLinksHaveDropdown.forEach(function(elem) {
        let media = $(`//header//span//span[text()="${elem}"]`).moveTo();
      });
      await browser.pause(5000)
    });
});



