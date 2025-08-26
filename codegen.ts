const config = {
  schema: './schema.graphql',
  documents: ['src/**/*.{ts,tsx,graphql}', '!src/gql/**/*'],
  generates: {
    'src/gql/': {
      preset: 'client',
      presetConfig: { gqlTagName: 'gql' },
    },
  },
};

export default config;
