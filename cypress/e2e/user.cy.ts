describe('Administrator access User Page', () => {
  it('should display user list', () => {
    cy.login('administrator')
    cy.visit('/user')
    cy.intercept('https://hasura-a08a.onrender.com/v1/graphql').as('UserList')
    cy.wait('@UserList')
    cy.get(
      '.MuiTableBody-root > :nth-child(1) > :nth-child(5) > .MuiButtonBase-root'
    ).click()
    cy.get(
      '.MuiList-root > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root'
    ).click()
    cy.get('[name="active"]').click()
    cy.get('button').contains('Save').should('be.visible').click()
  })
})

describe('View all pages of administrator', () => {
  beforeEach(() => {
    cy.login('administrator')
  })

  it('should display dashboard', () => {
    cy.visit('/')
    cy.get(
      ':nth-child(5) > .MuiPaper-root > .mui-style-h71gmh > .MuiTypography-root'
    ).should('be.visible')

    cy.visit('/household')
    cy.get('.MuiBreadcrumbs-li > .MuiTypography-root').contains('Household')

    cy.visit('/farm')
    cy.get('.MuiBreadcrumbs-li > .MuiTypography-root').contains('Farm')

    cy.visit('/program')
    cy.get('.MuiBreadcrumbs-li > .MuiTypography-root').contains('Program')

    cy.visit('/commodity')
    cy.get('.MuiBreadcrumbs-li > .MuiTypography-root').contains('Commodity')

    cy.visit('/association')
    cy.get('.MuiBreadcrumbs-li > .MuiTypography-root').contains('Association')
  })
})

describe('View pages of manager', () => {
  beforeEach(() => {
    cy.login('manager')
  })

  it('should display dashboard', () => {
    cy.visit('/')
    cy.get(
      ':nth-child(5) > .MuiPaper-root > .mui-style-h71gmh > .MuiTypography-root'
    ).should('be.visible')

    cy.visit('/household')
    cy.get('.MuiBreadcrumbs-li > .MuiTypography-root').contains('Household')

    cy.visit('/farm')
    cy.get('.MuiBreadcrumbs-li > .MuiTypography-root').contains('Farm')

    cy.visit('/program')
    cy.get('.MuiBreadcrumbs-li > .MuiTypography-root').contains('Program')

    cy.visit('/commodity')
    cy.get('.MuiBreadcrumbs-li > .MuiTypography-root').contains('Commodity')

    cy.visit('/association')
    cy.get('.MuiBreadcrumbs-li > .MuiTypography-root').contains('Association')
  })
})

describe('View pages of encoder', () => {
  beforeEach(() => {
    cy.login('encoder')
  })

  it('should display dashboard', () => {
    cy.visit('/')
    cy.get(
      ':nth-child(5) > .MuiPaper-root > .mui-style-h71gmh > .MuiTypography-root'
    ).should('be.visible')

    cy.visit('/household')
    cy.get('.MuiBreadcrumbs-li > .MuiTypography-root').contains('Household')

    cy.visit('/farm')
    cy.get('.MuiBreadcrumbs-li > .MuiTypography-root').contains('Farm')

    cy.visit('/program')
    cy.get('.MuiBreadcrumbs-li > .MuiTypography-root').contains('Program')

    cy.visit('/association')
    cy.get('.MuiBreadcrumbs-li > .MuiTypography-root').contains('Association')
  })
})

describe('Access unauthorized page', () => {
  it('should display access denied page', () => {
    cy.login('encoder')
    cy.visit('/user')
    cy.get('.MuiTypography-h3').contains('Permission Denied')
  })
})

export {}
