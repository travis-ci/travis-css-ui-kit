import { addDecorator } from '@storybook/html';
import { withHTML } from '@whitespace/storybook-addon-html/html';
import { withPaddings } from 'storybook-addon-paddings';

// Static assets
import '../dist/styles/ui-kit.css';
import '../dist/styles/icons.css';

// addDecorator(withKnobs);
addDecorator(withHTML);
addDecorator(withPaddings);

export const parameters = {
  controls: {
    expanded: true,
    hideNoControlsWarning: true,
  },
  paddings: [
    { name: 'Small', value: '16px' },
    { name: 'Medium', value: '32px', default: true },
    { name: 'Large', value: '64px' },
  ],
};
