module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff" },
        teal: { 400: "#35a787", 800: "#056b4e" },
        black: { 900: "#000000", "900_72": "#00000072" },
        blue_gray: { 100: "#d9d9d9" },
        gray: { 50: "#fffafa", 600: "#726e6e", 900: "#1e1e1e" },
        orange: { 800: "#f66d09" },
        cyan: { 50: "#defdf4" },
        light_blue_700: "#0195c3",
      },
      boxShadow: { xs: "0px 4px 4px 0px #0000003f", sm: "3px 4px 10px 0px #0000003f", md: "0px 4px 6px 4px #0000003f" },
      fontFamily: {
        amiko: "Amiko",
        montserrat: "Montserrat",
        fredokaone: "Fredoka One",
        coiny: "Coiny",
        delagothicone: "Dela Gothic One",
      },
      textShadow: { ts: "0px 9px 11px #0000003f", ts1: "0px 4px 4px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
