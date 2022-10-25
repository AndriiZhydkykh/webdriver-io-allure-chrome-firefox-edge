const Page = require('../test/pages/page');
const HeaderPage = require('../test/pages/header.page');
const cookiesModalWindow='[aria-label="close and deny"]~div>div'
const randomEmail=Math.random().toString(36).substring(2,10)+"@gmail.com"
const randomName=Math.random().toString(36).substring(2,10)
const randomPassword=Math.random().toString(36).substring(2,16)+'!Q'

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
      await HeaderPage.hoverNavigationMenuButtons(i);
      await expect(await HeaderPage.getMenuDropDowns(i)).toBeDisplayedInViewport();
    }
  }
  async checkLinksInProductsButtonIsClickable(i){
      for (let i = 0; i <= 8; i++)  {
      await expect(await HeaderPage.getProductButtonsDropdownLinks(i)).toBeClickable()
    }
  } 
  async getRandomEmail(){
    return randomEmail
  }
  async getRandomName(){
    return randomName
  }
  async getRandomPassword(){
    return randomPassword
  }

}
module.exports = new HelperScripts();