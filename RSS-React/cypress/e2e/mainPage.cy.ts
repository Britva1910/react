/// <reference types="cypress" />
describe('MainPage component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5000');
    cy.viewport(1024, 1000);
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

  /* detail informations */

  it('show detail information', () => {
    cy.get('input').type('cars').get('button').click();
    cy.get('._wrapper_gw4a2_1').first().click();
    cy.wait(1000);
    cy.contains('Publication date: 2017-04-14T17:20:15Z').should('exist');
    cy.contains('Tags:').should('exist');
  });

  it('detail information will be closed after clicking cross button', () => {
    cy.get('input').type('cars').get('button').click();
    cy.get('._wrapper_gw4a2_1').first().click();
    cy.wait(1000);
    cy.get('._btn__close_pvwkq_36').click();
    cy.contains('Publication date: 2017-04-14T17:20:15Z').should('not.exist');
    cy.contains('Tags:').should('not.exist');
  });
});
