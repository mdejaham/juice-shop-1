/// <reference types="cypress"/>
import HomePage from "../pages/homePage"
import LoginPage from "../pages/loginPage";

const homePage = new HomePage();
const loginPage = new LoginPage();
const email = "malik@gmail.com"

describe ("Inscription", () => {
    it ("Inscription utilisateur", () => {
        homePage.visitHomePage();
        homePage.closeDialog();
        homePage.goToLoginPage();
        cy.wait(5000)
        loginPage.newCustomerLinkClick();
        cy.get('#emailControl').type("malik@gmail.com")
        cy.get('#passwordControl').type('Marole9578')
        cy.get('#repeatPasswordControl').type('Marole9578')
        loginPage.selectQuestion7()
        cy.get('#securityAnswerControl').type('bouroubi')
        loginPage.registerBtn()




    })
})