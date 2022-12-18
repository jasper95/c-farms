import { interceptOperation } from '../utils/graphql-test-utils'

describe('Program Household', () => {
  before(() => {
    cy.login('manager')
    interceptOperation('ProgramList')
    cy.visit('/program')
  })

  it('displays household program list', () => {
    cy.wait('@ProgramList')
    cy.get('.MuiGrid2-grid-xs-2 > .MuiButtonBase-root').click()
    cy.get('[name="field"]').type('Type{downArrow}{enter}')
    cy.get('[name="value"]').type('Household{downArrow}{enter}')
    interceptOperation('ProgramList')
    cy.get('.MuiBox-root > .MuiButton-root').click()
    cy.wait('@ProgramList')
  })

  it('displays program details', () => {
    cy.get(
      '.MuiTableBody-root > .MuiTableRow-root > :nth-child(6) > .MuiButtonBase-root'
    ).click()
    interceptOperation('ProgramDetails')
    cy.get(
      '.MuiList-root > .MuiTypography-inherit > .MuiListItemText-root > .MuiTypography-root'
    ).click()
    cy.wait('@ProgramDetails').then((response) => {
      expect(response.response.body.data.details).to.have.property('id')
    })
  })

  it('filter prospective household beneficiaries', () => {
    interceptOperation('ProgramBeneficiariesList')
    cy.get('.MuiTabs-flexContainer > [tabindex="-1"]').click()
    cy.wait('@ProgramBeneficiariesList')
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
    cy.get(
      '.mui-style-1s8k6s6-MuiGrid2-root > :nth-child(2) > [data-testid="CancelIcon"]'
    ).click()
    cy.get(
      '.mui-style-1s8k6s6-MuiGrid2-root > :nth-child(1) > [data-testid="CancelIcon"]'
    ).click()
  })

  it('selects household beneficiaries', () => {
    cy.get(
      '.MuiTableBody-root > :nth-child(1) > .MuiTableCell-paddingCheckbox > .MuiButtonBase-root > .PrivateSwitchBase-input'
    ).click()
    cy.wait(1000)
    cy.get('[data-testid="AddCircleIcon"]').click({ force: true })
  })

  it('display selected household beneficiaries', () => {
    interceptOperation('ProgramBeneficiariesList')
    cy.get('.MuiButton-outlined').click()
    cy.wait('@ProgramBeneficiariesList').then((response) => {
      expect(response.response.body.data.list).to.have.length.of.at.least(1)
    })
  })
})
export {}
