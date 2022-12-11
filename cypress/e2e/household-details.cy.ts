import { interceptOperation } from '../utils/graphql-test-utils'
import { faker } from '@faker-js/faker'

describe('Household Details', () => {
  before(() => {
    cy.login('administrator')
    cy.visit('/household')
    cy.intercept('https://hasura-a08a.onrender.com/v1/graphql').as(
      'HouseholdList'
    )
    cy.wait('@HouseholdList')
    cy.get(
      '.MuiTableBody-root > :nth-child(1) > :nth-child(4) > .MuiButtonBase-root'
    ).click()
    cy.get(
      '.MuiList-root > .MuiTypography-inherit > .MuiListItemText-root > .MuiTypography-root'
    ).click()
  })

  it('displays other details tab', () => {
    cy.get('input[name="firstName"]')
      .type('{selectAll}')
      .type('{backspace}')
      .type('Sample')
    cy.get('button').contains('Save').click()
    cy.get('.justify-self-end').should('be.visible')
    cy.visit('/household/9b967e17-536f-48b3-814e-3b0d77863660/secondary')
    cy.get('button').contains('Save').should('be.disabled')
    cy.get('input[name="maleCount"]').type('{selectAll}{backspace}').type('2')
    cy.get('input[name="femaleCount"]').type('{selectAll}{backspace}').type('3')
    cy.get('button').contains('Save').should('be.enabled').click()
  })
})
export {}
