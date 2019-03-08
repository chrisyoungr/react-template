module.exports = {
    "parser": "babel-eslint",
    "extends": ["airbnb","eslint:recommended","plugin:react/recommended"],
    "plugins": ["react", "jsx-a11y", "import", "mocha"],
    
    "settings": {
    "react": {
    "createClass": "createReactClass", // Regex for Component Factory to use,
    // default to "createReactClass"
    "pragma": "React", // Pragma to use, default to "React"
    "version": "15.0", // React version, default to the latest React stable release
    "flowVersion": "0.53" // Flow version
    },
    "propWrapperFunctions": [ "forbidExtraProps" ], // The names of any functions used to wrap the
    // propTypes object, e.g. forbidExtraProps.
    // If this isn't set, any propTypes wrapped in
    // a function will be skipped.
    
    },
    "env": {
    "es6": true,
    "browser": true,
    "node": true
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "experimentalObjectRestSpread": true
        }
    },
        "rules": {
            "react/jsx-uses-react": "error",
            "react/jsx-uses-vars": "error",
            'react/no-multi-comp':'warn',
            "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
            'react/prefer-stateless-function': 'warn',
            'jsx-a11y/no-static-element-interactions': 'warn',
            'react/prop-types':'warn',
            'no-console': process.env.NODE_ENV === 'production' ? 0 : 0,
            'no-debugger': process.env.NODE_ENV === 'production' ? 0 : 0,
            'no-unused-vars':'warn',
            'react/no-string-refs':'warn',
            'no-undef':'warn',
            'no-func-assign':'warn',
            'no-cond-assign':'warn',
            'react/jsx-no-bind':1,
            'import/no-extraneous-dependencies':'warn',
            "mocha/no-exclusive-tests": "error",
            "react/jsx-indent":"warn",
            "react/jsx-boolean-value":"warn"
        }
    };