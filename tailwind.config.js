/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize:{
        location: '1.584375rem',
        pkr: '1.015rem',
        crore: '1.8375rem',
        p: '0.875rem'

      },
      colors: {        
        primary: '#37474F',
        added: '#737678',
        features: '#F2F2F2',
        toggle: '#E85451'
      },
      fontFamily: {
        sans: ['var(--font-poppins)'],
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
