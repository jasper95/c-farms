describe('Cypress login', () => {
  it('should provide a valid session', () => {
    // login as administrator
    cy.login('administrator')
    // Visit a route in order to allow cypress to actually set the cookie
    cy.visit('/household')
    // Wait until the intercepted request is ready
    cy.wait('@session')
  })
})
export {}
