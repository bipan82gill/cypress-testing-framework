/// <reference types="Cypress" />
describe("Handling data via webdriverUni", () => {
    beforeEach(() => {
      cy.visit("http://webdriveruniversity.com/");
      cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
    });
    it("Calculate and assert the total age of all users", () => {
        var userdetails =[];
        var numb = 0;
        cy.get('#thumbnail-1 td').each(($el, index, $list)=>{
            userdetails[index]= $el.text();
      }).then(()=>{
          var i;
          for(i=0; i<userdetails.length; i++){
            if(Number(userdetails[i])){
                numb += Number(userdetails[i])
            }
          }
          cy.log("Found total age:" + numb)
          expect(numb).to.eq(322)
      });
    });

    it.only("Calculate and assert age of a given user based on the last name", ()=>{
        cy.get("#thumbnail-1 tr  td:nth-child(2)").each(($el, index, $list)=>{
            const text = $el.text();
            if(text.includes("Woods")){
                cy.get("#thumbnail-1 tr  td:nth-child(2)").eq(index).next().then(function(age){
                    const userAge = age.text();
                    expect(userAge).to.equal("80");
                })
            }
        })
        })
    })

