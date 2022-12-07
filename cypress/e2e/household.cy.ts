import { interceptOperation } from '../utils/graphql-test-utils'
import { faker } from '@faker-js/faker'

describe('Household List', () => {
  before(() => {
    // login as administrator
    cy.login('administrator')
    // Visit a route in order to allow cypress to actually set the cookie
    cy.visit('/household')
    // Wait until the intercepted request is ready
    cy.wait('@session')
    interceptOperation('HouseholdList')
  })

  // it('list query should return valid response', () => {
  //   cy.wait('@HouseholdList')
  //     .its('response.body.data')
  //     .should('have.property', 'list')
  // })

  it('creates new household', () => {
    cy.get('[data-testid="create"]').should('be.visible').click()
    // cy.get('[name="referenceNo"]').type(
    //   faker.phone.number('07-12-11-###-######')
    // )
    cy.get('[name="lastName"]').type(faker.name.lastName())
    cy.get('[name="firstName"]').type(faker.name.firstName())
    cy.get('[name="middleName"]').type(faker.name.middleName())
    cy.get('[name="extensionName"]').type(faker.name.suffix())
    cy.get('[name="houseLotBldgNo"]').type(faker.address.buildingNumber())
    cy.get('[name="streetSitioSubdv"]').type(faker.address.streetAddress())
    cy.get('[name="municipality"]').type('Candijay')
    cy.get('[name="province"]').type('Bohol')
    cy.get('[name="region"]').type('VII')
    cy.get('[name="contactNumber"]').type(faker.phone.number('09#########'))
    cy.get('[name="sex"]').filter('[value="1"]').click()
    cy.get('[name="nameOfSpouse"]').type(faker.name.fullName())
    //cy.get('[name="mothersMaidenName"]').type(faker.name.fullName())
    cy.get('[name="dateOfBirth"]').type(
      faker.date.birthdate().toLocaleDateString()
    )
    cy.get('[name="placeOfBirth"]').type('Jagna, Bohol')
    cy.get('button').contains('Next').click()
    cy.get('[name="isHouseholdHead"]').click()
    cy.get('[name="maleCount"]').type('Jagna, Bohol')
  })
})
export {}
