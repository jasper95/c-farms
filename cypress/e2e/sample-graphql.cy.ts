import { interceptOperation } from '../utils/graphql-test-utils'

context('Tests', () => {
  beforeEach(() => {
    cy.login('administrator')
    cy.visit('/household')
    interceptOperation('HouseholdList')
  })

  it('displays household list', () => {
    cy.wait('@HouseholdList')
      .its('response.body.data')
      .should('have.property', 'list')
  })
})
