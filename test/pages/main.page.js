const Page = require('../pages/page');
const voiceApiLink ='main a[href="/products/voice-api"]'
const voicePageTitle ='//h1//span[text()="Voice API"]'

const header = 'body>div>div>header';
const navigationMenuButtons = 'header span>span';
const navigationMenuDropDowns = 'header ul>li>div>div';

class MainPage {
  async clickVoiceApiLink(){
   return await Page.click(voiceApiLink)
}
  async getVoicePageTitle(){
    return await Page.getElement(voicePageTitle)
}
async hoverHeader(){
  return await Page.moveTo(header)
}

  async open(){
    return await Page.open('/')
}
}

module.exports = new MainPage();
