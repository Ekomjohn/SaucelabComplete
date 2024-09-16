class Inventory {
    clickHamburgerMenu() {
        cy.wait(2000)
        cy.xpath("//button[@id='react-burger-menu-btn']").click({force: true});
    }
    clickLockout() {
        cy.wait(2000)
        cy.get("#logout_sidebar_link").click();
        }
        selectItem(){
            cy.xpath("//div[normalize-space()='Sauce Labs Backpack']").should('exist');
            cy.xpath("//button[@id='add-to-cart-sauce-labs-backpack']").click();
        }
        clickCartIcon(){
            cy.xpath("//span[@class='shopping_cart_badge']").click();
        }
    }
export default Inventory;