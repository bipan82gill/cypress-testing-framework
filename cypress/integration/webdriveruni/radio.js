/// <reference types= "cypress"/>

describe("Verify Radio buttons via webdriverUni", ()=>{
before(()=>{
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", 'target').click({force:true});
} )
       it("check and validate Radio button", ()=>{
        
        cy.get('#radio-buttons').find("[type='radio']").as('radioBtn');
        cy.get('@radioBtn').first().check();
        cy.get('@radioBtn').eq(3).check();
    });

    it("check and validate state of  Radio button", ()=>{
        cy.get("[value='lettuce']").should('not.be.checked');
        cy.get("[value='pumpkin']").should('be.checked');

        cy.get("[value='lettuce']").check();
        cy.get("[value='lettuce']").should('be.checked');
        cy.get("[value='pumpkin']").should('not.be.checked');
        
        cy.get("[value='cabbage']").should('be.disabled');
    
    })
     

  
})