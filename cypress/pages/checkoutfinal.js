class CheckOutFinal {
validateOverview () {
cy.get(".title").should('be.visible', "Overview");
}
validateCartcontent () {
    cy.get(".inventory_item_name").should('contain', "Sauce Labs Backpack");
}
validatePrice () {
    cy.get(".inventory_item_price").should('have.text', "$29.99");
}
clickFinishBtn () {
    cy.get("#finish").click();
}

}
export default CheckOutFinal;