/// <reference types="cypress" />
const RANDOM_URL = 'asfdasfdsf';

describe('not found page', () => {
  beforeEach(() => {
    cy.visit(`http://localhost:5000/${RANDOM_URL}`);
  });

  it('displays 404 page', () => {
    cy.contains('Ooops...').should('be.visible');
    cy.contains('404').should('be.visible');
    cy.contains('Main page').should('be.visible');
    cy.contains('About us').should('be.visible');
    cy.contains('Form').should('be.visible');
  });
});
