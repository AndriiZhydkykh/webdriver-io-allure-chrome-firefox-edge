const Page = require('../pages/page')
const emailInput='[id="email"]'
const nameInput='[id="full_name"]'
const passwordInput='[id="password"]'
const termsAndConditions='[aria-labelledby="terms-label"]'
const createAccountButton='[type="submit"]'
const emailErrorText='[id="email_error"]'
const passwordErrorSymbolText='//*[@aria-hidden="false"][contains(text(),"symbol")]'
const termsAndConditionsErrorText='[id="terms_and_conditions_error"] span span'
const nameErrorText='[id="full_name_error"]'
const registrationSuccessText='//h1'



class SignUpPage {
  async typeEmailInput(text) {
    return await Page.type(emailInput,text);
  }
  async typeNameInput(text) {
    return await Page.type(nameInput,text);
  }
  async typePasswordInput(text) {
    return await Page.type(passwordInput,text);
  }
  async clickTermsAndConditions() {
    return await Page.click(termsAndConditions);
  }
  async clickCreateAccountButton() {
    return await Page.click(createAccountButton);
  }
  async getEmailErrorText() {
    return await Page.getElement(emailErrorText);
  }
  async getPasswordErrorSymbolText() {
    return await Page.getElement(passwordErrorSymbolText);
  }
  async getTermsAndConditionsErrorText() {
    return await Page.getElement(termsAndConditionsErrorText);
  }
  async getNameErrorText() {
    return await Page.getElement(nameErrorText);
  }
  async getRegistrationSuccessText() {
    return await Page.getElement(registrationSuccessText);
  }
  
}

module.exports = new SignUpPage();
