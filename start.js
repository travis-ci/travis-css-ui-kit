const webpack = require('webpack');
const config = require('./webpack.config.js');
const storybook = require('@storybook/html/standalone');

console.log('Starting dev server in watch mode...');

const watching = webpack(config).watch({}, (err, stats) => {
  if (err) {
    console.error(err.stack || err);
    if (err.details) {
      console.error(err.details);
    }
    return;
  }

  const info = stats.toJson();

  if (stats.hasErrors()) {
    console.error(info.errors);
  }

  if (stats.hasWarnings()) {
    console.warn(info.warnings);
  }

  console.log('Compilation complete');
});

process.on('SIGTERM', function () {
  watching.close(() => console.log('Dev server closed'));
});

console.log('Starting Storybook...');

storybook({
  mode: 'dev',
  port: 6006,
  staticDir: ['./dist'],
  configDir: './.storybook',
});
