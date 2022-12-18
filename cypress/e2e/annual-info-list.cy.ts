import { interceptOperation } from '../utils/graphql-test-utils'
import { faker } from '@faker-js/faker'

describe('Household Details Annual Info', () => {
  beforeEach(() => {
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
    cy.get(':nth-child(121) > .PrivatePickersYear-yearButton').click()
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
    cy.get('button').contains('Save').click()
    cy.intercept(Cypress.env('NEXT_PUBLIC_GRAPHQL_URL'), (req) => {
      if (req.body.operationName !== 'AnnualInfoList') {
        req.alias = 'AnnnualInfoList'
        cy.wait('@AnnualInfoList')
      }
    })
    cy.get('.MuiAlert-message').should('be.visible')
  })

  it('deletes annual info', () => {
    cy.get(
      '.MuiTableBody-root > :nth-child(1) > :nth-child(4) > .MuiButtonBase-root'
    ).click()
    cy.get(
      '[tabindex="-1"] > .MuiListItemText-root > .MuiTypography-root'
    ).click()
    cy.get('button').contains('Continue').should('be.visible').click()
    interceptOperation('AnnualInfoList')
    cy.wait('@AnnualInfoList')
    cy.get('.MuiAlert-message').should(
      'contain',
      'Annual Info successfully deleted'
    )
  })
})
export {}
