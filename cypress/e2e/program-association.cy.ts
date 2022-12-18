import { interceptOperation } from '../utils/graphql-test-utils'
import { faker } from '@faker-js/faker'

describe('Program Association', () => {
  before(() => {
    cy.login('manager')
    cy.visit('/program')
  })

  it('creates program', () => {
    interceptOperation('ProgramList')
    cy.wait('@ProgramList')
    cy.get('@ProgramList')
      .its('response.body.data')
      .should('have.property', 'list')
    cy.get('button').contains('Create Program').click()
    cy.wait(3000)
    cy.get('[name="name"]').type('Sample Program')
    cy.get('[name="type"]').type('{downArrow}{downArrow}{enter}')
    cy.get('[name="description"]').type('sample description')
    cy.get('[name="sponsoringAgency"]').type('DOST')
    cy.get('#mui-13').type('11202022')
    cy.get('#mui-14').type('12302022').type('\b')
    cy.get('[name="sponsoringAgency"]').focus()
    cy.get('button').contains('Save').click()
  })

  it('selects association program beneficiaries', () => {
    cy.get(
      ':nth-child(1) > :nth-child(6) > .MuiButtonBase-root > [data-testid="MoreHorizIcon"]'
    ).click({ force: true })
    cy.get(
      '.MuiList-root > .MuiTypography-inherit > .MuiListItemText-root > .MuiTypography-root'
    ).click()
    cy.get('.MuiTabs-flexContainer > [tabindex="-1"]').click()
    interceptOperation('AssociationBeneficiariesList')
    cy.wait('@AssociationBeneficiariesList').then((req) => {
      interceptOperation('AssociationProgramsList')
      cy.get('.MuiButton-outlined').click()
      cy.wait('@AssociationProgramsList')
    })
    cy.get(
      '.MuiTableHead-root > .MuiTableRow-root > .MuiTableCell-paddingCheckbox > .MuiButtonBase-root > .PrivateSwitchBase-input'
    ).click()
    //add data
    cy.get('.MuiBox-root > .MuiButtonBase-root').click()
  })
})
export {}
