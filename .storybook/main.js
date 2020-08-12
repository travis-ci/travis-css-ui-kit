module.exports = {
  stories: ['../stories/**/*.stories.(js|mdx)'],
  addons: [
    '@whitespace/storybook-addon-html/register',
    'storybook-addon-paddings',
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false,
      },
    },
  ],
};
