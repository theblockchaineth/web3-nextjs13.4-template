import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        'lofi': {
          ...require("daisyui/src/theming/themes")["[data-theme=lofi]"],
        },
        'business': {
          ...require("daisyui/src/theming/themes")["[data-theme=business]"],
          
        }
      }
    ],

  }

}
export default config
