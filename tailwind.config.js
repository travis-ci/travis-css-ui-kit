const { colors, spacing } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: {},
  theme: {
    extend: {
      screens: {
        dark: { raw: '(prefers-color-scheme: dark)' },
      },
      boxShadow: {
        outline: '0 0 0 4px rgba(62, 170, 175, 0.3)',
      },
    },
    fontFamily: {
      sans: ['"Source Sans Pro"', 'Helvetica', 'Arial', 'sans-serif'],
      mono: ['Cousine', 'Menlo', 'monospace'],
      icon: ['tci-icons'],
    },
    colors: {
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      gray: {
        100: '#f1f1f1', // $pebble-gray
        200: '#eaeaea', // $dry-cement
        300: '#d7d7d7',
        400: '#c7c7c7',
        500: '#9d9d9d', // $cement-grey
        600: '#666666', // $asphalt-grey
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
      creme: {
        100: '#fafaf8', // $cream-light
        200: '#eff0ec', // $cream-dark
      },
      orange: {
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
    spacing: {
      0: spacing[0],
      1: spacing[1],
      2: spacing[2],
      3: spacing[3],
      4: spacing[4],
      5: spacing[5],
      6: spacing[6],
      8: spacing[8],
      10: spacing[10],
      12: spacing[12],
      16: spacing[16],
      20: spacing[20],
      100: '100px',
    },
    container: {
      center: true,
      padding: {
        default: '1rem',
        sm: '2rem',
      },
    },
  },
  variants: {
    maxWidth: ['responsive'],
  },
  plugins: [],
  corePlugins: {
    preflight: true, //  Tailwind's base/reset styles
    container: true, //  The container component
    accessibility: true, //  The sr-only and not-sr-only utilities
    alignContent: true, //  The align-content utilities like content-between
    alignItems: true, //  The align-items utilities like items-start
    alignSelf: true, //  The align-self utilities like self-end
    appearance: false, //  The appearance utilities like appearance-none
    backgroundAttachment: false, //  The background-attachment utilities like bg-fixed
    backgroundColor: true, //  The background-color utilities like bg-gray-200
    backgroundOpacity: true, //  The background-color opacity utilities like bg-opacity-25
    backgroundPosition: true, //  The background-position utilities like bg-center
    backgroundRepeat: true, //  The background-repeat utilities like bg-no-repeat
    backgroundSize: true, //  The background-size utilities like bg-cover
    borderCollapse: true, //  The border-collapse utilities like border-separate
    borderColor: true, //  The border-color utilities like border-gray-300
    borderOpacity: false, //  The border-color opacity utilities like border-opacity-25
    borderRadius: true, //  The border-radius utilities like rounded-lg
    borderStyle: true, //  The border-style utilities like border-dashed
    borderWidth: true, //  The border-width utilities like border-2
    boxSizing: false, //  The box-sizing utilities like box-border
    boxShadow: true, //  The box-shadow utilities like shadow-xl
    clear: false, //  The clear utilities like clear-left
    cursor: true, //  The cursor utilities like cursor-pointer
    display: true, //  The display utilities like block
    divideColor: false, //  The between elements border-color utilities like divide-gray-500
    divideWidth: false, //  The between elements border-width utilities like divide-x-2
    fill: true, //  The fill utilities like fill-current
    flex: true, //  The flex utilities like flex-1
    flexDirection: true, //  The flex-direction utilities like flex-col
    flexGrow: true, //  The flex-grow utilities like flex-grow-0
    flexShrink: true, //  The flex-shrink utilities like flex-shrink-0
    flexWrap: true, //  The flex-wrap utilities like flex-no-wrap
    float: false, //  The float utilities like float-left
    gap: false, //  The gap utilities like gap-4
    gridAutoFlow: false, //  The grid-auto-flow utilities like grid-flow-col
    gridColumn: false, //  The grid-column utilities like col-span-6
    gridColumnStart: false, //  The grid-column-start utilities like col-start-1
    gridColumnEnd: false, //  The grid-column-end utilities like col-end-4
    gridRow: false, //  The grid-row utilities like row-span-6
    gridRowStart: false, //  The grid-row-start utilities like row-start-1
    gridRowEnd: false, //  The grid-row-end utilities like row-end-4
    gridTemplateColumns: false, //  The grid-template-columns utilities like grid-cols-4
    gridTemplateRows: false, //  The grid-template-rows utilities like grid-rows-4
    fontFamily: true, //  The font-family utilities like font-sans
    fontSize: true, //  The font-size utilities like text-xl
    fontSmoothing: true, //  The font-smoothing utilities like antialiased
    fontStyle: true, //  The font-style utilities like italic
    fontWeight: true, //  The font-weight utilities like font-bold
    height: true, //  The height utilities like h-8
    inset: true, //  The inset utilities like top-0
    justifyContent: true, //  The justify-content utilities like justify-between
    letterSpacing: false, //  The letter-spacing utilities like tracking-tight
    lineHeight: true, //  The line-height utilities like leading-normal
    listStylePosition: false, //  The list-style-position utilities like list-inside
    listStyleType: false, //  The list-style-type utilities like list-disc
    margin: true, //  The margin utilities like mt-4
    maxHeight: true, //  The max-height utilities like max-h-screen
    maxWidth: true, //  The max-width utilities like max-w-full
    minHeight: true, //  The min-height utilities like min-h-screen
    minWidth: true, //  The min-width utilities like min-w-0
    objectFit: false, //  The object-fit utilities like object-cover
    objectPosition: false, //  The object-position utilities like object-center
    opacity: true, //  The opacity utilities like opacity-50
    order: false, //  The flexbox order utilities like order-last
    outline: true, //  The outline utilities like outline-none
    overflow: true, //  The overflow utilities like overflow-hidden
    padding: true, //  The padding utilities like py-12
    placeholderColor: false, //  The placeholder color utilities like placeholder-red-600
    placeholderOpacity: false, //  The placeholder color opacity utilities like placeholder-opacity-25
    pointerEvents: true, //  The pointer-events utilities like pointer-events-none
    position: true, //  The position utilities like absolute
    resize: true, //  The resize utilities like resize-y
    rotate: true, //  The rotate utilities like rotate-90
    scale: true, //  The scale utilities like scale-150
    skew: true, //  The skew utilities like skew-y-3
    space: true, //  The "space-between" utilities like space-x-4
    stroke: false, //  The stroke utilities like stroke-current
    strokeWidth: false, //  The stroke-width utilities like stroke-2
    tableLayout: false, //  The table-layout utilities like table-fixed
    textAlign: true, //  The text-align utilities like text-center
    textColor: true, //  The text-color utilities like text-red-600
    textOpacity: true, //  The text-color opacity utilities like text-opacity-25
    textDecoration: true, //  The text-decoration utilities like underline
    textTransform: true, //  The text-transform utilities like uppercase
    transform: true, //  The transform utility (for enabling transform features)
    transitionDuration: true, //  The transition-duration utilities like duration-100
    transitionProperty: true, //  The transition-property utilities like transition-colors
    transitionTimingFunction: true, //  The transition-timing-function utilities like ease-in-out
    translate: false, //  The translate utilities like translate-y-6
    userSelect: true, //  The user-select utilities like user-select-none
    verticalAlign: true, //  The vertical-align utilities like align-middle
    visibility: true, //  The visibility utilities like invisible
    whitespace: true, //  The whitespace utilities like whitespace-no-wrap
    width: true, //  The width utilities like w-1/2
    wordBreak: false, //  The word-break utilities like break-all
    zIndex: true, //  The z-index utilities like z-50
  },
};
