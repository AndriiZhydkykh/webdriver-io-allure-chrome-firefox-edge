class Page {
    async getElement(element) {
        return await $(element);
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
}

module.exports = new Page();

