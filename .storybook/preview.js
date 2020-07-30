import { addDecorator } from '@storybook/html';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/html';

addDecorator(centered);
addDecorator(withA11y);
addDecorator(withKnobs);
