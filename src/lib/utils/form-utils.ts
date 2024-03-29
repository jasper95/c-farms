import startCase from 'lodash/startCase'

export function fieldIsRequired(params: any) {
  const { label, path } = params
  // const display = label || path.replace(/([a-z])([A-Z])/g, '$1 $2')
  return `${startCase(label || path)} is required`
}

export function fieldIsInvalid(params: any) {
  const { label, path } = params
  // const display = label || path.replace(/([a-z])([A-Z])/g, '$1 $2')
  return `${startCase(label || path)} is required`
}
