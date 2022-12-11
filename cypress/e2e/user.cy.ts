import { interceptOperation } from '../utils/graphql-test-utils'
import { faker } from '@faker-js/faker'

describe('Encoder access User Page', () => {
  it('should display access denied page', () => {
    cy.login('encoder')
    cy.visit('/user')
    cy.get('.MuiTypography-h3').contains('Permission Denied')
  })
})

describe('Administrator access User Page', () => {
  it('should display user list', () => {
    cy.login('administrator')
    cy.visit('/user')
    cy.intercept('https://hasura-a08a.onrender.com/v1/graphql').as('UserList')
    cy.wait('@UserList')
    cy.get(
      '.MuiTableBody-root > :nth-child(1) > :nth-child(5) > .MuiButtonBase-root'
    ).click()
    cy.get(
      '.MuiList-root > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root'
    ).click()
    cy.get('[name="active"]').click()
    cy.get('button').contains('Continue').should('be.visible').click()
  })
})
export {}
