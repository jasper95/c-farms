import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: [
    'src/lib/generated/overrides.graphql',
    {
      [process.env.NEXT_PUBLIC_GRAPHQL_URL || '']: {
        headers: {
          'X-Hasura-Admin-Secret': process.env.NEXT_PUBLIC_GRAPHQL_SECRET || '',
        },
      },
    },
  ],
  documents: 'src/modules/**/*.graphql',
  overwrite: true,
  generates: {
    'src/lib/generated/graphql.types.ts': {
      plugins: ['typescript'],
      hooks: {
        afterOneFileWrite: ['eslint --fix'],
      },
    },
    'src/lib/generated/graphql.schema.json': {
      plugins: ['introspection'],
    },
    'src/modules': {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.ts',
        baseTypesPath: '~@/lib/generated/graphql.types',
      },
      plugins: ['typescript-operations', 'typescript-urql'],
      hooks: {
        afterOneFileWrite: ['eslint --fix'],
      },
    },
  },
}

export default config
