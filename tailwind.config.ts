import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "aura-panel":
          "0 0 0 1px rgba(255,255,255,.08), 0 25px 90px rgba(0,0,0,.58)",
      },
      screens: {
        xs: "430px",
      },
    },
  },
  plugins: [],
};

export default config;
