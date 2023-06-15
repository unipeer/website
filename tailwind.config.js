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
        "dark-100": "#eff1ff",
        "dark-900": "#020423",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Jost: ["Jost", "sans-serif"],
      },
    },
  },
  variants: {},
  plugins: [],
};
