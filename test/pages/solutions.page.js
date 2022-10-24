const Page = require('../pages/page')
const scheduleCallButton = 'Schedule a call with our experts';
const contactUsTitle ='//h1//span[text()="Talk to an expert"]';
const healthCareApisLink ='[href="/solutions/healthcare-apis"]'
const healthCarePageTitle='//h1//span[contains(text(),"Elevate patient")]'
const contactCenterLink='main [href="/use-cases/contact-center"]'
const contactCenterPageTitle='//h1//span[contains(text(),"Contact Center")]'

class SolutionPage {
  async clickScheduleCallButton() {
    return await Page.click(scheduleCallButton);
  }
  async getContactUsTitle() {
     return  Page.getElement(contactUsTitle)
  }
  async clickHealthCareApisLink() {
    return  Page.getElement(healthCareApisLink)
  }
  async getHealthCarePageTitle() {
    return  Page.getElement(healthCarePageTitle)
  }
  async clickHealthCareApisLink() {
    return  Page.getElement(healthCareApisLink)
  }
  async clickContactCenterLink() {
    return  Page.getElement(contactCenterLink)
  }
  async getContactCenterPageTitle() {
    return  Page.getElement(contactCenterPageTitle)
  }


}

module.exports = new SolutionPage();
