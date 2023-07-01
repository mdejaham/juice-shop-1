class LoginPage {

    newCustomerLinkClick() {
        cy.get('#newCustomerLink').click()
    }

    emailField() {
        cy.get('#emailControl')
    }

    passwordField() {
        cy.get('#passwordControl')
    }

    repeatPasswordField() {
        cy.get('#repeatPasswordControl')
    }

    selectQuestion7() {
        cy.get('.mat-select-placeholder').click()
        cy.get('#mat-option-7').click()
    }

    securityAnswer() {
        cy.get('#securityAnswerControl')
    }

    registerBtn() {
        cy.get('#registerButton').click()
    }
}

module.exports = LoginPage