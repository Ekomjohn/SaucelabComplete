class CartItems {
    validateAvailableItem() {
        cy.wait(2000)
        cy.url().should("include", 'cart');
        cy.xpath("//div[@class='inventory_item_name']").should("exist");
    }
    clickCheckOutBtn() {
        cy.xpath("//button[@id='checkout']").click();
    }
}
export default CartItems;