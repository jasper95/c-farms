import { interceptOperation } from '../utils/graphql-test-utils'

describe('Household List', () => {
  before(() => {
    cy.login('encoder')
    cy.visit('/household')
    interceptOperation('HouseholdViewList')
    cy.wait('@HouseholdViewList')
  })

  it('should have household list', () => {
    cy.get('@HouseholdViewList')
      .its('response.body.data')
      .should('have.property', 'list')
  })

  it('filters data by Reference No', () => {
    cy.get('.MuiGrid2-grid-xs-2 > .MuiButtonBase-root').click()
    cy.get('[name="field"]').click().type('Reference{downArrow}{enter}')
    cy.get('[name="value"]').type('610349932{enter}')
    cy.get('.MuiBox-root > .MuiButton-root').click()
    cy.get('.MuiTablePagination-displayedRows').contains('1–1 of 1')
    cy.get('[data-testid="CancelIcon"]').click()
  })

  it('filters data by Barangay', () => {
    interceptOperation('HouseholdViewList')
    cy.get('.MuiGrid2-grid-xs-2 > .MuiButtonBase-root').click()
    cy.get('[name="field"]').click().type('Barangay{downArrow}{enter}')
    cy.get('[name="value"]').type('ABIHILAN{downArrow}{enter}')
    cy.get('.MuiBox-root > .MuiButton-root').click()
    cy.wait('@HouseholdViewList')
    cy.get('[data-testid="CancelIcon"]').click()
  })

  it('searches the list', () => {
    cy.get('[placeholder="Search"]')
      .should('be.visible')
      .focus()
      .type('ALMA MAE AUXTERO')
      .type('{enter}')
    interceptOperation('HouseholdViewList')
    cy.wait('@HouseholdViewList')
    cy.get('@HouseholdViewList')
      .its('response')
      .should('have.property', 'statusCode', 200)
  })

  it('searches the list with non-existent full name', () => {
    cy.get('[placeholder="Search"]')
      .should('be.visible')
      .focus()
      .type('{selectAll}MAS MAS')
      .type('{enter}')
    interceptOperation('HouseholdViewList')
    cy.wait('@HouseholdViewList').then((response) => {
      expect(response?.response?.body?.data?.list).to.have.length(0)
    })
    cy.get('.MuiTableCell-root > .MuiTypography-root').contains(
      'No records found'
    )
  })
})
export {}
