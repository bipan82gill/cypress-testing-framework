/// <reference types="Cypress" />
describe("inspect the product for testing", ()=>{
    it("inspect  a single product", ()=>{
        cy.visit("https://www.automationteststore.com/");
        cy.get('.prdocutname').contains("Skinsheen Bronzer Stick").click().then(function(pName){
           cy.log("product is clicked"+ pName.text()) 
        });
    })
});