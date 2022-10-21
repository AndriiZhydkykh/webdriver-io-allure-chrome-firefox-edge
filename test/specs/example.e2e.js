const HelperScripts = require('../../helper/helper.scripts');
describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await browser.url('https://telnyx.com/')
        await browser.maximizeWindow()
        await HelperScripts.closeModalCookiesWindow();
    });
});


