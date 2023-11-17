describe('Weather App Initial Load', () => {
  it('successfully loads and displays initial weather', () => {
    cy.visit('/');
    cy.contains('Weather App');
    cy.get('[data-testid="weather-temp"]').should('exist');
  });
});

describe('Forecast Display', () => {
  it('displays weather forecast for multiple days', () => {
    cy.visit('/');
    cy.get('[data-testid="forecast-container"]').should('exist');
    cy.get('[data-testid="forecast-day"]').should('have.length.at.least', 5);
  });
});

describe('Responsive Layout', () => {
  const viewports = [
    { label: 'iPhone 15 Pro', width: 390, height: 844 },
    { label: 'iPad', width: 768, height: 1024 },
    { label: 'Laptop', width: 1920, height: 1080 },
  ];

  viewports.forEach((viewport) => {
    it(`displays correctly on ${viewport.label} screen`, () => {
      cy.viewport(viewport.width, viewport.height);
      cy.visit('/');
      cy.get('[data-testid="weather-app-container"]').should('exist');
    });
  });
});
