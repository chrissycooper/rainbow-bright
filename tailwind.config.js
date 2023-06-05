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
        'bird': "url('https://images.unsplash.com/photo-1685428960533-e9904f63e66b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')",
        'moon': "url('https://images.unsplash.com/photo-1447433589675-4aaa569f3e05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80')",
        'texture': "url('https://images.unsplash.com/photo-1685286233685-c455946fdd7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1183&q=80')"
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
