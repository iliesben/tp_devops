module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  ignorePatterns: ['src/**/*.test.js', '.eslintrc.js', 'commitlint.config.js'],
  overrides: [
    {
      files: ['src/**/*.{js,jsx}'],
      rules: {
        'no-console': [
          'error',
          {
            allow: ['warn', 'error'],
          },
        ],
        'no-var': 'error',
        eqeqeq: ['error', 'always'],
        'no-dupe-keys': 'error',
        'prettier/prettier': 'error',
        'react/jsx-uses-vars': 'error',
      },
    },
  ],
}
