module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },

  "settings": {
    "react": {
      "fragment": "Fragment",  // Fragment to use (may be a property of <pragma>), default to "Fragment"
      "version": "detect",
    }
  },
  "extends": [
    "plugin:@typescript-eslint/recommended",
    // "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jest/recommended",
    "plugin:cypress/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "jest",
    "cypress",
    "@typescript-eslint"
  ],
  "rules": {
    "@typescript-eslint/no-non-null-assertion": "off",
    "cypress/no-assigning-return-values": "error",
    "cypress/no-unnecessary-waiting": "error",
    "cypress/assertion-before-screenshot": "warn",
    "cypress/no-force": "warn",
    "cypress/no-async-tests": "error",
    "cypress/no-pause": "error",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": 0,
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "double"
    ],
    "semi": [
      "error",
      "always"
    ]
  }
};
