describe("Accessibility tests Dark mode", () => {
  beforeEach(() => {
      cy.visit("/", {
        onBeforeLoad (win) {
          const callback = cy.stub(win, 'matchMedia')
          callback.withArgs('(prefers-color-scheme: dark)')
          .as("dark-mode")
          .returns({
            matches: true,
          })
          callback
          .as("all media")
          .returns({
            matches: true,
          })
        },
      }).get("main")
      cy.injectAxe()
  })
  it("Has no detectable accessibility violations on load", () => {
    cy.checkA11y()
  })
})

describe("Accessibility tests light mode", () => {
  beforeEach(() => {
      cy.visit("/", {
        onBeforeLoad (win) {
          const callback = cy.stub(win, 'matchMedia')
          callback.withArgs('(prefers-color-scheme: dark)')
          .as("no dark-mode")
          .returns({
            matches: false,
          })
          callback
          .as("all media")
          .returns({
            matches: true,
          })
        },
      }).get("main")
      cy.injectAxe()
  })
  it("Has no detectable accessibility violations on load", () => {
    cy.checkA11y()
  })
})
