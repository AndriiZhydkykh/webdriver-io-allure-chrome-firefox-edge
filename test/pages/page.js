class Page {
    async open(text) {
        return await browser.url(text);
    }
    async getElement(element) {
        return await $(element);
    }
    async getAllElements(element) {
        return await $$(element);
    }
    async getElementByIndex(element, index) {
        return (await this.getAllElements(element))[index];
    }
    async waitForClickable(element) {
       return (await this.getElement(element)).waitForClickable();
    }
    async waitForDisplayed() {
        return (await this.getElement(element)).waitForDisplayed();
    }
    async waitForEnabled() {
        return (await this.getElement(element)).waitForEnabled();
    }

    async click(element) {
       await this.waitForClickable(element);
       await (await this.getElement(element)).click();
    }
    async clickElements(element) {
        await this.waitForClickable(element);
        await (await this.getElements(element)).click();
     }
     async moveToByIndex(element,index) {
        await (await this.getElementByIndex(element,index)).moveTo();
     }
     

     
}

module.exports = new Page();

