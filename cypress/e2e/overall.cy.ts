import { interceptOperation } from '../utils/graphql-test-utils'
import { faker } from '@faker-js/faker'

//--------------Login------------------//
describe('Cypress login', () => {
  it('should provide a valid session', () => {
    // login as administrator
    cy.login('administrator')
    // Visit a route in order to allow cypress to actually set the cookie
    cy.visit('/')
    // Wait until the intercepted request is ready
    cy.wait('@session')
  })
})

//-----------Household List-----------//
describe('Household List', () => {
  before(() => {
    cy.login('administrator')
    cy.visit('/household')
  })

  it('should have household list', () => {
    interceptOperation('HouseholdList')
    cy.wait('@HouseholdList')
    cy.get('@HouseholdList')
      .its('response.body.data')
      .should('have.property', 'list')
  })

  it('filters data by Reference No', () => {
    cy.get('.MuiGrid2-grid-xs-2 > .MuiButtonBase-root').click()
    cy.get('[name="field"]').click()
    cy.get('#mui-12-option-0').click()
    cy.get('#mui-15').type('610349932{enter}')
    cy.get('.MuiBox-root > .MuiButton-root').click()
    cy.get('.MuiTablePagination-displayedRows').contains('1–1 of 1')
    cy.get('[data-testid="CancelIcon"]').click()
  })

  it('filters data by Barangay', () => {
    cy.get('.MuiGrid2-grid-xs-2 > .MuiButtonBase-root').click()
    cy.get('[name="field"]').click()
    cy.get('#mui-17-option-1').click()
    cy.get('#mui-20').type('ANOLING')
    cy.get('.MuiBox-root > .MuiButton-root').click()
    cy.get('[data-testid="CancelIcon"]').click()
  })

  it('filters data by First Name', () => {
    cy.get('.MuiGrid2-grid-xs-2 > .MuiButtonBase-root').click()
    cy.get('[name="field"]').click()
    cy.get('#mui-22-option-2').click()
    cy.get('#mui-25').type('ALMA MAE')
    cy.get('.MuiBox-root > .MuiButton-root').click()
    cy.get('[data-testid="CancelIcon"]').click()
  })

  it('filters data by Last Name', () => {
    cy.get('.MuiGrid2-grid-xs-2 > .MuiButtonBase-root').click()
    cy.get('[name="field"]').click()
    cy.get('#mui-27-option-3').click()
    cy.get('#mui-30').type('AUXTERO')
    cy.get('.MuiBox-root > .MuiButton-root').click()
    cy.get('[data-testid="CancelIcon"]').click()
  })

  it('searches the list', () => {
    cy.get('[placeholder="Search"]')
      .should('be.visible')
      .focus()
      .type('Alma')
      .type('{enter}')
    interceptOperation('HouseholdList')
    cy.wait('@HouseholdList')
    cy.get('@HouseholdList')
      .its('response')
      .should('have.property', 'statusCode', 200)
  })
})

describe('Household Module', () => {
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
      cy.get('[name="referenceNo"]').type(
        faker.phone.number('#########').toString()
      )
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
      cy.get('[name="maleCount"]').type(
        '{backspace}' + faker.datatype.number(10).toString()
      )
      cy.get('[name="femaleCount"]').type(
        '{backspace}' + faker.datatype.number(100).toString()
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

//-----------Household Details-----------//
describe('Household Details', () => {
  before(() => {
    cy.login('administrator')
    cy.visit('/household')
    interceptOperation('HouseholdList')
    cy.wait('@HouseholdList')
    cy.get(
      '.MuiTableBody-root > :nth-child(1) > :nth-child(4) > .MuiButtonBase-root'
    ).click()
    cy.get(
      '.MuiList-root > .MuiTypography-inherit > .MuiListItemText-root > .MuiTypography-root'
    ).click()
  })

  it('displays other details tab', () => {
    cy.get('input[name="firstName"]').type('{selectAll}Sample{enter}')
    cy.get('button').contains('Save').click()
    cy.get('.justify-self-end').should('be.visible')
    cy.visit('/household/9b967e17-536f-48b3-814e-3b0d77863660/secondary')
    cy.get('button').contains('Save').should('be.disabled')
    cy.get('input[name="maleCount"]').type('{selectAll}{backspace}').type('2')
    cy.get('input[name="femaleCount"]').type('{selectAll}{backspace}').type('3')
    cy.get('button').contains('Save').should('be.enabled').click()
  })
})

//-----------Household Farms-----------//
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

//-------------Household Commodity Produce----------------//
describe('Household Details Commodity Produce', () => {
  before(() => {
    cy.login('administrator')
    cy.visit('/household')
    cy.visit(
      '/household/342541bf-2649-4b9b-a912-93661c4ec31f/commodity-produce'
    )
    cy.intercept('https://hasura-a08a.onrender.com/v1/graphql').as(
      'CommodityProduceList'
    )
    cy.wait('@CommodityProduceList')
  })

  it('displays commodity produce tab', () => {
    cy.get('@CommodityProduceList')
      .its('response.body.data')
      .should('have.property', 'list')
    cy.get('button').contains('Create Commodity Produce').should('be.visible')
  })

  it('creates commodity produce', () => {
    cy.get('button').contains('Create Commodity Produce').click()
    cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click()
    cy.get(':nth-child(27) > .PrivatePickersYear-yearButton').click()
    cy.get('[name="farmId"]').type('{downArrow}{enter}')
    cy.get('[name="commodityId"]').type('{downArrow}{enter}')
    cy.get('[name="organicPractitioner"]').click()
    cy.get('[name="produceInUnit"]')
      .type('{backspace}')
      .type(faker.datatype.float().toString())
    cy.get('[name="areaUsed"]').type(
      faker.datatype.float({ max: 2 }).toString()
    )
    cy.get('button').contains('Continue').click()

    cy.intercept('https://hasura-a08a.onrender.com/v1/graphql').as(
      'CommodityProduceList'
    )
    cy.wait('@CommodityProduceList')
    cy.get('.MuiAlert-message')
      .should('be.visible')
      .contains('Commodity Produce successfully created')
    cy.get('@CommodityProduceList')
      .its('response')
      .should('have.property', 'statusCode', 200)
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

    cy.intercept('https://hasura-a08a.onrender.com/v1/graphql').as(
      'CommodityProduceList'
    )
    cy.wait('@CommodityProduceList')
    cy.get('@CommodityProduceList')
      .its('response')
      .should('have.property', 'statusCode', 200)
    cy.get('.MuiAlert-message')
      .should('be.visible')
      .contains('Commodity Produce successfully deleted')
  })
})

//-----------Household Details Annual Info------------------//
describe('Household Details Annual Info', () => {
  before(() => {
    cy.login('manager')
    cy.visit('/household/342541bf-2649-4b9b-a912-93661c4ec31f/annual-info')
    interceptOperation('AnnualInfoList')
    cy.wait('@AnnualInfoList')
  })

  it('displays annual info tab', () => {
    cy.get('@AnnualInfoList')
      .its('response.body.data')
      .should('have.property', 'list')
    cy.get('button').contains('Create Annual Info').should('be.visible')
  })

  it('creates new annual info', () => {
    cy.get('button').contains('Create Annual Info').click()
    cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click()
    cy.get(':nth-child(122) > .PrivatePickersYear-yearButton').click()
    cy.get('[name="grossAnnualIncomeFarming"]')
      .type('{backspace}')
      .type(faker.datatype.float(0.01).toString())
    cy.get('[name="grossAnnualIncomeNonfarming"]')
      .type('{backspace}')
      .type(faker.datatype.float(0.01).toString())
    cy.get('[name="mainLivelihood"]').type('Farmer{downArrow}{enter}')
    cy.get('[name="highestFormalEducation"]').type(
      'High School Level{downArrow}{enter}'
    )
    cy.get('button').contains('Continue').click()
    interceptOperation('AnnualInfoList')
    cy.wait('@AnnualInfoList')
    cy.get('.MuiAlert-message')
      .should('be.visible')
      .contains('Annual Info successfully created')
  })
})

//-------------Program Association------------//
describe('Program', () => {
  before(() => {
    cy.login('manager')
    cy.visit('/program')
  })

  it('has program list', () => {
    cy.intercept('https://hasura-a08a.onrender.com/v1/graphql').as(
      'ProgramList'
    )
    cy.wait('@ProgramList')
    cy.get('@ProgramList')
      .its('response.body.data')
      .should('have.property', 'list')
  })

  it('can edit association programs', () => {
    cy.get(
      '.MuiTableBody-root > :nth-child(1) > :nth-child(4) > .MuiButtonBase-root'
    ).click()
    cy.get(
      '.MuiList-root > .MuiTypography-inherit > .MuiListItemText-root > .MuiTypography-root'
    ).click()
    cy.get('.MuiTabs-flexContainer > [tabindex="-1"]').click()
    cy.intercept('https://hasura-a08a.onrender.com/v1/graphql').as(
      'BeneficiariesList'
    )
    cy.wait('@BeneficiariesList')
    cy.get(
      '.MuiTableHead-root > .MuiTableRow-root > .MuiTableCell-paddingCheckbox > .MuiButtonBase-root > .PrivateSwitchBase-input'
    ).click()
    cy.get('.MuiBox-root > .MuiButtonBase-root').click()
    cy.get('.MuiButton-outlined').click()
    interceptOperation('AssociationBeneficiariesList')
  })
})

//-------------Dashboard--------------//
describe('Dashboard', () => {
  before(() => {
    cy.login('encoder')
    cy.visit('/')
  })

  //--------------Dashboard--------------//
  it('has a dashboard', () => {
    cy.intercept('https://hasura-a08a.onrender.com/v1/graphql').as('Dashboard')
    cy.wait('@Dashboard')
    cy.get(
      '.mui-style-l8v5xp-MuiGrid-root > :nth-child(1) > .MuiPaper-root'
    ).should('be.visible')
  })
})

//-----------Program Household--------------//
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

describe('Encoder access User Page', () => {
  it('should display access denied page', () => {
    cy.login('encoder')
    cy.visit('/user')
    cy.get('.MuiTypography-h3').contains('Permission Denied')
  })
})

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
    cy.get('button').contains('Continue').should('be.visible').click()
  })
})
export {}
