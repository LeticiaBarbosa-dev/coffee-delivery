/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        default: "#FAFAFA",
        card: "#F3F2F2",
        button: "#E6E5E5",
        purple_base: "#8047F8",
        purple_dark: "#4B2995",
        purple_light: "#EBE5F9",
        yellow_base: "#DBAC2C",
        yellow_dark: "#C47F17",
        yellow_light: "#F1E9C9",
        title_base: "#272221",
        subtitle_base: "#403937",
        text_base: "#574F4D",
      },
      backgroundImage: {
        pattern: "url('/Background.png')",
      },
      fontFamily: {
        base: ['"Baloo 2"', 'sans-serif'],
        base_text: ['"Roboto"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
