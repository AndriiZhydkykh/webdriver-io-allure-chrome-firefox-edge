const HelperScripts = require('../../helper/helper.scripts');
const MainPage = require('../pages/main.page');
beforeEach(async function () {
    await MainPage.open();
    await HelperScripts.maximizeWindow();
    await HelperScripts.closeModalCookiesWindow();
  });
  
describe('Main page testing',function ()  {
    this.retries(4)
    it('ID 1 - Open Voice Api from main page', async () => {
        await MainPage.clickVoiceApiLink();
        await expect(browser).toHaveUrlContaining('voice-api')
        await expect(await MainPage.getVoicePageTitle()).toHaveText('Voice API')
    });
});


