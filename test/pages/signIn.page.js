const Page = require('../pages/page')
const emailInput='[aria-label="loginForm"] [name="email"]'
const passwordInput='[name="password"]'
const sigInButton='[aria-label="loginForm"] [type="submit"]'
const wrongEmailOrPasswordMessage='//span[contains(text(),"combination is not valid")]'
const emailErrorMessage='//div[text()="Please enter a valid email address."]'




class SignInPage {
  async typeEmailInput(text) {
    return await Page.type(emailInput,text);
  }
  async typePasswordInput(text) {
    return await Page.type(passwordInput,text);
  }
  async clickSigInButton() {
    return await Page.click(sigInButton);
  }
  async getWrongEmailOrPasswordMessage() {
    return await Page.getElement(wrongEmailOrPasswordMessage);
  }
  async getEmailErrorMessage() {
    return await Page.getElement(emailErrorMessage);
  }
  
}

module.exports = new SignInPage();