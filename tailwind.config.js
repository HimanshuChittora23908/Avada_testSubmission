module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        "button": "2px 2px 2px rgba(0, 0, 0, 0.25);",
        "card": "2px 2px 2px rgba(255, 255, 255, 0.25);",
      },
      fontFamily: {
        ubuntu : ["Ubuntu", "sans-serif"],
      },
      colors: {
        "bg-one": "rgba(255, 255, 255, 0.5)",
        "bg-two": "rgba(255, 255, 255, 0.75)",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
