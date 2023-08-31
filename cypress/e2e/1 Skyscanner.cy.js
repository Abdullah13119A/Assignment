describe('SkyScanners-', () => {
  beforeEach(() => {
    cy.visit('https://www.skyscanner.net/')
  })

  it('should search a flight', () => {
    cy.get('input[aria-controls="originInput-menu"]').should('be.visible').type('Lahore (LHE)')
    cy.get("section[id='LHE']").should('be.visible').click()

    cy.get('input[aria-controls="destinationInput-menu"]').should('be.visible').type('Spain (ES)')
    cy.get("section[id='ES']").should('be.visible').click()

    cy.get('[aria-label="September"] button[aria-label="Saturday, 2 September 2023. Select as departure date"]').should('be.visible').click()
    cy.get('[data-testid="desktop-cta"]').should('be.visible').click()

    cy.get('[data-testid="desktop-travellerselector"] button').contains('Search').click()
  })
})
