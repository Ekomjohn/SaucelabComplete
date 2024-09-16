
class Login { 
    enterUsername() {
        cy.get(".login_logo").should('be.visible');
        cy.get("input[type='text']").type("standard_user")
}
enterPassword() {
    cy.get("input[type='password']").type("secret_sauce")
}
clickLoginButton() {
    cy.get("input[type='submit']").click();
    cy. wait(2000);
    cy.url().should('include', "inventory"); 
}
}
export default Login;