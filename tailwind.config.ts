import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#84c0f6",
        greyBorders: colors.slate[200],
        greyText: "#767676",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "flip-horizontal-bottom": {
          "0%": { transform: "rotateX(0)" },
          "100%": { transform: "rotateX(-180deg)" },
        },
      },
      animation: {
        "flip-horizontal-bottom":
          "flip-horizontal-bottom 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955) both",
      },
    },
  },
  plugins: [],
};
export default config;
