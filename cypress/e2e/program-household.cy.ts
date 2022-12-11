import { interceptOperation } from '../utils/graphql-test-utils'
import { faker } from '@faker-js/faker'

describe('Program Household', () => {
  before(() => {
    cy.login('manager')
    cy.visit('/program')
  })

  it('can edit household programs', () => {
    cy.intercept('https://hasura-a08a.onrender.com/v1/graphql').as(
      'ProgramList'
    )
    cy.wait('@ProgramList')
    cy.get('.MuiGrid2-grid-xs-2 > .MuiButtonBase-root').click()
    cy.get('[name="field"]').type('Type{downArrow}{enter}')
    cy.get('[name="value"]').type('Household{downArrow}{enter}')
    cy.get('.MuiBox-root > .MuiButton-root').click()
    cy.intercept('https://hasura-a08a.onrender.com/v1/graphql').as(
      'ProgramList'
    )
    cy.wait('@ProgramList')
    cy.get(
      '.MuiTableBody-root > .MuiTableRow-root > :nth-child(4) > .MuiButtonBase-root'
    ).click()
    cy.get(
      '.MuiList-root > .MuiTypography-inherit > .MuiListItemText-root > .MuiTypography-root'
    ).click()
    cy.get('.MuiTabs-flexContainer > [tabindex="-1"]').click()
    cy.intercept('https://hasura-a08a.onrender.com/v1/graphql').as(
      'BeneficiariesList'
    )
    cy.wait('@BeneficiariesList')
    cy.get('.MuiButton-outlined').click()
    cy.get('.MuiGrid2-grid-xs-2 > .MuiButtonBase-root').click()
    cy.get('[name="field"]').type('Commodities{downArrow}{enter}')
    cy.get('[name="type"]').type('are{downArrow}{enter}')
    cy.get('[name="value"]').type('Banana{downArrow}{enter}')
    cy.get('.MuiBox-root > .MuiButton-root').click()
    cy.get('.MuiGrid2-grid-xs-2 > .MuiButtonBase-root').click()
    cy.get('[name="field"]').type('First Name{downArrow}{enter}')
    cy.get('[name="type"]').type('contains{downArrow}{enter}')
    cy.get('[name="value"]').type('Al{downArrow}{enter}')
    cy.get('.MuiBox-root > .MuiButton-root').click()
    cy.get('.MuiGrid2-grid-xs-2 > .MuiButtonBase-root').click()
    cy.get('[name="field"]').type('First Name{downArrow}{enter}')
    cy.get('[name="type"]').type('contains{downArrow}{enter}')
    cy.get('[name="value"]').type('Al{downArrow}{enter}')
    cy.get('.MuiBox-root > .MuiButton-root').click()
  })
})
export {}
