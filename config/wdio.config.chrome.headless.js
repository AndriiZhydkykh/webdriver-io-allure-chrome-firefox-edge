const { config } = require("./wdio.conf");
const chromeHeadlessConfig = {
    ...config,
    services: [['selenium-standalone', { chrome: 'latest' }]], 
    capabilities: [{
        maxInstances: 2,
        browserName: "chrome",
        'goog:chromeOptions': {
            args: ['--headless', '--start-maximized', '--no-sandbox', '--disable-gpu', '--window-size=1480,1024', '--allow-insecure-localhost']
        },
    }],
};

exports.config = chromeHeadlessConfig;