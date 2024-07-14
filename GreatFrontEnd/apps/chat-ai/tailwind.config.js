/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      'noto-sans': ['Noto Sans', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif'],
    },
    ringColor: {
      buttonFocus: 'box-shadow: 0px 0px 0px 4px rgba(68, 76, 231, 0.12)'
    }
  },
  plugins: [],
};

