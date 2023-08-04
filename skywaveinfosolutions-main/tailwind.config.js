/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        carterOne : "'Carter One', cursive",
        abrilFatface: "'Abril Fatface', cursive",
        caprasimo: "'Caprasimo', cursive",
        carterOne: "'Carter One', cursive",
        greatVibes: "'Great Vibes', cursive",
        kalam: "'Kalam', cursive",
        rowdies: "'Rowdies', cursive",
        sacramento: "'Sacramento', cursive",
        britannicBold: "'Britannic Bold', sans-serif",
      }
    },
  },
  plugins: [],
}
