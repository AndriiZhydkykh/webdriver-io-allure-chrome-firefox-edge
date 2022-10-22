const Page = require('../pages/page')
const navigationMenuButtons = 'header span span';
const navigationMenuDropDowns = 'header ul>li>div>div';

class HeaderPage {
  async hoverNavigationMenuButtons(index) {
   return await Page.moveToByIndex(navigationMenuButtons, index);
}
  async getMenuDropDowns(index) {
   return Page.getElementByIndex(navigationMenuDropDowns, index);
}

}

module.exports = new HeaderPage();
