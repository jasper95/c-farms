// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import '@cypress/code-coverage/support'

Cypress.Commands.add('login', (role) => {
  cy.intercept('/api/auth/session', {
    body: {
      user: {
        name: 'Stub User',
        email: 'test@example.com',
        role,
      },
      expires: '3000-01-01T00:00:00.000Z',
      accessToken: 'abcdefghijklmnopqrst',
    },
  }).as('session')

  // Set the cookie for cypress.
  // It has to be a valid cookie so next-auth can decrypt it and confirm its validity.
  // This step can probably/hopefully be improved.
  // We are currently unsure about this part.
  // We need to refresh this cookie once in a while.
  // We are unsure if this is true and if true, when it needs to be refreshed.
  cy.setCookie(
    'next-auth.session-token',
    'a valid cookie from your browser session'
  )
  Cypress.Cookies.preserveOnce('next-auth.session-token')
})
