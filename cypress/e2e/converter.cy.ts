describe('converter spec', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.intercept('GET', 'https://api.currencyapi.com/v3/latest*', {
      statusCode: 200,
      fixture: 'currencies.json',
    }).as('getCurrencies');
  });

  it('converter list and items should exist', () => {
    cy.get('[data-testid="converter-list"]').should('exist');
    cy.get('[data-testid="converter-item"]').should('have.length', 9);
  });

  it('should display correct titles for converter items', () => {
    cy.fixture('currencies.json').then((currencyData) => {
      cy.get('[data-testid="converter-item"]').each(($item, index) => {
        const codes = Object.keys(currencyData.data)[index];
        const { title } = currencyData.data[codes];

        cy.get('[data-testid="converter-item-title"]')
          .eq(index)
          .should('have.text', title);
      });
    });

    cy.get('[data-testid="converter-list"]').should('exist');
    cy.get('[data-testid="converter-item"]').should('have.length', 9);
  });

  it('converter modal should appear after item click', () => {
    cy.get('[data-testid="converter-item"]').first().click();
    cy.get('[data-testid="modal"]').should('exist');
    cy.get('[data-testid="modal-close-button"]').click();
    cy.get('[data-testid="converter-item"]').last().click();
    cy.get('[data-testid="modal"]').should('exist');
  });

  it('converter modal result should be calculated correctly', () => {
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
