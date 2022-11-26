describe('Cypress login', () => {
  it('should provide a valid session', () => {
    // Call your custom cypress command
    cy.login()
    // Visit a route in order to allow cypress to actually set the cookie
    cy.visit('/household')
    // Wait until the intercepted request is ready
    cy.wait('@session')
  })
})
export {}
