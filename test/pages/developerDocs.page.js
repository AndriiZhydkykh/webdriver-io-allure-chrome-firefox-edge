const Page = require('../pages/page')
const apiV1Button='//*[@id="docs-desktop-sidebar"]//button[text()="API v1"]'
const apiV1TopMessage='//*[contains(text(),"This is the current API V1 documentation")]'
const apiV1Title='[id="telnyx-api-v1-documentation"]'
const sipTrunkingButtonInLeftSidebarV1='[id="docs-desktop-sidebar"] [href="/docs/v1/sip-trunking"]'
const configurationGuidesButtonV1InMainSector='main  [href*="configuration-guides/overview"]'
const sipTrunkingConfigurationGuidesTitleV1 ='[id="sip-trunking-configuration-guides"]'



class DeveloperDocsPage {
  async clickApiV1Button() {
    return await Page.click(apiV1Button);
  }
  async getApiV1TopMessage() {
    return await Page.getElement(apiV1TopMessage);
  }
  async getApiV1Title() {
    return await Page.getElement(apiV1Title);
  }
  async clickSipTrunkingButtonInLeftSidebarV1() {
    return await Page.click(sipTrunkingButtonInLeftSidebarV1);
  }
  async clickConfigurationGuidesButtonV1InMainSectorV1() {
    return await Page.click(configurationGuidesButtonV1InMainSector);
  }
  async getSipTrunkingConfigurationGuidesTitleV1() {
    return await Page.getElement(configurationGuidesButtonV1InMainSector);
  }
}

module.exports = new DeveloperDocsPage();
