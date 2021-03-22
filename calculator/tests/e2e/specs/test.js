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
    cy.get('#operator_add').click();
    cy.get('#number5').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '6')
  })

  it('multiple operations can chain together', () => {
    cy.get('#number1').click();
    cy.get('#operator_add').click();
    cy.get('#number5').click();
    cy.get('#operator_subtract').click();
    cy.get('#number2').click();
    cy.get('#operator_multiply').click();
    cy.get('#number7').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '28')
  })

  it('should output show positive number', () => {
    cy.get('#number5').click();
    cy.get('.display').should('contain', '5');
  })

  it('should output show negative number', () => {
    cy.get('#number5').click();
    cy.get('#operator_subtract').click();
    cy.get('#number1').click();
    cy.get('#number5').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '-10')
  })

  it('should output show decimals number', () => {
    cy.get('#number3').click();
    cy.get('#operator_divide').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '1.5')
  })

  it('should output show very large number', () => {
    cy.get('#number1').click();
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('#number4').click();
    cy.get('#operator_multiply').click();
    cy.get('#number5').click();
    cy.get('#number6').click();
    cy.get('#number7').click();
    cy.get('#operator_multiply').click();
    cy.get('#number8').click();
    cy.get('#number9').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '62271342')
  })

  it('should display error when divide by 0', () => {
    cy.get('#number5').click();
    cy.get('#number6').click();
    cy.get('#operator_divide').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', 'Error')
  })

})