import { interceptOperation } from '../utils/graphql-test-utils'
import { faker } from '@faker-js/faker'

describe('Household Details Annual Info', () => {
  before(() => {
    cy.login('manager')
    cy.visit('/household/342541bf-2649-4b9b-a912-93661c4ec31f/annual-info')
    interceptOperation('AnnualInfoList')
    cy.wait('@AnnualInfoList')
  })

  it('displays annual info tab', () => {
    cy.get('@AnnualInfoList')
      .its('response.body.data')
      .should('have.property', 'list')
    cy.get('button').contains('Create Annual Info').should('be.visible')
  })

  it('creates new annual info', () => {
    cy.get('button').contains('Create Annual Info').click()
    cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click()
    cy.get(':nth-child(122) > .PrivatePickersYear-yearButton').click()
    cy.get('[name="grossAnnualIncomeFarming"]')
      .type('{backspace}')
      .type(faker.datatype.float(0.01).toString())
    cy.get('[name="grossAnnualIncomeNonfarming"]')
      .type('{backspace}')
      .type(faker.datatype.float(0.01).toString())
    cy.get('[name="mainLivelihood"]').type('Farmer{downArrow}{enter}')
    cy.get('[name="highestFormalEducation"]').type(
      'High School Level{downArrow}{enter}'
    )
    cy.get('button').contains('Continue').click()
    interceptOperation('AnnualInfoList')
    cy.wait('@AnnualInfoList')
    cy.get('.MuiAlert-message')
      .should('be.visible')
      .contains('Annual Info successfully created')
  })
})
export {}
