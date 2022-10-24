const HelperScripts = require('../../helper/helper.scripts');
//const MainPage = require('../pages/main.page');
const HeaderPage= require('../pages/header.page');

before('Open main page and close cookies modal window',async () => {
    await browser.url('https://portal.telnyx.com/')
    //await MainPage.open();
    await HelperScripts.maximizeWindow();
    await HelperScripts.closeModalCookiesWindow();
    
});
describe.skip('Header testing', () => {
    it('ID -2 Check that Product, Solution, Resources,Company,Pricing links in the header menu open dropdown menu when hover those', async () => {
        await HelperScripts.checkButtonsHaveDropdown();
    });
    it('ID -3 Check that all item from Products  dropdown menu on header to be able click', async () => { 
        await HeaderPage.moveToProductsButton()
        await HelperScripts.checkLinksInProductsButtonIsClickable()
    });
    
});





