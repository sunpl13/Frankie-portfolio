import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        pretendard: "var(--font-pretendard)",
        calibre: "var(--font-calibre)",
      },
      colors: {
        "green-100": "#98f211",
        "gray-40": "rgba(255, 255, 255, 0.4)",
        "gray-60": "rgba(240, 240, 240, 0.6)",
        "gray-30": "rgba(240, 240, 240, 0.3)",
        "black-80": "#363636",
      },
      fontSize: {
        "6.5xl": "6.5625rem",
      },
      width: {
        "224": "56rem",
        "3/10": "30%",
      },
      height: {
        "112": "28rem",
      },
      borderRadius: {
        "224": "56rem",
      },
    },
  },
  plugins: [],
};
export default config;
