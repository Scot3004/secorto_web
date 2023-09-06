import { darkMode, lightMode } from "./stubs"

describe("Accessibility tests Dark mode", () => {
  beforeEach(() => {
      cy.visit("/", darkMode()).get("main")
      cy.injectAxe()
  })
  it("Has no detectable accessibility violations on load", () => {
    cy.checkA11y()
  })
})

describe("Accessibility tests light mode", () => {
  beforeEach(() => {
      cy.visit("/", lightMode()).get("main")
      cy.injectAxe()
  })
  it("Has no detectable accessibility violations on load", () => {
    cy.checkA11y()
  })
})
