const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.{vue,js}',    './layouts/**/*.vue',    './pages/**/*.vue',    './plugins/**/*.{js,ts}',    './nuxt.config.{js,ts}' ],
  darkMode: 'class',
  theme: {
    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      text: 'text',
      move: 'move',
      notAllowed: 'not-allowed',
      none: 'none',
      contextMenu: 'context-menu',
      progress: 'progress',
      cell: 'cell',
      alias: 'alias',
      grab: 'grab',
      grabbing: 'grabbing',
      alias: 'alias',
      crosshair: 'crosshair',
      zoomIn: 'zoom-in',
      zoomOut: 'zoom-out',
    },
    screens: {
      'print': {'raw': 'print'},
      'landscape': {'raw': '(orientation: landscape)'},
      'portrait': {'raw': '(orientation: portrait)'},

      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'xxl': '1536px',

      'mm-sm': {'max': '767px'},
      'mm-md': {'min': '768px', 'max': '1023px'},
      'mm-lg': {'min': '1024px', 'max': '1279px'},
      'mm-xl': {'min': '1280px', 'max': '1535px'},
      'mm-xxl': {'min': '1536px'},
    },
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      transparent: 'transparent',
      current: 'currentColor',
    },
    extend: {
      width: {
        'wSaaad': 'calc(100% - 200px)',
      },
      height: {
        'hSaaad': 'calc(100vh - 100px)',
      },
      minHeight: {
        'mhSaaad': 'calc(100vh - 50px)',
      },
      lineHeight: {
      '20': '5.5rem',
      },
      keyframes: {
        horizontalTextScrolling: {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          'to': { transform: 'translate3d(-50%, 0, 0)' },
        },
        curtain: {
          '0%': { width: '100%', height: '100%'},
          'to': { width: '0%', height: '0%' },
        }
      },
      animation: {
        animate_horizontalTextScrolling: 'horizontalTextScrolling 60s linear infinite',
        animate_curtain: 'curtain 1s ease',
      },
      transitionDelay: {
        '0': '0ms',
      },
      transitionDuration: {
        '0': '0ms',
        '5000': '5000ms',
        '10000': '10000ms',
      },
      fontFamily: {
        'work': ["Work Sans", "Open Sans", "sans-serif"],
        'meno': ["Meno Banner"],
        'hoefler': ["Hoefler"],
      }
    }
  },
  variants: {

  },
  plugins: [],
}
