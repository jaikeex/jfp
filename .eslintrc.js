/** @type { import("eslint").Linter.FlatConfig[] } */
module.exports = {
  root: true,

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: './tsconfig.build.json',
  },

  overrides: [
    {
      files: ['*.ts'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
      ],
      rules: {
        "@typescript-eslint/no-unused-vars": "off"
      },
    },
  ],

  ignorePatterns: ['node_modules/**/*', 'tsconfig.*', '*.spec.ts', '*.d.ts', "dist/**/*"],
};
