/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#111111', // Softer Dark (Payload Style)
        surface: '#1c1c1c',    // Slightly lighter for cards/surfaces
        border: '#333333',     // Subtle borders
        text: {
          primary: '#ffffff',  // White text
          secondary: '#a1a1a1', // Muted text
        },
        accent: '#eab308', // Yellow accent
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.text.secondary'),
            '--tw-prose-headings': theme('colors.text.primary'),
            '--tw-prose-body': theme('colors.text.secondary'),
            '--tw-prose-bold': theme('colors.text.primary'),
            '--tw-prose-links': theme('colors.text.primary'),
            '--tw-prose-code': theme('colors.text.primary'),
            '--tw-prose-quotes': theme('colors.text.primary'),
          },
        },
      }),
    },
  },
  plugins: [],
}

