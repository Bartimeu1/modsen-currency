describe('theme toggle spec', () => {
  it('toggle theme button should exist', () => {
    cy.visit('/');
    cy.get('[data-testid="toggle-theme-button"]').should('exist');
  });

  it('base theme should be dark', () => {
    cy.visit('/');
    cy.window()
      .its('Cypress')
      .its('store')
      .invoke('getState')
      .its('theme.currentTheme')
      .should('eq', 'dark');
  });

  it('theme should toggle after button click', () => {
    cy.visit('/');
    cy.get('[data-testid="toggle-theme-button"]').click();
    cy.window()
      .its('Cypress')
      .its('store')
      .invoke('getState')
      .its('theme.currentTheme')
      .should('eq', 'light');
    cy.get('[data-testid="toggle-theme-button"]').click();
    cy.window()
      .its('Cypress')
      .its('store')
      .invoke('getState')
      .its('theme.currentTheme')
      .should('eq', 'dark');
  });

  it('should change background color after theme toggle', () => {
    cy.visit('/');
    cy.get('[data-testid="toggle-theme-button"]').click();
    cy.get('body')
      .should('have.css', 'background-color')
      .and('eq', 'rgb(245, 245, 245)');
    cy.get('[data-testid="toggle-theme-button"]').click();
    cy.get('body').should('have.css', 'background-color').and('eq', 'rgb(3, 3, 4)');
  });
});
