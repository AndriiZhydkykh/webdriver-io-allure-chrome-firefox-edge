const HelperScripts = require('../../helper/helper.scripts');
const MainPage = require('../pages/main.page');
const HeaderPage = require('../pages/header.page');
const SignInPage = require('../pages/signIn.page');

beforeEach(async function () {
    await MainPage.open();
    await HelperScripts.maximizeWindow();
    await HelperScripts.closeModalCookiesWindow();
  });
  
describe('Sign in testing', () => {
    xit('ID - 15 Sign in with valid email and invalid password', async () => {
        await HeaderPage.clickSignInLink();
        
        await SignInPage.typeEmailInput('kinomanj@gmail.com')
        await SignInPage.typePasswordInput(await HelperScripts.getRandomPassword())
        await SignInPage.clickSigInButton();
        await expect(await SignInPage.getWrongEmailOrPasswordMessage()).toBeDisplayedInViewport();
    });
    xit('ID - 16 Sign in with invalid email and invalid password', async () => {
      await HeaderPage.clickSignInLink();
      
      await SignInPage.typeEmailInput(await HelperScripts.getRandomEmail())
      await SignInPage.typePasswordInput(await HelperScripts.getRandomPassword())
      await SignInPage.clickSigInButton();
      await expect(await SignInPage.getWrongEmailOrPasswordMessage()).toBeDisplayedInViewport();
    });
    xit("ID - 17 Sign in with valid email that doesn't contain @", async () => {
      await HeaderPage.clickSignInLink();
    
      await SignInPage.typeEmailInput('kinomanjgmail.com')
      await SignInPage.typePasswordInput(await HelperScripts.getRandomPassword())
      await SignInPage.clickSigInButton();
      await expect(await SignInPage.getEmailErrorMessage()).toBeDisplayedInViewport();
    });
    
});