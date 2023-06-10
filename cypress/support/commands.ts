/// <reference types="cypress" />

Cypress.Commands.add("loginByPage", (email: string, password: string) => {
  cy.visit(`${Cypress.env("baseUrl")}login`);
  cy.get('[data-cy="input-email-login"]').last().type(email);
  cy.get('[data-cy="input-password-login"]').last().type(password);
  cy.get('[data-cy="button-submit-login"]').last().click();
});

Cypress.Commands.add("loginByModal", (email: string, password: string) => {
  cy.get('[data-cy="input-email-login"]').first().type(email);
  cy.get('[data-cy="input-password-login"]').first().type(password);
  cy.get('[data-cy="button-submit-login"]').first().click();
});

Cypress.Commands.add("clickOnComponent", (component: string, force = false) => {
  cy.get(component).click({ force: !!force });
});

Cypress.Commands.add("checkComponentIsVisible", (component: string) => {
  cy.get(component).should("be.visible");
});

Cypress.Commands.add("checkComponentIsNotVisible", (component: string) => {
  cy.get(component).should("not.be.visible");
});

Cypress.Commands.add("pageMustBe", (url: string) => {
  cy.url().should("eq", url);
});

Cypress.Commands.add(
  "verifyComponentHref",
  (component: string, href: string) => {
    cy.get(component).should("have.attr", "href", href);
  }
);

Cypress.Commands.add("closeModals", () => {
  cy.get('[data-cy="header-continue-button"]').click();
  cy.get('[data-testid="button-close-modal-cookie"]').click();
});
