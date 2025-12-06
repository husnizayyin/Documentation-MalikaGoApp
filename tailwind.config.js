/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        border: 'var(--color-border)',
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
        },
        accent: 'var(--color-accent)',
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

