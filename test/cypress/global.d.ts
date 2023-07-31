/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    clickOnComponent(component: string, force?: boolean): Chainable<void>;
    checkComponentIsVisible(component: string): Chainable<void>;
    checkComponentIsNotVisible(component: string): Chainable<void>;
    pageMustBe(url: string): Chainable<void>;
    verifyComponentHref(component: string, href: string): Chainable<void>;
  }
}
