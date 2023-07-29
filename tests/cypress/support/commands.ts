/// <reference types="cypress" />

Cypress.Commands.add("clickOnComponent", (component: string, force = false) => {
  cy.get(component).click({ force: force });
});

Cypress.Commands.add(
  "checkComponentIsVisible",
  (component: string, isVisible = true) => {
    isVisible === true
      ? cy.get(component).should("be.visible")
      : cy.get(component).should("not.be.visible");
  }
);

Cypress.Commands.add("pageMustBe", (url: string) => {
  cy.url().should("eq", url);
});

Cypress.Commands.add(
  "verifyComponentHref",
  (component: string, href: string) => {
    cy.get(component).should("have.attr", "href", href);
  }
);
