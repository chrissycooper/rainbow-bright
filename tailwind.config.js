/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 10% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'cherry-red': '#FF0000',
        'aerospace-orange': '#ff5300',
        'orange-juice': '#ffa500',
        'gold': '#ffd200',
        'yellow': '#ffff00',
        'apple-green': '#80c000',
        'green': '#008000',
        'yale-blue': '#004080',
        'blue': '#0000ff',
        'indigo': '#2600c1',
        'violet': '#4b0082',
        'lavender': '#A595E6'
      }
    },
  },
  plugins: [],
}
