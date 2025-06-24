const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync({
    ...env,
    babel: {
      dangerouslyAddModulePathsToTranspile: ['@expo/vector-icons'],
    },
    mode: env.mode,
    devServer: {
      ...env.devServer,
      client: {
        overlay: {
          warnings: false,
        },
      },
    },
  }, argv);

  // Customize the config
  if (!config.resolve.alias) {
    config.resolve.alias = {};
  }

  // Add specific resolution for react-native on web
  config.resolve.alias['react-native$'] = 'react-native-web';

  return config;
};
