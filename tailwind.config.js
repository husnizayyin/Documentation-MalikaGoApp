/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        surface: '#f8f9fa',
        border: '#e5e7eb',
        text: {
          primary: '#111827',
          secondary: '#6b7280',
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

