import capitalize from 'lodash/capitalize'

export function fieldIsRequired(params: any) {
  const { label, path } = params
  const display =
    label ||
    path
      .split('.')
      .pop()
      .split('_')
      .filter((e: any) => e !== 'id')
      .map(capitalize)
      .join(' ')
  return `${display} is required`
}

export function fieldIsInvalid(params: any) {
  const { label, path } = params
  const display =
    label ||
    path
      .split('.')
      .pop()
      .split('_')
      .filter((e: any) => e !== 'id')
      .map(capitalize)
      .join(' ')
  return `${display} is required`
}
