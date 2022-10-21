class Page {
    async open(text) {
        return await browser.url(text);
    }
    async getElement(element) {
        return await $(element);
    }
    async getElements(element) {
        return await $$(element);
    }
    async scrollTo(element) {
        await (await this.getElement(element)).scrollIntoView();
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
     async moveTo(element) {
        await this.waitForClickable(element);
        await (await this.getElements(element)).moveTo();
     }
}

module.exports = new Page();

