import { interceptOperation } from '../utils/graphql-test-utils'
import { faker } from '@faker-js/faker'

describe('Household Farms', () => {
  before(() => {
    cy.login('administrator')
    cy.visit('/household')
    cy.visit('/household/342541bf-2649-4b9b-a912-93661c4ec31f/farm')
    interceptOperation('FarmViewList')
    cy.wait('@FarmViewList')
  })

  it('displays farm tab', () => {
    cy.get('@FarmViewList')
      .its('response.body.data')
      .should('have.property', 'list')
    cy.get('button').contains('Create Farm').should('be.visible')
    cy.get('.MuiGrid2-root > .MuiIconButton-root').should('be.visible').click()
  })

  it('creates farm', () => {
    cy.get('button').contains('Create Farm').click()
    cy.wait(5000)
    cy.get('.leaflet-control-zoom-out > span').click().click().click().click()
    cy.get('.leaflet-draw-draw-polygon').click()
    cy.get('.leaflet-container').click(100, 50)
    cy.get('.leaflet-container').click(100, 85)
    cy.get('.leaflet-container').click(120, 85)
    cy.get('.leaflet-container').click(120, 50)
    cy.get('.leaflet-draw-actions > :nth-child(1) > a').click()
    cy.get('[name="name"]').type('Sample Farm')
    cy.get('[name="ownershipType"]').type('Owner{downArrow}{enter}')
    cy.get('[name="ownershipDocument"]').type('{downArrow}{enter}')
    cy.get('[name="farmType"]').type('{downArrow}{enter}')
    cy.get('[name="sizeInHaTotal"]').type(
      faker.datatype.float({ max: 2 }).toString()
    )
    cy.get('[name="barangay"]').type('Tugas{downArrow}{enter}')
    cy.get('button').contains('Save').should('be.visible').click()
    interceptOperation('FarmDetails')
    cy.wait('@FarmDetails')
    cy.get('.MuiAlert-message')
      .should('be.visible')
      .contains('Farm successfully created')
  })

  it('deletes a farm', () => {
    cy.login('manager')
    cy.visit('/farm')
    interceptOperation('FarmViewList')
    cy.wait('@FarmViewList')
    cy.get(
      '.MuiTableBody-root > :nth-child(1) > :nth-child(5) > .MuiButtonBase-root'
    ).click()
    cy.get(
      '.mui-style-58nmbi-MuiButtonBase-root-MuiMenuItem-root > .MuiListItemText-root > .MuiTypography-root'
    ).click()
    cy.get('button').contains('Continue').click()
    interceptOperation('FarmViewList')
    cy.get('.MuiAlert-message')
      .should('be.visible')
      .contains('Farm successfully deleted')
    cy.wait('@FarmViewList')
    cy.get('@FarmViewList')
      .its('response')
      .should('have.property', 'statusCode', 200)
  })
})
export {}
