// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/', () => {

    })
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('number buttons update running total display', () => {
    cy.get('#number4').click();
    cy.get('#number5').click();
    cy.get('#number7').click();
    cy.get('.display').should('contain', '457')
  })

  it('arithmetic operations update display with result', () => {
    cy.get('#number1').click();
    cy.get('#operator_add').click()
    cy.get('#number5').click();
    cy.get('#operator_equals').click()
    cy.get('.display').should('contain', '6')
  })

  it('multiple operations can chain together', () => {
    cy.get('#number1').click();
    cy.get('#operator_add').click()
    cy.get('#number5').click();
    cy.get('#operator_subtract').click()
    cy.get('#number2').click();
    cy.get('#operator_multiply').click()
    cy.get('#number7').click();
    cy.get('#operator_equals').click()
    cy.get('.display').should('contain', '28')
  })

  xit('', () => {

  })

  xit('', () => {

  })
})


// Do the number buttons update the display of the running total?

// Do the arithmetical operations update the display with the result of the operation?

// Can multiple operations be chained together?

// Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?

// What does the code do in exceptional circumstances? Specifically, if you divide by zero, what is the effect? Write a test to describe what you'd prefer to happen, and then correct the code to make that test pass (you will need to modify the Calculator model to meet this requirement).