import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: [
    {
      [process.env.NEXT_PUBLIC_GRAPHQL_URL || '']: {
        headers: {
          'X-Hasura-Admin-Secret': process.env.NEXT_PUBLIC_GRAPHQL_SECRET || '',
        },
      },
    },
  ],
  documents: 'src/lib/auth/**/*.graphql',
  overwrite: true,
  generates: {
    'src/lib/auth/generated.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request',
      ],
      hooks: {
        afterOneFileWrite: ['eslint --fix'],
      },
    },
  },
}

export default config
