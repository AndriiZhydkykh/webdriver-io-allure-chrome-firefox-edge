const Page = require('../pages/page')
const gettingStartedArticle='//h2[text()="Getting Started"]'
const howToSignUpArticle='//span[contains(text(),"How to Sign Up")]'
const howToSignUpArticleFromSearch='[href*="how-to-sign-up-for-a-telnyx-account"]'

const howToSignUpArticleTitle='//h1[contains(text(),"How to Sign Up")]'
const searchField='[class*="search__input"]'

class SupportCenterPage {
  async clickGettingStartedArticle() {
    return await Page.click(gettingStartedArticle);
  }
  async clickHowToSignUpArticle() {
    return await Page.click(howToSignUpArticle);
  }
  async clickHowToSignUpArticleFromSearch() {
    return await Page.click(howToSignUpArticleFromSearch);
  }
  async getHowToSignUpArticleTitle() {
    return await Page.getElement(howToSignUpArticleTitle);
  }
  async typeSearchField(text) {
    return await Page.typeAndPressEnter(searchField,text);
  }
}

module.exports = new SupportCenterPage();