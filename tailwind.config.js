module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "accent-1": "#333",
        "primary-100": "#feead9",
        "primary-500": "#fe5e44",
        "primary-700": "#b62224",
        "dark-100": "#eff1ff",
        "dark-200": "#a0aaec",
        "dark-400": "#394392",
        "dark-500": "#0e144a",
        "dark-600": "#0a0f3f",
        "dark-700": "#070a35",
        "dark-900": "#020423",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Jost: ["Jost", "sans-serif"],
      },
      fontSize: {
        12: "48px",
        5: "20px",
        4: "16px",
      },
      gap: {
        18: "4.5rem",
      },
      width: {
        18: "4.5rem",
      },
      padding: {
        18: "4.5rem",
        22: "5.5rem",
      },
    },
  },
  variants: {},
  plugins: [],
};
