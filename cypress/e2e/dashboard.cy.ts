import { interceptOperation } from '../utils/graphql-test-utils'

describe('Dashboard', () => {
  before(() => {
    cy.login('encoder')
    cy.visit('/')
  })

  it('has a dashboard', () => {
    cy.intercept('https://hasura-a08a.onrender.com/v1/graphql').as('Dashboard')
    cy.wait('@Dashboard')
    cy.get(
      '.mui-style-l8v5xp-MuiGrid-root > :nth-child(1) > .MuiPaper-root'
    ).should('be.visible')
    cy.get('.mui-style-18gdmk > .MuiButtonBase-root').click()
  })
})
export {}
