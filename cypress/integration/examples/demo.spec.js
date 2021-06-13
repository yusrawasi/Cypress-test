import Locators from '../../pageobjects/locator';
import Assertions from '../../utility/assertions.js';

const faker = require('faker');

const locatorObject = new Locators();
const assertionObject = new Assertions();
// let email = Math.random().toString(36).substring(2,11) + "@yopmail.com";
const email = faker.internet.email();
describe('MyTestSuite', () => {
  beforeEach(() => {
    cy.visit('https://demo.opencart.com/');
  });

  it('Verify Signup', () => {

    
    cy.fixture('signup.json').then((data) => {
      locatorObject.accountButton.click();
      locatorObject.register.click();
      locatorObject.enterFirstname.type(data.fname);
      locatorObject.enterLastname.type(data.lname);
      locatorObject.enterEmail.type(email); 
      locatorObject.enterPhone.type(data.phone);
      locatorObject.enterPassword.type(data.password);
      locatorObject.confirmPassowrd.type(data.password);
      locatorObject.agree.check();
      locatorObject.continueButton.click();
      cy.title().should('eq', 'Your Account Has Been Created!');
      //locatorObject.content.should('be.visible');
      assertionObject.textVisibility;
      // locatorObject.navbar.contains('Tablets').click(); //how to call 2 functions?///explore action methods
      // cy.get('.nav').contains('Tablets').click();
      // locatorObject.navbar.then(function() {
      locatorObject.navbar.then(() => {
        locatorObject.tablets.click();
      });
      locatorObject.content.should('contain', 'Tablets');
      //locatorObject.content.should('be.visible');
      assertionObject.textVisibility;
      cy.title().should('eq', 'Tablets');
      cy.logout();
      /* locatorObject.accountButton.click();
        locatorObject.logoutButton.click();
        */
    });
  });

  it('Verify Navigation with json', () => {
    cy.loginJson('login.json');
    locatorObject.content.should('contain', 'My Account');
    locatorObject.content.should('be.visible');
    cy.title().should('eq', 'My Account');
    /*locatorObject.navbar.then(() => {
      locatorObject.software.click();
    }); */
    locatorObject.navbar.within(() => {
      locatorObject.software.click(); // 
    });
    //locatorObject.content.should('contain', 'Software');
    assertionObject.textVisibility;
    cy.title().should('eq', 'Software');
  });

  it('Verify Navigation with username & password', () => {

    cy.fixture("login.json").then((data) => {
      cy.login(data.email,data.password);
      locatorObject.content.should('contain', 'My Account');
      locatorObject.content.should('be.visible');
      cy.title().should('eq', 'My Account');
      locatorObject.navbar.within(() => {
      locatorObject.software.click(); 
      });
      locatorObject.content.should('contain', 'Software');
      cy.title().should('eq', 'Software');
    });

  });


  
  /*
   it('Verify Login', () => {
        cy.fixture("login.json").then(function(data){

        locatorObject.accountButton.click();
        locatorObject.login.click();
        locatorObject.enterEmail.type(email);
        locatorObject.enterPassword.type(data.password);
        locatorObject.loginButton.click();
        locatorObject.content.should("contain","My Account");
        locatorObject.content.should("be.visible");
        cy.title().should('eq','My Account');

        locatorObject.navbar.contains('Software').click();
        locatorObject.content.should("contain","Software");
        locatorObject.content.should("be.visible");
        cy.title().should('eq','Software');

        });

    });    */

  /* it('Verify title of the page', function(){
        //expect(true).to.equal(true)
        cy.visit('https://demo.nopcommerce.com/')
        cy.title().should('eq','nopCommerce demo store')
        var name= cy.title()
        expect(name).to.not.equal('Jane')
    }); */
});
