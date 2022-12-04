declare namespace Cypress {
  interface Chainable<Subject> {
    login(role: string): Chainable<void>
  }
}
