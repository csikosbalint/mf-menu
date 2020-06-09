const Visualizer = require('webpack-visualizer-plugin');
module.exports = (config, env) => {
  config.optimization.runtimeChunk = false;
  config.optimization.flagIncludedChunks = true;
  config.optimization.splitChunks = {
    cacheGroups: {
      default: false,
    },
  };
  config.plugins.push(
    new Visualizer({
      filename: './statistics.html',
      enabled: false,
    })
  );
  config.devServer = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers': '*',
    },
    allowedHosts: ['localhost:3000'],
  };
  config.externals = [
    {
      react: 'React',
      'react-dom': 'ReactDOM',
    },

    // externalForMaterialUi,
    // /^\@material\-ui\/core\/.*/,
    // /^@material-ui\/(core|icons)[\/a-zA-Z]*/,
  ];
  function externalForMaterialUi(context, request, callback) {
    if (/@material-ui.+/.test(request)) {
      const name = request.replace(/^.*[\\\/]/, '');
      return callback(null, 'root MaterialUI.' + name);
    }
    callback();
  }
  return config;
};
