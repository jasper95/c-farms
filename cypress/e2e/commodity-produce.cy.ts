import { interceptOperation } from '../utils/graphql-test-utils'
import { faker } from '@faker-js/faker'

describe('Household Details Commodity Produce', () => {
  before(() => {
    cy.login('administrator')
    cy.visit('/household')
    cy.visit(
      '/household/342541bf-2649-4b9b-a912-93661c4ec31f/commodity-produce'
    )
  })

  it('displays commodity produce tab', () => {
    interceptOperation('CommodityProduceList')
    cy.wait('@CommodityProduceList')
    cy.get('@CommodityProduceList')
      .its('response.body.data')
      .should('have.property', 'list')
    cy.get('button').contains('Create Commodity Produce').should('be.visible')
  })

  it('creates commodity produce', () => {
    cy.get('button').contains('Create Commodity Produce').click()
    cy.wait(3000)
    cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click()
    cy.get(':nth-child(27) > .PrivatePickersYear-yearButton').click()
    cy.get('[name="commodityId"]').type('{downArrow}{enter}')
    cy.get('[name="organicPractitioner"]').click()
    cy.get('[name="produceInUnit"]')
      .type('{backspace}')
      .type(faker.datatype.float().toString())
    cy.get('[name="farmId"]').type('{downArrow}{enter}')
    cy.get('[name="areaUsed"]').type(
      faker.datatype.float({ min: 0.001, max: 0.5 }).toString()
    )
    cy.get('button').contains('Continue').click()
    interceptOperation('CommodityProduceList')
    cy.wait('@CommodityProduceList')
    cy.get('.MuiAlert-message')
      .should('be.visible')
      .contains('Commodity Produce successfully created')
    cy.get('@CommodityProduceList')
      .its('response')
      .should('have.property', 'statusCode', 200)
  })

  it('updates commodity produce', () => {
    cy.get(
      '.MuiTableBody-root > :nth-child(1) > :nth-child(6) > .MuiButtonBase-root'
    ).click()
    cy.get(
      '.MuiList-root > [tabindex="0"] > .MuiListItemText-root > .MuiTypography-root'
    ).click()
    cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click()
    cy.get(':nth-child(26) > .PrivatePickersYear-yearButton').click()
    cy.get('button').contains('Continue').click()
  })

  it('deletes commodity produce data', () => {
    cy.get('button').contains('Create Commodity Produce').should('be.visible')
    cy.get(
      '.MuiTableBody-root > :nth-child(1) > :nth-child(6) > .MuiButtonBase-root'
    ).click()
    cy.get(
      '[tabindex="-1"] > .MuiListItemText-root > .MuiTypography-root'
    ).click()
    cy.get('button').contains('Continue').click()
    interceptOperation('CommodityProduceList')
    cy.wait('@CommodityProduceList')
    cy.get('@CommodityProduceList')
      .its('response')
      .should('have.property', 'statusCode', 200)
    cy.get('.MuiAlert-message')
      .should('be.visible')
      .contains('Commodity Produce successfully deleted')
  })
})
export {}
