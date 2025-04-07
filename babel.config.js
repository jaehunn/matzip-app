const moduleResolver = [
  'module-resolver',
  {
    alias: {
      '@': './src',
    },
  },
];

module.exports = {
  presets: ['module:@react-native/babel-preset'],

  /** @see {react-native-reanimated} https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started/#step-2-add-reanimateds-babel-plugin */
  plugins: ['react-native-reanimated/plugin', moduleResolver],
};
