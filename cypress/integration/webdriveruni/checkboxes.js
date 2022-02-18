/// <reference types= "cypress"/>

describe("Verify checkboxes via webdriverUni", ()=>{
beforeEach(()=>{
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", 'target').click({force:true});
})
    it("Check and validate Checkbox", ()=>{
       
        // cy.get('#checkboxes > :nth-child(1) > input').check();
        // cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked');
        cy.get('#checkboxes > :nth-child(1) > input').as('option-1');
        cy.get('@option-1').check();
        cy.get('@option-1').check().should('be.checked');
    })

    it("Uncheck and validate Checkbox", ()=>{
                // cy.get('#checkboxes > :nth-child(1) > input').check();
        // cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked');
        cy.get(':nth-child(5) > input').as('option-3');
        cy.get('@option-3').uncheck();
        cy.get('@option-3').uncheck().should('not.be.checked');
    })

    it("Check Multiple checkboxes", ()=>{
        
        // cy.get('#checkboxes > :nth-child(1) > input').check();
        // cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked');
        cy.get("input[type='checkbox']").check(['option-1', 'option-2', 'option-3','option-4']).should('be.checked');
    })
})