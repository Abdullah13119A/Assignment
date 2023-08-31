describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('https://m.exeter.ac.uk/acceptCookies')
  })

  it('displays two todo items by default', () => {
  cy.url().should('include','/acceptCookies')
    cy.get('flt-glass-pane')
      .shadow()
      .within(() => { 
      // Click on Accept button
        cy.get('canvas').should('be.visible').click(420,490,{force: true})
        cy.wait(1000)

        cy.get('canvas').should('be.visible').click(420,490,{force: true}) 
        
        
        cy.get('canvas').should('be.visible').click(410,460,{force: true}) 
        
        cy.wait(2000)
        
        cy.get('canvas').should('be.visible').click(360,440,{force: true})   
        cy.wait(2000)

        cy.get('canvas').should('be.visible').click(410,510,{force: true}) 
        
      })
  })
})
