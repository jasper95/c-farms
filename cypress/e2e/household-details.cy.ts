import { interceptOperation } from '../utils/graphql-test-utils'
import { faker } from '@faker-js/faker'

describe('Household Details', () => {
  before(() => {
    cy.login('encoder')
    cy.visit('/household')
    interceptOperation('HouseholdViewList')
    cy.wait('@HouseholdViewList')
  })

  it('displays household details', () => {
    cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(5)').click()
    cy.get(
      '.MuiList-root > .MuiTypography-inherit > .MuiListItemText-root > .MuiTypography-root'
    ).click()
    interceptOperation('HouseholdDetails')
    cy.wait('@HouseholdDetails').then((response) => {
      expect(response.response.body.data.details).to.have.property('id')
    })
  })

  it('updates household', () => {
    cy.get('input[name="firstName"]')
      .type('{selectAll}')
      .type('{backspace}')
      .type(faker.name.firstName())
    cy.get('button').contains('Save').click()
    cy.get('.justify-self-end').should('be.visible')
    // cy.get('.MuiAlert-message').contains('Household successfully updated')
  })
})
export {}
