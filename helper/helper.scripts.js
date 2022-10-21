const Page = require('../test/pages/page');
const cookiesModalWindow='[aria-label="close and deny"]~div>div'

class HelperScripts {
  async closeModalCookiesWindow(){
    if(await $(cookiesModalWindow).isDisplayedInViewport() === true){
      return await Page.click(cookiesModalWindow);
    }
  }

}
module.exports = new HelperScripts();