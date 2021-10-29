/// <reference types="cypress" />

describe('menu app', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('http://localhost:3000');
  });

  it('should display Menu heading', () => {
    cy.findByText('Menu');
  });

  it('should find menu items', () => {
    cy.findByText('Chicken Tikka Masala');
  });

  it.only('should support adding a menu item and displaying it on the home page', () => {
    cy.findByText('Admin').click();
    cy.findByLabelText('Name').type('Glazed donut');
    cy.findByLabelText('Description').type('Tasty');
    cy.findByLabelText('Price').type('1');
    cy.findByRole('button', {name: 'Save Menu Item'}).click();
    cy.url().should('eq', 'http://localhost:3000/');
    cy.findAllByText('Glazed donut');
  });
});
