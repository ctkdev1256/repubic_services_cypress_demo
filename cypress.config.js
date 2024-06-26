const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 5000,
  viewportHeight: 860,
  viewportWidth: 1224,
  chromeWebSecurity: false,
  video: true,
  
  e2e: {
    baseUrl: 'https://www.republicservices.com',
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
