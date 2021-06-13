

describe('My test suite',() => {
    it('Verify API wait',() => {
        //wait api
        //cy.server();
        //cy.route('GET','/entries').as('getEntry');
        //cy.visit('https://www.demoblaze.com');
        //cy.wait('@getEntry').its('status').should('eq',200);

        cy.intercept('GET','/entries').as('getEntry');
        cy.visit('https://www.demoblaze.com');
        cy.wait('@getEntry');
        cy.get('@getEntry').then(xhr => {
            expect(xhr.response.statusCode).to.equal(200);
        });
        cy.get('a#itemc').contains('Laptops').click();
      
       
     });
   
});