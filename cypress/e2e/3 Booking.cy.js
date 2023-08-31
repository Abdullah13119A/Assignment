describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('https://www.booking.com/')
  })

  it('displays two todo items by default', () => {
    cy.get('span[data-testid="herobanner-title1"]').should('contain.text','Find deals for any season')
    cy.get('[aria-label="Dismiss sign-in info."]').should('be.visible').click()
    cy.get('[data-testid="destination-container"] input').should('be.visible').type('London')
    cy.get('li div div div div').contains('London').should('be.visible').click({force:true})
    cy.get('[data-testid="searchbox-dates-container"]').should('be.visible').click()
    cy.get('[aria-label="10 September 2023"]').should('be.visible').click()
    cy.get('[aria-label="12 September 2023"]').should('be.visible').click()

    cy.get('button[type="submit"]').should('be.visible').click()
  })
})
