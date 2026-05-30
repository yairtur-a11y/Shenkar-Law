import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}", "./src/data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0A0E1A",
        panel: "#0F1520",
        rule: "#1E2535",
        gold: "#B8965A",
        ivory: "#F5F2EC",
        stone: "#9A9590",
        muted: "#6B6560",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
