class Complete {
    validateThankYouMessage () {
        cy.get(".complete-header").should('have.text',"Thank you for your order!");
        cy.get(".complete-text").should('exist',"Your order has been dispatched, and will arrive just as fast as the pony can get there!");
    }
}
export default Complete;