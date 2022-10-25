const Page = require('../pages/page')
const exploreVXCs='[href="/products/virtual-cross-connects"]'
const exploreVXCsPageTitle ='h1 span'
const seePriceButton='main [href="/pricing"]'
const elasticSIPTrunkingPriceLink='main [href="/pricing/elastic-sip"]'
const exploreMessaging='main [href="/products/sms-api"]'

class Network {
  async clickExploreVXCs() {
    return await Page.click(exploreVXCs);
  }
  async getExploreVXCsPageTitle() {
    return await Page.getElement(exploreVXCsPageTitle);
  }
  async clickSeePriceButton() {
    return await Page.click(seePriceButton);
  }
  async clickElasticSIPTrunkingPriceLink() {
    return await Page.click(elasticSIPTrunkingPriceLink);
  }
  async clickExploreMessaging() {
    return await Page.click(exploreMessaging);
  }
}

module.exports = new Network();
