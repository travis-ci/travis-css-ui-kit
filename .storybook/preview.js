import { addDecorator, addParameters } from '@storybook/html';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { withHTML } from '@whitespace/storybook-addon-html/html';
import { withPaddings } from 'storybook-addon-paddings';

addDecorator(withA11y);
addDecorator(withKnobs);
addDecorator(withHTML);
addDecorator(withPaddings);

addParameters({
  paddings: [
    { name: 'Small', value: '16px' },
    { name: 'Medium', value: '32px', default: true },
    { name: 'Large', value: '64px' },
  ],
});
