/// <reference types= "cypress"/>

describe("Test mouse actions", ()=>{

    it("Scroll elements into view ", ()=>{
     cy.visit("http://www.webdriveruniversity.com/");
     cy.get("#actions").scrollIntoView().invoke("removeAttr", 'target').click({force:true});
    
 });

  it("Drag and drop the element", ()=>{
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#actions").scrollIntoView().invoke("removeAttr", 'target').click({force:true});
    cy.get("#draggable").trigger("mousedown",{ which : 1 });
    cy.get("#droppable").trigger("mousemove").trigger("mouseup", {force:true})
   
});

  it("I should be able to double click the element", ()=>{
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#actions").scrollIntoView().invoke("removeAttr", 'target').click({force:true});
    cy.get("#double-click").dblclick();
   
});
it.only("I should be able to click and hold down the item", ()=>{
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#actions").scrollIntoView().invoke("removeAttr", 'target').click({force:true});
    cy.get("#click-box").trigger("mousedown", {which: 1}).then(($element)=>{
        expect($element).to.have.css("background-color","rgb(0, 255, 0)")
    })
   
});


})