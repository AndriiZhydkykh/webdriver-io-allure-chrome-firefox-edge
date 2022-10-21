const Page = require('../pages/page')

class HeaderPage {
  async clickCallUsLink(){
  return await Page.click(callUsLink)
}

}

module.exports = new HeaderPage();
