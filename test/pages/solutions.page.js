const Page = require('../pages/page')
const scheduleCallButton = '//main//a[contains(text(),"Schedule")]';
const contactUsTitle ='//h1//span[text()="Talk to an expert"]';
const healthCareApisLink ='[href="/solutions/healthcare-apis"]'
const healthCarePageTitle='//h1//span[contains(text(),"Elevate patient")]'
const contactCenterLink='main [href="/use-cases/contact-center"]'
const contactCenterPageTitle='//h1//strong[contains(text(),"Contact Center")]'

class SolutionPage {
  async clickScheduleCallButton() {
    return await Page.click(scheduleCallButton);
  }
  async getContactUsTitle() {
     return  Page.getElement(contactUsTitle)
  }
  async clickHealthCareApisLink() {
    return await Page.click(healthCareApisLink)
  }
  async getHealthCarePageTitle() {
    return await Page.getElement(healthCarePageTitle)
  }
  async clickContactCenterLink() {
    return await Page.click(contactCenterLink)
  }
  async getContactCenterPageTitle() {
    return await Page.getElement(contactCenterPageTitle)
  }


}

module.exports = new SolutionPage();
