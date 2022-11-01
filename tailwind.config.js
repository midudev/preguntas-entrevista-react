/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './app/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'blue-gradient-radial': 'radial-gradient(circle,#0141ff 0,rgba(161,252,70,0) 71%)'
      },
      fontFamily: {
        grotesk: ['Space Grotesk', 'sans-serif']
      },
      boxShadow: {
        box: '0 0 0 1px rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 5%), 0 12px 24px rgb(0 0 0 / 5%)'
      }
    }
  },
  plugins: []
}
