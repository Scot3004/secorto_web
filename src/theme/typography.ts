import { toTheme } from "@theme-ui/typography"

const typography = toTheme({
  baseFontSize: "20px",
  baseLineHeight: 1.45,
  googleFonts: [
    {
      name: "Alegreya Sans",
      styles: ["500"],
    }
  ],
  headerFontFamily: ["Alegreya Sans", "sans-serif"],
  bodyFontFamily: ["sans-serif"],
  headerColor: "hsla(0,0%,0%,0.9)",
  bodyColor: "#fff",
  headerWeight: 500,
  bodyWeight: 400,
  boldWeight: 700,
})

export default typography
