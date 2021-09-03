module.exports = {
  root: true,
  extends: 'airbnb',
  rules: {
    camelcase: 1,
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    semi: 2, // force semicolons
    'react/jsx-wrap-multilines': 0, // along the same lines of playing fast-and-loose with ASI
    'react/jsx-filename-extension': 0, // component files still have a .js extension
    'no-use-before-define': 0, // allows to make the component the topmost element in a module file, and define a styles object further down.
    'react/prefer-stateless-function': [0, { ignorePureComponents: true }],
    'react/prop-types': 0, // not currently using props validation
    'react-native/no-unused-styles': 2, // detect StyleSheet rules which are not used in your React components
    'react-native/split-platform-components': 2, // enforce using platform specific filenames when necessary
    'react-native/no-inline-styles': 2, // detect JSX components with inline styles that contain literal values
    'react-native/no-color-literals': 2, // detect StyleSheet rules and inline styles containing color literals instead of variables
    'no-underscore-dangle': ['error', { allow: ['__REDUX_DEVTOOLS_EXTENSION__', '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] }],
    'max-len': ['error', { code: 150, tabWidth: 2 }],
    'import/prefer-default-export': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'operator-linebreak': 'off',
    'linebreak-style': 0,
    'no-console': 'error',
  },
  plugins: [
    'react',
    'react-native',
  ],
};
