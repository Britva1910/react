/// <reference types="cypress" />
describe('MainPage component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5000');
  });

  it('displays search bar', () => {
    cy.get('input').should('have.value', '');
    cy.get('input').type('test').should('have.value', 'test');
  });

  it('displays search button', () => {
    cy.contains('Search').should('be.visible');
  });

  it('not displays error', () => {
    cy.contains('Ooops .... the server doesn`t seem to want to response').should('not.exist');
  });

  it('test home link', () => {
    cy.contains('Main page').click();
    cy.url().should('include', '/');
  });

  it('test about link', () => {
    cy.contains('About us').click();
    cy.url().should('include', '/about-us');
  });

  it('test form link', () => {
    cy.contains('Form').click();
    cy.url().should('include', '/form');
  });
});
