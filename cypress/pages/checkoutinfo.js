class CheckOutInfo {
    validateYourInfor() {
        cy.get("#checkout_info_container").should('exist', "Your Information");
    }
    enterFirstName () {
        cy.get("#first-name").type('Ekom');
    }
    enterLastName () {
        cy.get("#last-name").type('John');
    }
    enterZipCode () {
        cy.get("#postal-code").type('123456');
        cy.wait(2000)
    }
    clickContinueButton () {
        cy.get("#continue").click();
    }
}
export default CheckOutInfo;