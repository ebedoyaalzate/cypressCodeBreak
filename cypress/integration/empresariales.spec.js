describe('My first e2e testing', function() {
    /*it('Check website', function() {
        //Arrange
        // - visit some ṕlace
        cy.visit('https://example.cypress.io')

        //Act
        // Search an element & click
        cy.contains('type').click()

        //Assert
        // - Check URL
        cy.url()
            .should('include','/commands/action')
        cy.get('#email1')
            .type('jadiosa@gmail.com')
            .should('have.value','jadiosa@gmail.com')
    })   
    it('MELI test', function(){
        cy.visit('http://localhost:4200/')
        cy.contains('Estefany')
        cy.get('input')
            .type('iphone 8 plus 64gb')
            .should('have.value','iphone 8 plus 64gb')
        cy.get('button')
            .click()
        cy.contains('iPhone')

        cy.get('input')
            .clear()
            .type('Nikon D750')
            .should('have.value','Nikon D750')
        cy.get('button')
            .click()
        cy.contains('Nikon')
    }) */

    it('CodeBreaker test', function() {
        cy.visit('http://localhost:4200/')
        cy.get('.secret')
            .type('1234')
        cy.get('.btnScret')
            .click()
        cy.contains('ok, let the game begins')
        cy.get('.number')
            .type('1234')
        cy.get('.btnNumber')
            .click()
        cy.contains('XXXX')
    })
})