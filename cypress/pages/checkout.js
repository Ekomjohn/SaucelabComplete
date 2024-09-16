class CheckOut {
    validateCheckOut(){
        cy.url().should("include", 'checkout');
    }
}
export default CheckOut;