import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: [
    {
      [process.env.SCHEMA_PATH || '']: {
        headers: {
          'X-Hasura-Admin-Secret': process.env.HASURA_SECRET || '',
        },
      },
    },
  ],
  documents: 'src/**/*.graphql',
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
    'src/': {
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
