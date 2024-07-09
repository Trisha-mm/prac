module.exports = function (api) {
  api.cache(true)
  

  const plugins = [
      [
          'module-resolver',
          {
              alias: {
                  '@/src/assets': './assets',
                  '@/src/components': './src/components',
                  '@/src/screens': './src/screens',
                  '@/src/providers': './src/providers',
                  '@/src/reducers': './src/reducers',
                  '@/src/tools': './src/tools',
                  '@/src/factories': './src/factories'
              }
          }
      ]
  ]

  return {
      presets: ['babel-preset-expo'],
      plugins: ['react-native-reanimated/plugin'], // Add this line
  }
}
