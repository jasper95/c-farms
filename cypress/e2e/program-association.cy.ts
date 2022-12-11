import { interceptOperation } from '../utils/graphql-test-utils'
import { faker } from '@faker-js/faker'

describe('Program Association', () => {
  before(() => {
    cy.login('manager')
    cy.visit('/program')
  })

  it('has program list', () => {
    cy.intercept('https://hasura-a08a.onrender.com/v1/graphql').as(
      'ProgramList'
    )
    cy.wait('@ProgramList')
    cy.get('@ProgramList')
      .its('response.body.data')
      .should('have.property', 'list')
  })

  it('can edit association programs', () => {
    cy.get(
      '.MuiTableBody-root > :nth-child(1) > :nth-child(4) > .MuiButtonBase-root'
    ).click()
    cy.get(
      '.MuiList-root > .MuiTypography-inherit > .MuiListItemText-root > .MuiTypography-root'
    ).click()
    cy.get('.MuiTabs-flexContainer > [tabindex="-1"]').click()
    cy.intercept('https://hasura-a08a.onrender.com/v1/graphql').as(
      'BeneficiariesList'
    )
    cy.wait('@BeneficiariesList')
    cy.get(
      '.MuiTableHead-root > .MuiTableRow-root > .MuiTableCell-paddingCheckbox > .MuiButtonBase-root > .PrivateSwitchBase-input'
    ).click()
    cy.get('.MuiBox-root > .MuiButtonBase-root').click()
    cy.get('.MuiButton-outlined').click()
    interceptOperation('AssociationBeneficiariesList')
  })
})
export {}
