import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/constants/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      fontFamily: {
        pretendard: 'var(--font-pretendard)',
        calibre: 'var(--font-calibre)',
        appleGothic: 'var(--font-apple-gothic-neo)'
      },
      colors: {
        'green-60': 'rgba(155, 254, 3, 0.6)',
        'green-100': '#98f211',
        'gray-40': 'rgba(255, 255, 255, 0.4)',
        'gray-60': 'rgba(240, 240, 240, 0.6)',
        'gray-30': 'rgba(240, 240, 240, 0.3)',
        'gray-50': 'rgba(240, 240, 240, 0.5)',
        'gray-90': 'rgba(240, 240, 240, 0.9)',
        'black-80': '#363636',
        'base-dark': '#191919'
      },
      screens: {
        '3xl': '1920px'
      },
      fontSize: {
        '6.5xl': '6.5625rem'
      },
      width: {
        '224': '56rem',
        '3/10': '30%',
        '23': '23rem',
        '22': '22rem',
        '21': '21rem'
      },
      height: {
        '112': '28rem',
        '23': '23rem',
        '22': '22rem',
        '21': '21rem'
      },
      borderRadius: {
        '224': '56rem'
      },
      backgroundColor: {
        'base-dark': '#191919'
      },
      padding: {
        '37.5': '9.375rem'
      }
    }
  },
  plugins: []
};
export default config;
