describe('Household module', () => {
  before(() => {
    cy.login('administrator')
    cy.visit('/')
  })

  //   it('should contain create button and list view', () => {
  //     cy.wait('@session')
  //     cy.get('[data-test-id="create"]').should('be.visible')
  //   })

  it('should open household new page', () => {
    cy.visit('/household/new')
    cy.get('input[name="referenceNo"]').type('test')
  })
})
export {}
