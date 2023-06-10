/* eslint-disable no-unused-vars */
/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    loginByPage(email: string, password: string): Chainable<void>;
    loginByModal(email: string, password: string): Chainable<void>;
    clickOnComponent(component: string, force?: boolean): Chainable<void>;
    checkComponentIsVisible(component: string): Chainable<void>;
    checkComponentIsNotVisible(component: string): Chainable<void>;
    pageMustBe(url: string): Chainable<void>;
    verifyComponentHref(component: string, href: string): Chainable<void>;
    closeModals(): Chainable<void>;
  }
}
