const HelperScripts = require('../../helper/helper.scripts');
const MainPage = require('../pages/main.page');
const HeaderPage = require('../pages/header.page');
const SignUpPage = require('../pages/signUp.page');


beforeEach(async function () {
  await MainPage.open();
  await HelperScripts.maximizeWindow();
  await HelperScripts.closeModalCookiesWindow();
});

describe('Sign up page testing', () => {
    it('ID - 10 Sign up with an email that does not contain @', async () => {
      await HeaderPage.clickSignUpLink();
        
      await SignUpPage.typeEmailInput('usergmail.com ');
      await SignUpPage.typeNameInput('User1');
      await SignUpPage.typePasswordInput('User2181681u!');
      await SignUpPage.clickTermsAndConditions();
      await SignUpPage.clickCreateAccountButton();
      await expect(await SignUpPage.getEmailErrorText()).toHaveText('Please enter a valid email address.');
    });

    it('ID - 11 Sign up with a password that does not contain symbol', async () => {
      await HeaderPage.clickSignUpLink();
      
      await SignUpPage.typeEmailInput('user@gmail.com ');
      await SignUpPage.typeNameInput('User1');
      await SignUpPage.typePasswordInput('User2181681u');
      await SignUpPage.clickTermsAndConditions();
      await SignUpPage.clickCreateAccountButton();
      await expect(await SignUpPage.getPasswordErrorSymbolText()).toHaveText('Contain at least one symbol');
    });

    it('ID - 12 Sign up without agreeing Terms and Conditions and Privacy Policy', async () => {
      await HeaderPage.clickSignUpLink();

      await SignUpPage.typeEmailInput('user@gmail.com ');
      await SignUpPage.typeNameInput('User1');
      await SignUpPage.typePasswordInput('User2181681u!');
      await SignUpPage.clickCreateAccountButton();

      await expect(await SignUpPage.getTermsAndConditionsErrorText()).toHaveText('Please accept the terms and conditions');
    });
    it('ID - 13 Sign up with an email that does not contain @', async () => {
      await HeaderPage.clickSignUpLink();

      await SignUpPage.clickCreateAccountButton();
      await expect(await SignUpPage.getEmailErrorText()).toHaveText('This field is required.');
      await expect(await SignUpPage.getNameErrorText()).toHaveText('This field is required.');
    })
    it('ID - 14 Sign up with valid credentials', async () => {
      await HeaderPage.clickSignUpLink();
        
      await SignUpPage.typeEmailInput(await HelperScripts.getRandomEmail());
      await SignUpPage.typeNameInput(await HelperScripts.getRandomName());
      await SignUpPage.typePasswordInput(await HelperScripts.getRandomPassword());
      await SignUpPage.clickTermsAndConditions();
      await SignUpPage.clickCreateAccountButton();
      await expect(await SignUpPage.getRegistrationSuccessText()).toHaveText("We've sent you an email to activate your account");
    })
});
