/// <reference types="Cypress" />

describe("use varible in promises",()=>{
    it("Click on makeup and skincare link", ()=>{

        cy.visit("https://www.automationteststore.com/");
        cy.get('a[href*="product/category&path="]').contains("Makeup").click();
        cy.get('a[href*="product/category&path="]').contains("Skincare").click();
  
    });
    it("get the name of makeup and check with expected text", ()=>{

        cy.visit("https://www.automationteststore.com/");
        cy.get('a[href*="product/category&path="]').contains("Makeup").click();
       cy.get('h1/*.maintext').then((headerText)=>{
           const header = headerText.text()
           cy.log("text found" + header) 
       })
  
    });
    it.only("validateing the fields of contact us form", ()=>{
      
        cy.visit("https://automationteststore.com/index.php?rt=content/contact");
    // Uses cypress commands and chaining    
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name');
      
    // JQuery Approach
    cy.contains('#ContactUsFrm', 'Contact Us Form').then(text=>{
        const firstNameText = text.find('#field_11').text()
        expect(firstNameText).to.contain('First name')

        //Embedded commands closure
        cy.get('#field_11').then(fnText=>{
            cy.log(fnText.text())
            cy.log(fnText)
        })

    })

    
       
  
    });

    
})