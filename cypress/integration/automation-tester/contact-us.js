/// <reference types="Cypress" />
describe("test contact us form via web driver uni", ()=>{
    before(()=>{
        cy.fixture("userDetails").as("user");
    })
    it("should be able to able to submit a successful submission via contact us form", ()=>{
        cy.visit("https://www.automationteststore.com/");
        cy.get('a[href$="contact"]').click();
        cy.get("@user").then((user)=>{
            cy.get('#ContactUsFrm_first_name').type(user.first_name);
            cy.get('#ContactUsFrm_email').type(user.email);
        })
        
        cy.get('#ContactUsFrm_enquiry').type(" i am tester");
        cy.get('button[title="Submit"]').click();
        cy.get('.mb40 > :nth-child(3)').should('have.text','Your enquiry has been successfully sent to the store owner!')
    });

    it("should not be able to able to submit a successful submission via contact us form as all fileds are required", ()=>{
        // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        // cy.get('[name="first_name"]').type("Bipan");
        // cy.get('[name="last_name"]').type("Gill");
        // cy.get('textarea.feedback-input').type("i am tewster");
        // cy.get('[type="submit"]').click();
     
    });
})