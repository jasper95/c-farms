import { interceptOperation } from '../utils/graphql-test-utils'

describe('Dashboard', () => {
  before(() => {
    cy.login('administrator')
    interceptOperation('AverageAnnualIncomeList')
    interceptOperation('CropProduceList')
    interceptOperation('FisheriesProduceList')
    interceptOperation('InventoryOfLivestockList')
    interceptOperation('DashboardStats')
    interceptOperation('RegisteredHousehold')
    cy.visit('/')
  })

  it('has status code 200 for all data request', () => {
    cy.wait('@AverageAnnualIncomeList')
      .its('response')
      .should('have.property', 'statusCode', 200)
    cy.wait('@CropProduceList')
      .its('response')
      .should('have.property', 'statusCode', 200)
    cy.wait('@FisheriesProduceList')
      .its('response')
      .should('have.property', 'statusCode', 200)
    cy.wait('@InventoryOfLivestockList')
      .its('response')
      .should('have.property', 'statusCode', 200)
    cy.wait('@DashboardStats')
      .its('response')
      .should('have.property', 'statusCode', 200)
    cy.wait('@RegisteredHousehold')
      .its('response')
      .should('have.property', 'statusCode', 200)
  })

  it('displays charts', () => {
    cy.get(
      '.mui-style-l8v5xp-MuiGrid-root > :nth-child(1) > .MuiPaper-root'
    ).contains('Households')
    cy.get(
      '.mui-style-l8v5xp-MuiGrid-root > :nth-child(2) > .MuiPaper-root'
    ).contains('Associations')
    cy.get(
      '.mui-style-l8v5xp-MuiGrid-root > :nth-child(3) > .MuiPaper-root'
    ).contains('Farms')
    cy.get(
      '.mui-style-l8v5xp-MuiGrid-root > :nth-child(4) > .MuiPaper-root'
    ).contains('Programs')
    cy.get(
      '.mui-style-mhc70k-MuiGrid-root > :nth-child(1) > .MuiPaper-root'
    ).should('be.visible')
    cy.get(
      '.mui-style-mhc70k-MuiGrid-root > :nth-child(2) > .MuiPaper-root'
    ).should('be.visible')
    cy.get(
      '.mui-style-mhc70k-MuiGrid-root > :nth-child(2) > .MuiPaper-root'
    ).should('be.visible')
    cy.get(
      '.mui-style-mhc70k-MuiGrid-root > :nth-child(4) > .MuiPaper-root'
    ).should('be.visible')
    cy.get(':nth-child(5) > .MuiPaper-root').should('be.visible')
    cy.get('[data-testid="DownloadIcon"]').click()
  })
})
export {}
