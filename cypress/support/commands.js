// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import Locators from '../pageobjects/locator.js';

const locatorObject = new Locators();

Cypress.Commands.add('loginJson', (data1) => {

  cy.fixture(data1).then((data) => {
    locatorObject.accountButton.click();
    locatorObject.login.click();
    locatorObject.enterEmail.type(data.email);
    locatorObject.enterPassword.type(data.password);
    locatorObject.loginButton.click();
  });
  
});

Cypress.Commands.add('login', (email, password) => {
      locatorObject.accountButton.click();
      locatorObject.login.click();
      locatorObject.enterEmail.type(email);
      locatorObject.enterPassword.type(password);
      locatorObject.loginButton.click();
    
  });

Cypress.Commands.add('logout', () => {
  locatorObject.accountButton.click();
  locatorObject.logoutButton.click();
});
