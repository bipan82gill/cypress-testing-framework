/// <reference types="Cypress" />

describe("iterate over all hair care products",()=>{
    beforeEach(()=>{
        cy.visit("https://www.automationteststore.com/");
        cy.get('a[href*="product/category&path="]').contains("Hair Care").click();
    })
    it("display index of all haircare products", ()=>{ 
        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list)=>{
            cy.log("Index: " + index + ":" + $el.text())
        });
  
    });

    
    it("add specific product to shopping cart", ()=>{
        cy.selectProduct("Curls to straight Shampoo")
       })

    it("add  Another specific product to shopping cart", ()=>{
        cy.selectProduct("Seaweed Conditioner")
       });

    it("add  Another specific product2 to shopping cart", ()=>{
        cy.selectProduct("Eau Parfumee au The Vert Shampoo")
       })
  
    });
    

    