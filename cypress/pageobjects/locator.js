class Locators{

    get accountButton(){
        return cy.get('[title="My Account"]');
    }

    get loginButton(){
        return  cy.get("[value='Login']");
    }
    
    get enterEmail(){
        return cy.get("#input-email");
    }
    get enterPassword(){
        return cy.get("#input-password");
    }
    get confirmPassowrd(){
        return cy.get("#input-confirm");
    }
    get enterPhone(){
        return cy.get("#input-telephone");
    }
    get enterFirstname(){
        return cy.get("#input-firstname");
    }
    get enterLastname(){
        return cy.get("#input-lastname");
    }

    get logoutButton(){
        return cy.contains("Logout");
    }

    get navbar(){
        return cy.get('.nav');
    }

    get content(){
        return cy.get("#content");
    }

    get agree(){
        return cy.get("[name='agree']");
    }

    get continueButton(){
        return cy.get("[value='Continue']");
    }

    get login(){
        return cy.contains("Login");
    }

    get register(){
        return  cy.contains("Register");
    }

    get tablets(){

        return cy.contains('Tablets');
    }

    get software(){
        return cy.contains('Software');
    }
    

    
}

export default Locators;