module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: [
    '../src/stories/*.stories.mdx',
    '../src/stories/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
};
