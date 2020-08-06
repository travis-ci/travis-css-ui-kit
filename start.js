const webpack = require('webpack');
const config = require('./webpack.config.js');
const storybook = require('@storybook/html/standalone');

console.log('Starting dev server in watch mode...');

const watching = webpack(config).watch({}, (err, stats) => {
  console.log('Compiled successfully');
});

process.on('SIGTERM', function () {
  watching.close(() => console.log('Dev server closed'));
});

console.log('Starting Storybook...');

storybook({
  mode: 'dev',
  port: 6006,
  configDir: './.storybook',
});
