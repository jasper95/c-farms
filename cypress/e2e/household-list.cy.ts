import { interceptOperation } from '../utils/graphql-test-utils'

describe('Household List', () => {
  before(() => {
    cy.login('administrator')
    cy.visit('/household')
    interceptOperation('HouseholdList')
    cy.wait('@HouseholdList')
  })

  it('should have household list', () => {
    cy.get('@HouseholdList')
      .its('response.body.data')
      .should('have.property', 'list')
  })

  it('filters data by Reference No', () => {
    cy.get('.MuiGrid2-grid-xs-2 > .MuiButtonBase-root').click()
    cy.get('[name="field"]').click()
    cy.get('#mui-12-option-0').click()
    cy.get('#mui-15').type('610349932{enter}')
    cy.get('.MuiBox-root > .MuiButton-root').click()
    cy.get('.MuiTablePagination-displayedRows').contains('1–1 of 1')
    cy.get('[data-testid="CancelIcon"]').click()
  })

  it('filters data by Barangay', () => {
    cy.get('.MuiGrid2-grid-xs-2 > .MuiButtonBase-root').click()
    cy.get('[name="field"]').click()
    cy.get('#mui-17-option-1').click()
    cy.get('#mui-20').type('ANOLING')
    cy.get('.MuiBox-root > .MuiButton-root').click()
    cy.get('[data-testid="CancelIcon"]').click()
  })

  it('filters data by First Name', () => {
    cy.get('.MuiGrid2-grid-xs-2 > .MuiButtonBase-root').click()
    cy.get('[name="field"]').click()
    cy.get('#mui-22-option-2').click()
    cy.get('#mui-25').type('ALMA MAE')
    cy.get('.MuiBox-root > .MuiButton-root').click()
    cy.get('[data-testid="CancelIcon"]').click()
  })

  it('filters data by Last Name', () => {
    cy.get('.MuiGrid2-grid-xs-2 > .MuiButtonBase-root').click()
    cy.get('[name="field"]').click()
    cy.get('#mui-27-option-3').click()
    cy.get('#mui-30').type('AUXTERO')
    cy.get('.MuiBox-root > .MuiButton-root').click()
    cy.get('[data-testid="CancelIcon"]').click()
  })

  it('searches the list', () => {
    cy.get('[placeholder="Search"]')
      .should('be.visible')
      .focus()
      .type('Alma')
      .type('{enter}')
    interceptOperation('HouseholdList')
    cy.wait('@HouseholdList')
    cy.get('@HouseholdList')
      .its('response')
      .should('have.property', 'statusCode', 200)
  })
})
export {}
