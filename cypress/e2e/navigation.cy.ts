describe('navigation spec', () => {
  it('navigation bar should exist', () => {
    cy.visit('/');
    cy.get('[data-testid="navigation-bar"]').should('exist');
  });

  it('navigation links should exist', () => {
    cy.visit('/');
    cy.get('[data-testid="navigation-link-Home"]').should('exist');
    cy.get('[data-testid="navigation-link-Timeline"]').should('exist');
    cy.get('[data-testid="navigation-link-Bank card"]').should('exist');
  });

  it('navigation links should work', () => {
    cy.visit('/');
    cy.get('[data-testid="navigation-link-Home"]').click();
    cy.url().should('eq', 'http://localhost:8080/#/');
    cy.get('[data-testid="navigation-link-Timeline"]').click();
    cy.url().should('eq', 'http://localhost:8080/#/timeline');
    cy.get('[data-testid="navigation-link-Bank card"]').click();
    cy.url().should('eq', 'http://localhost:8080/#/bank-card');
  });
});
