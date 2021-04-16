module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@components': ['./src/components'],
          '@src': ['./src'],
          '@routes': ['./src/navigator/routes.js'],
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: true,
      },
    ],
  ],
  sourceMaps: true,
};
