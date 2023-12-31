module.exports = {
  trailingComma: 'es5',
  semi: true,
  tabWidth: 2,
  singleQuote: true,
  jsxSingleQuote: true,
  plugins: [
    'prettier-plugin-tailwindcss',
    '@trivago/prettier-plugin-sort-imports',
  ],
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '^@/(.*)$',
    '^[./].*(?<!\\.(c|le|sc)ss)$',
    '^[.]/[-a-zA-Z0-9_]+[.](module)[.](css|scss|less)$',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  endOfLine: 'crlf',
};
