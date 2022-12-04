import { CyHttpMessages } from 'cypress/types/net-stubbing'

// Utility to match GraphQL mutation based on the operation name
export const hasOperationName = (
  req: CyHttpMessages.IncomingHttpRequest,
  operationName: string
) => {
  const { body } = req
  return (
    body.hasOwnProperty('operationName') && body.operationName === operationName
  )
}

// Alias query if operationName matches
export const aliasOperation = (
  req: CyHttpMessages.IncomingHttpRequest,
  operationName: string
) => {
  if (hasOperationName(req, operationName)) {
    req.alias = `${operationName}`
  }
}

export const interceptOperation = (operation: string) => {
  cy.intercept('POST', Cypress.env('NEXT_PUBLIC_GRAPHQL_URL'), (req) => {
    aliasOperation(req, operation)
  })
}
