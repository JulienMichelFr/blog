import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: 'Roboto',
      styles: [
        '400',
        '700'
      ]
    }
  ],
  headerFontFamily: [
    "Roboto",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Roboto", "serif"],
})

export default typography
