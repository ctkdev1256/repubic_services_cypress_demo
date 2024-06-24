const { defineConfig } = require("cypress");

module.exports = defineConfig({

viewportHeight: 860,
viewportWidth:1224,
chromeWebSecurity: false,

  e2e: {
    baseUrl: 'https://www.republicservices.com',
    setupNodeEvents(on, config) {
     
      // implement node event listeners here
    },
  },
});
