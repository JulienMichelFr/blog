import { createGlobalStyle } from "styled-components"

export const theme = {
  fontFamily: "Roboto, sans-serif",
  maxWidth: "1000px",
  lightGrey: "#ececec",
  black: "#393939",
  primary: "#b7410e",
  boxShadow: "0 0 1px 1px rgba(0, 0, 0, 0.12)",
}
export const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => props.theme.black};
  }
`
