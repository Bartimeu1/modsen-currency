describe('chart spec', () => {
  it('chart should exist', () => {
    cy.visit('http://localhost:8080/#/timeline');
    cy.get('[data-testid="chart-wrapper"]').should('exist');
    cy.get('[data-testid="chart-button-generate"]').should('exist');
    cy.get('[data-testid="chart-button-change"]').should('exist');
    cy.get('[data-testid="chart-button-reset"]').should('exist');
  });

  it('chart should reset and generate values', () => {
    cy.visit('http://localhost:8080/#/timeline');
    cy.get('[data-testid="chart-button-generate"]').click();
    cy.window()
      .its('Cypress')
      .its('store')
      .invoke('getState')
      .its('chart.chartData.USD.data')
      .should('not.deep.equal', []);
    cy.get('[data-testid="chart-button-reset"]').click();
    cy.window()
      .its('Cypress')
      .its('store')
      .invoke('getState')
      .its('chart.chartData.USD.data')
      .should('deep.equal', []);
  });

  it('chart select should change target currency', () => {
    cy.visit('http://localhost:8080/#/timeline');
    cy.get('[data-testid="select"]').click();
    cy.get('[data-testid="select-dropdown-item"]').eq(2).click();
    cy.window()
      .its('Cypress')
      .its('store')
      .invoke('getState')
      .its('chart.currentCurrency')
      .should('eq', 'JPY');
  });

  it('chart should change values', () => {
    cy.visit('http://localhost:8080/#/timeline');
    cy.get('[data-testid="chart-button-generate"]').click();
    cy.get('[data-testid="chart-button-change"]').click();
    cy.window()
      .its('Cypress')
      .its('store')
      .invoke('getState')
      .its('chart.chartData.USD.data')
      .then((data) => {
        const originalValue = data[0].y;
        cy.get('[data-testid="chart-change-value"]').should('exist').click();
        cy.window()
          .its('Cypress')
          .its('store')
          .invoke('getState')
          .its('chart.chartData.USD.data')
          .then((updatedData) => {
            expect(updatedData[0].y).not.to.equal(originalValue);
          });
      });
  });
});
