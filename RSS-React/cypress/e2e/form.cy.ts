/// <reference types="cypress" />

describe('form spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5000/form');
  });

  it('displays form page', () => {
    cy.contains('Form').should('be.visible');
    cy.contains('First name').should('be.visible');
    cy.contains('Last name').should('be.visible');
    cy.contains('Date of birth').should('be.visible');
    cy.contains('Country').should('be.visible');
  });
});
