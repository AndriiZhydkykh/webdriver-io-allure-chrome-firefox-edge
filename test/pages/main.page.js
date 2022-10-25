const Page = require('../pages/page');
const voiceApiLink ='main a[href="/products/voice-api"]'
const voicePageTitle ='//h1//span[text()="Voice API"]'

class MainPage {
  async clickVoiceApiLink(){
   return await Page.click(voiceApiLink)
}
  async getVoicePageTitle(){
    return await Page.getElement(voicePageTitle)
}
  async open(){
    return await Page.open('/')
}
}

module.exports = new MainPage();
