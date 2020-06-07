module.exports = (config, env) => {
  config.optimization.runtimeChunk = false;
  config.optimization.flagIncludedChunks = true;
  config.optimization.splitChunks = {
    cacheGroups: {
      default: false,
    },
  };
  config.devServer = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers': '*',
    },
    allowedHosts: ['localhost:3000'],
  };
  config.externals = {
    react: 'React',
    'react-dom': 'ReactDOM',
  };
  return config;
};
