/// <reference types="cypress" />

import Login from "../pages/login";
import Inventory from "../pages/inventory";
import CartItems from "../pages/cartitems";
import CheckOut from "../pages/checkout";
import CheckOutInfo from "../pages/checkoutinfo";
import CheckOutFinal from "../pages/checkoutfinal";
import Complete from "../pages/completepage";

describe("Saucedemo lab page object model test", () => { 
    const login = new Login();
    const inventory = new Inventory();
    const cartItems = new CartItems();
    const checkOut = new CheckOut();
    const checkOutInfo = new CheckOutInfo();
    const checkOutFinal = new CheckOutFinal();
    const complete = new Complete();
    
it("validate successful POM login", () => { 
   
    login.enterUsername(); 
    login.enterPassword();
    login.clickLoginButton();
    inventory.clickHamburgerMenu();
    inventory.clickLockout();
});
 it("Add items to the cart and checkout", ()=> {
    
    login.enterUsername(); 
    login.enterPassword();
    login.clickLoginButton();
    inventory.selectItem();
    inventory.clickCartIcon();
    cartItems.validateAvailableItem();
    cartItems.clickCheckOutBtn();
    checkOut.validateCheckOut(); 
    
 });

 it("Add first name, last name, zip code and continue to checkout", ()=> {

    login.enterUsername(); 
    login.enterPassword();
    login.clickLoginButton();
    inventory.selectItem();
    inventory.clickCartIcon();
    cartItems.validateAvailableItem();
    cartItems.clickCheckOutBtn();
    checkOut.validateCheckOut();
    checkOutInfo.validateYourInfor();
    checkOutInfo.enterFirstName ();
    checkOutInfo.enterLastName ();
    checkOutInfo.enterZipCode ();
    checkOutInfo.clickContinueButton ();
 });

 it("Finish transaction", ()=> {
   
    login.enterUsername(); 
    login.enterPassword();
    login.clickLoginButton();
    inventory.selectItem();
    inventory.clickCartIcon();
    cartItems.validateAvailableItem();
    cartItems.clickCheckOutBtn();
    checkOut.validateCheckOut();
    checkOutInfo.validateYourInfor();
    checkOutInfo.enterFirstName ();
    checkOutInfo.enterLastName ();
    checkOutInfo.enterZipCode ();
    checkOutInfo.clickContinueButton ();
    checkOutFinal.validateOverview ();
    checkOutFinal.validateCartcontent ();
    checkOutFinal.validatePrice ();
    checkOutFinal.clickFinishBtn ();
    complete.validateThankYouMessage ();
 });
});