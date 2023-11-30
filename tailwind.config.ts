import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'tablet': '768px',
      'desktop': '1024px'
    },
    colors: {
      purple: '#A729F5',
      dark_navy: '#313E51',
      navy: '#3B4D66',
      gray_navy: '#626C7F',
      light_bluish: '#ABC1E1',
      light_gray: '#F4F6FA',
      white: '#FFFFFF',
      green: '#26D782',
      red: '#EE5454',
      icon_orange: '#FFF1E9',
      icon_green: '#E0FDEF',
      icon_blue: '#EBF0FF',
      icon_purple: '#F6E7FF'
    }
  },
  plugins: [],
  darkMode: 'class'
}
export default config