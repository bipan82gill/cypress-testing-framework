import Homepage_PO from '../../support/pageObjects/webdriver-uni/Homepage_PO';
import Contact_Us_PO from '../../support/pageObjects/webdriver-uni/Contact_Us_PO';

/// <reference types="Cypress" />
describe("test contact us form via web driver uni", ()=>{
    before(()=>{
        cy.fixture("example").then(function(data){
            // this.data = data;
            globalThis.data = data;
        })
    })
    beforeEach(()=>{
        const homepage_PO = new Homepage_PO();
        homepage_PO.visitHomePage;
        homepage_PO.clickOn_ContactUs_Button;
        

    })
    it("should be able to able to submit a successful submission via contact us form", ()=>{
  
       
        cy.document().should('have.property','charset').and('eq', 'UTF-8');
        // cy.title().should('include','WebDriver | Contact Us');
        // cy.url().should('include','contactus');
        
        const contact_Us_PO = new Contact_Us_PO();
        contact_Us_PO.contactForm_Submission(data.firstName, data.lastName," ", "i am tewster", 'h1', 'Thank You for your Message!');
    });

    it("should not be able to able to submit a successful submission via contact us form as all fileds are required", ()=>{
       
        cy.visit("http://www.webdriveruniversity.com/");
        cy.get("#contact-us").invoke('removeAttr','target').click({force:true});
        
        const contact_Us_PO = new Contact_Us_PO();
        cy.webdriverUni_ContactUsForm_submission(Cypress.env("first_name"), data.last_name," ", "i am tewster", 'body', 'Error: Invalid email address')
    });
})