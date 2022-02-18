/// <reference types = "cypress"/>

describe("Test DatePicker via webDriverUni", ()=>{

    it("Select date from datePicker",()=>{
        cy.visit("http://www.webdriveruniversity.com/");
        cy.get("#datepicker").invoke("removeAttr", 'target').click();
        cy.get("#datepicker").click();
        
        var date = new Date();
        date.setDate(date.getDate() + 320);
        
        var futureYear = date.getFullYear();
        var futureMonth = date.toLocaleString("default", {month: "long"});
        var futureDay = date.getDate();

        function selectMonthYear() {
            cy.get(".datepicker-dropdown").find(".datepicker-switch").first().then(currentDate=>{
                if(!currentDate.text().includes(futureYear)){
                    cy.get('.next').first().click();
                    selectMonthYear();
                }
            }).then(()=>{
                cy.get(".datepicker-dropdown").find(".datepicker-switch").first().then(currentDate=>{
                    if(!currentDate.text().includes(futureMonth)){
                        cy.get('.next').first().click();
                        selectMonthYear();
                    }
                }) 
            })
        }

        function selectFutureDay(){
            cy.get('[class="day"]').contains(futureDay).click();
        }
        selectMonthYear();
        selectFutureDay();
    })
})