/// <reference types="Cypress" />
describe("Cypress web security", ()=>{
    it("validate visiting two different domains ", ()=>{
      cy.visit("http://www.webdriveruniversity.com/")
      cy.visit("https://www.automationteststore.com/");
    });

    it.only("validate visiting two different domains via user action", ()=>{
        cy.visit("http://www.webdriveruniversity.com/");
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click(); 
     
    });
})