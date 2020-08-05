const { colors } = require('tailwindcss/defaultTheme');
const { ENV = 'prod' } = process.env;

console.log(`Envronment: ${ENV}`);

module.exports = {
  purge: {
    enabled: ENV === 'prod',
    content: [],
    css: ['./src/styles/utilities/**/*.css', './src/styles/components/**/*.css'],
  },
  theme: {
    extend: {
      screens: {
        dark: { raw: '(prefers-color-scheme: dark)' },
      },
    },
    fontFamily: {
      sans: ['"Source Sans Pro"', 'Helvetica', 'Arial', 'sans-serif'],
      mono: ['Cousine', 'Menlo', 'monospace'],
    },
    colors: {
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      gray: {
        100: '#f1f1f1', // $pebble-gray
        200: '#eaeaea', // $dry-cement
        500: '#9d9d9d', // $cement-grey
        600: '#666666', // $asphalt-grey
        700: colors.gray[700],
        800: colors.gray[800],
      },
      green: {
        100: '#deecdc', // $seed-green
        600: '#39aa56', // $turf-green
      },
      yellow: {
        100: '#faf6db', // $haze-yellow
        400: '#edde3f', // $canary-yellow
        600: '#cdb62c', // $dozer-yellow
      },
      orange: {
        100: '#fafaf8', // $cream-light
        150: '#eff0ec', // $cream-dark
        600: '#ed7d5b', // $brick-orange
      },
      red: {
        100: '#fce8e2', // $quartz-red
        600: '#db4545', // $brick-red
      },
      teal: {
        200: '#b6d6d9', // $agate-blue
        600: '#3eaaaf', // $oxide-blue
      },
    },
  },
  variants: {},
  plugins: [],
};
