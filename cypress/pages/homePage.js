class HomePage {

    visitHomePage() {

        cy.visit("http://localhost:3000/#/");
    }

    closeDialog() {
        cy.get('.close-dialog').click();
    }

    goToLoginPage() {
        cy.get('#navbarAccount').click();
        cy.get('#navbarLoginButton').click();
    }




}

module.exports = HomePage