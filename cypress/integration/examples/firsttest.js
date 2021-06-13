describe('MyTestSuite', function(){

    it('Verify title of the page', function(){
        //expect(true).to.equal(true)
        cy.visit('https://demo.nopcommerce.com/')
        cy.title().should('eq','nopCommerce demo store')
        var name= cy.title()
        expect(name).to.not.equal('Jane')

    })

    /* it('Verify title of the page', function(){

    cy.fixture("url.json").then(function(data)
     { cy.visit(data.ProdURL);
    
      });

    })
    */


})