describe('converter spec', () => {
  it('converter list and items should exist', () => {
    cy.visit('/');
    cy.get('[data-testid="converter-list"]').should('exist');
    cy.get('[data-testid="converter-item"]').should('have.length', 9);
  });

  it('converter modal should appear after item click', () => {
    cy.visit('/');
    cy.get('[data-testid="converter-item"]').first().click();
    cy.get('[data-testid="modal"]').should('exist');
    cy.get('[data-testid="modal-close-button"]').click();
    cy.get('[data-testid="converter-item"]').last().click();
    cy.get('[data-testid="modal"]').should('exist');
  });

  it('converter modal result should be calculated correctly', () => {
    cy.visit('/');
    cy.get('[data-testid="converter-item"]').first().click();
    cy.get('[data-testid="input-field"]').should('have.value', '1');
    cy.get('input[type="number"]')
      .clear()
      .type('10')
      .should('have.value', '10');
    cy.get('[data-testid="select"]').click();
    cy.get('[data-testid="select-dropdown-item"]').eq(2).click();
    cy.get('[data-testid="currency-modal-result"]').should(
      'not.contain',
      'loading...',
    );
    cy.get('[data-testid="currency-modal-result"]').should(
      'not.contain',
      'NaN',
    );
  });
});
