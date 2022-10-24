const Page = require('../pages/page')
const navigationMenuButtons = 'header span span';
const navigationMenuDropDowns = '[class*="ctVOEX"]';
const productsButton ='//header//span[text()="Products"]'
const productButtonsDropdownLinks='(//*[@href="/products/sip-trunks"])[1]//..//..//..//a'
const solutionsButton ='//header//span[text()="Solutions"]'
const customerEngagementPlatformsLinkInSolutionDropdown ='header [href*="agement-platforms"]'
const seeAllSolutionsInSolutionsDropdown='href="/solutions"'
const seeAllUseCasesInSolutionsDropdown='[href="/use-cases"]'
const networkButton='header li [href="/solutions/global-ip-network"]'
const resourcesButton ='//header//span[text()="Resources"]'
const developerDocsLinkInTheResourcesButton='header [href*="docs/v2"]'




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
async moveToSolutionsButton() {
  return await Page.moveTo(solutionsButton);
}
async clickCustomerEngagementPlatformsLinkInSolutionDropdown() {
  return await Page.click(customerEngagementPlatformsLinkInSolutionDropdown);
}
async clickSeeAllSolutionsInSolutionsDropdown() {
  return await Page.click(seeAllSolutionsInSolutionsDropdown);
}
async clickSeeAllUseCasesInSolutionsDropdownInSolutionsDropdown() {
  return await Page.click(seeAllUseCasesInSolutionsDropdown);
}
async clickNetworkButton() {
  return await Page.click(networkButton);
}
async moveToResourcesButton() {
  return await Page.moveTo(resourcesButton);
}
async clickDeveloperDocsLinkInTheResourcesButton() {
  return await Page.moveTo(developerDocsLinkInTheResourcesButton);
}

}

module.exports = new HeaderPage();
