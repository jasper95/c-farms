import { interceptOperation } from '../utils/graphql-test-utils'

describe('Household List', () => {
  before(() => {
    // login as administrator
    cy.login('administrator')
    // Visit a route in order to allow cypress to actually set the cookie
    cy.visit('/household')
    // Wait until the intercepted request is ready
    cy.wait('@session')
    interceptOperation('HouseholdList')
  })

  it('list query should return valid response', () => {
    cy.wait('@HouseholdList')
      .its('response.body.data')
      .should('have.property', 'list')
  })
})
export {}
