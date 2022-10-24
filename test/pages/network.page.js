const Page = require('../pages/page')
const exploreVXCs='[href="/products/virtual-cross-connects"]'
const exploreVXCsPageTitle ='h1 span'

class Network {
  async clickExploreVXCs() {
    return await Page.click(exploreVXCs);
  }
  async getExploreVXCsPageTitle() {
    return await Page.getElement(exploreVXCsPageTitle);
  }
}

module.exports = new Network();
