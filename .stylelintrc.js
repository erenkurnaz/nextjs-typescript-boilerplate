module.exports = {
  overrides: [
    {
      files: ['*.scss', '**/*.scss', '*.css', '**/*.css'],
      customSyntax: require('postcss-scss'),
      extends: ['stylelint-prettier/recommended', 'stylelint-config-recommended-scss'],
      rules: {},
    },
  ],
};
