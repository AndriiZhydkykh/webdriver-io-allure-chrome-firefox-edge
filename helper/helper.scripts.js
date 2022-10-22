const Page = require('../test/pages/page');
const HeaderPage = require('../test/pages/header.page');
const cookiesModalWindow='[aria-label="close and deny"]~div>div'
class HelperScripts {
  async closeModalCookiesWindow(){
    if(await $(cookiesModalWindow).isDisplayedInViewport() === true){
      return await Page.click(cookiesModalWindow);
    }
  }
  async maximizeWindow(){
    return await browser.maximizeWindow();
  }
  async checkButtonsHaveDropdown(){
    for (let i = 0; i <= 4; i++)  {
      await HeaderPage.hoverNavigationMenuButtons(i)
      await expect(HeaderPage.getMenuDropDowns(i)).toBeDisplayedInViewport()
    }
  }
  
}
module.exports = new HelperScripts();