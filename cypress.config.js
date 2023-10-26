const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "o9s749",
  e2e: {
    baseUrl: "http://localhost:8000",
    specPattern: "cypress/e2e",
  }
});
