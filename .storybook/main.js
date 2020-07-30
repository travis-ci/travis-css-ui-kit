module.exports = {
  stories: ['../stories/**/*.stories.(js|mdx)'],
  addons: [
    '@storybook/addon-a11y/register',
    '@storybook/addon-docs',
    '@storybook/addon-knobs/register',
    '@whitespace/storybook-addon-html/register',
    'storybook-addon-paddings',
  ],
};
