class LoginPage {
    clickLoginBtn(){
        cy.wait(4000)
        cy.xpath("//a[normalize-space()='Login or register']").click()
    }
    enterUsername(){
        cy.wait(4000)
        cy.xpath("//input[@id='loginFrm_loginname']").type("idiokudo");
    }
    enterPassword(){
        cy.get("#loginFrm_password").type("admin123");
    }
    clickLogin(){
        cy.get("button[title='Login']").click();
    }
}
export default LoginPage;