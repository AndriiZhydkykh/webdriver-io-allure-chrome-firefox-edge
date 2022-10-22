const HelperScripts = require('../../helper/helper.scripts');
const MainPage = require('../pages/main.page');
//const HeaderPage = require('../pages/header.page');


before('Open main page and close cookies modal window',async () => {
    await MainPage.open();
    await HelperScripts.maximizeWindow();
    await HelperScripts.closeModalCookiesWindow();
    
});
describe('Header testing', () => {

    it('Check that Product, Solution, Resources,Company,Pricing links in the header menu open dropdown menu when hover those', async () => {
        await HelperScripts.checkButtonsHaveDropdown(); 
    });
});



