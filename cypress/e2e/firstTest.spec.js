/// <reference types="cypress" />

describe('First test suite', () =>{
    it('first test', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        // by Tag Name
        cy.get('input')

        //by ID
        cy.get('#inputEmail1')

        //by class
        cy.get('.input-full-width')

        //by Attribute name
        cy.get('[fullwidth]')

        //by Attribute and value
        cy.get('[placeholder="Email"]')

        //by entire class value
        cy.get('[class="input-full-width size-medium shape-rectangle"]')

        //by two attributes
        cy.get('[placeholder="Email"][fullwidth]')

        //by tag, attribute, id and class
        cy.get('input[placeholder="Email"]#inputEmail1')

        //by cypress test ID
        cy.get('[data-cy="imputEmail1"]')

    })
})
