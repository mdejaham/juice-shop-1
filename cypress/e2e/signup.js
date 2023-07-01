/// <reference types="cypress"/>
import HomePage from "../pages/homePage"
import LoginPage from "../pages/loginPage";



describe ("Inscription", () => {
    const homePage = new HomePage();
    const loginPage = new LoginPage();
    let randomString = Math.random().toString(36).substring(2);
    const email = "auto_" + randomString + randomString + "@gmail.com";
    const password = "Marole9578"

    it ("Remplir le formulaire d'inscription", () => {
        homePage.visitHomePage();
        homePage.closeDialog();
        homePage.goToLoginPage();
        cy.wait(5000)
        loginPage.newCustomerLinkClick();
        cy.get('#emailControl').type(email)
        cy.get('#passwordControl').type(password)
        cy.get('#repeatPasswordControl').type(password)
        loginPage.selectQuestion7()
        cy.get('#securityAnswerControl').type('bouroubi')
        loginPage.registerBtn()




    })
})