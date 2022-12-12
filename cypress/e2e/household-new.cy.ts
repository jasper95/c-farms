import { interceptOperation } from '../utils/graphql-test-utils'
import { faker } from '@faker-js/faker'

context('Household Module', () => {
  //-----------New Household-----------//
  describe('New Household', () => {
    before(() => {
      cy.login('administrator')
      cy.visit('/household')
    })

    it('creates new household', () => {
      interceptOperation('HouseholdList')
      cy.wait('@HouseholdList')
      cy.get('[data-testid="create"]').should('be.visible').click()
      cy.wait(5000)
      cy.get('[name="referenceNo"]').type(
        faker.phone.number('#########').toString()
      )
      cy.get('[name="lastName"]').type(faker.name.lastName())
      cy.get('[name="firstName"]').type(faker.name.firstName())
      cy.get('[name="middleName"]').type(faker.name.middleName())
      cy.get('[name="extensionName"]').type(faker.name.suffix())
      cy.get('[name="houseLotBldgNo"]').type(faker.address.buildingNumber())
      cy.get('[name="streetSitioSubdv"]').type(faker.address.streetAddress())
      cy.get('[name="municipality"]').should('have.value', 'Candijay')
      cy.get('[name="province"]').type('Bohol')
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
      cy.get('[name="maleCount"]').type(
        '{backspace}' + faker.datatype.number(10).toString()
      )
      cy.get('[name="femaleCount"]').type(
        '{backspace}' + faker.datatype.number(10).toString()
      )
      cy.get('[name="ipMembership"]').type('Jagna, Bohol')
      cy.get('[name="governmentIdNo"]').type(
        faker.random.alphaNumeric().toString()
      )
      cy.get('[name="is4psBeneficiary"]').click()
      cy.get('[name="emergencyContactName"]').type(faker.name.fullName())
      cy.get('[name="emergencyContactNumber"]').type(
        faker.phone.number('09#########')
      )
      cy.get('button').contains('Next').click()
      cy.get('[name="grossAnnualIncomeFarming"]').type(
        '\b' + faker.datatype.float().toString()
      )
      cy.get('[name="grossAnnualIncomeNonfarming"]').type(
        '\b' + faker.datatype.float().toString()
      )
      cy.get('[name="mainLivelihood"]')
        .type('Farmer')
        .type('{downArrow}')
        .type('{enter}')
      cy.get('[name="highestFormalEducation"]')
        .type('High School Level')
        .type('{downArrow}')
        .type('{enter}')
      cy.get('button').contains('Back').should('be.visible').click()
      cy.get('button').contains('Next').should('be.visible').click()
      cy.get('button').contains('Save').click()
      interceptOperation('HouseholdDetails')
      cy.wait('@HouseholdDetails')
      cy.get('@HouseholdDetails')
        .its('response.body.data')
        .should('have.property', 'details')
    })

    it('creates new household as farm worker', () => {
      cy.login('manager')
      cy.visit('/household')
      interceptOperation('HouseholdList')
      cy.wait('@HouseholdList')
      cy.get('[data-testid="create"]').should('be.visible').click()
      cy.get('[name="referenceNo"]').type(
        faker.phone.number('#########').toString()
      )
      cy.get('[name="lastName"]').type(faker.name.lastName())
      cy.get('[name="firstName"]').type(faker.name.firstName())
      cy.get('[name="middleName"]').type(faker.name.middleName())
      cy.get('[name="extensionName"]').type(faker.name.suffix())
      cy.get('[name="houseLotBldgNo"]').type(faker.address.buildingNumber())
      cy.get('[name="streetSitioSubdv"]').type(faker.address.streetAddress())
      cy.get('[name="municipality"]').type('{selectAll}Candijay')
      cy.get('[name="province"]').type('{selectAll}Bohol')
      cy.get('[name="region"]').type('{selectAll}VII')
      cy.get('[name="contactNumber"]').type(faker.phone.number('09#########'))
      cy.get(
        ':nth-child(2) > .MuiButtonBase-root > .PrivateSwitchBase-input'
      ).click()
      cy.get('[name="nameOfSpouse"]').type(faker.name.fullName())
      cy.get('[name="mothersMaidenName"]').type(faker.name.fullName())
      cy.get('[name="dateOfBirth"]').type(
        faker.date.birthdate().toLocaleDateString()
      )
      cy.get('[name="placeOfBirth"]').type('Jagna, Bohol')
      cy.get('button').contains('Next').click()
      cy.get('[name="isHouseholdHead"]').click()
      cy.get('[name="maleCount"]').type(
        faker.datatype.number({ max: 10 }).toString()
      )
      cy.get('[name="femaleCount"]').type(
        '{selectAll}' + faker.datatype.number({ max: 10 }).toString()
      )
      cy.get('[name="ipMembership"]').type('Jagna, Bohol')
      cy.get('[name="governmentIdNo"]').type(
        faker.random.alphaNumeric().toString()
      )
      cy.get('[name="is4psBeneficiary"]').click()
      cy.get('[name="emergencyContactName"]').type(faker.name.fullName())
      cy.get('[name="emergencyContactNumber"]').type(
        faker.phone.number('09#########')
      )
      cy.get('button').contains('Next').click()
      cy.get('[name="grossAnnualIncomeFarming"]').type(
        '{backspace}' + faker.datatype.float().toString()
      )
      cy.get('[name="grossAnnualIncomeNonfarming"]').type(
        '{backspace}' + faker.datatype.float().toString()
      )
      cy.get('[name="mainLivelihood"]')
        .type('Farmworker')
        .type('{downArrow}')
        .type('{enter}')
      cy.get('#mui-48')
        .type('Land Preparation')
        .type('{enter}')
        .type('Harvesting')
        .type('{enter}')
      cy.get('[name="highestFormalEducation"]')
        .type('High School Level')
        .type('{downArrow}')
        .type('{enter}')
      cy.get('button').contains('Save').click()
      interceptOperation('HouseholdDetails')
      cy.wait('@HouseholdDetails')
      cy.get('@HouseholdDetails')
        .its('response.body.data')
        .should('have.property', 'details')
    })
  })
})
export {}
