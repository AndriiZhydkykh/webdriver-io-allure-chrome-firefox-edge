const Page = require('../pages/page')
const navigationMenuButtons = 'header span span';
const navigationMenuDropDowns = '[class*="ctVOEX"]';
const productsButton ='//header//span[text()="Products"]'
const productButtonsDropdownLinks='(//*[@href="/products/sip-trunks"])[1]//..//..//..//a'

class HeaderPage {
  async hoverNavigationMenuButtons(index) {
    return await Page.moveToByIndex(navigationMenuButtons, index);
}
  async getMenuDropDowns(index) {
    return Page.getElementByIndex(navigationMenuDropDowns, index);
}
  async moveToProductsButton() {
    return await Page.moveTo(productsButton);
}
  async getProductButtonsDropdownLinks(index) {
    return Page.getElementByIndex(productButtonsDropdownLinks,index);
}

}

module.exports = new HeaderPage();
