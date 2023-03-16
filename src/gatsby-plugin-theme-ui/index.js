import merge from "deepmerge"
import typography from "./typography"
import colors from "./colors"
import styles from "./styles"

const customStyles = merge(typography, {
  config: {
    initialColorModeName: "light",
    useColorSchemeMediaQuery: true,
  },
  colors,
  sizes: {
    container: 1280,
    sidebar: 280,
    sidebarBreakpoint: 830,
  },
  styles,
  navlink: {
    fontSize: 28,
    fontFamily: "heading",
    fontWeight: "heading",
    color: "primary",
    mt: 4,
    mb: 2,
  },
  cards: {
    primary: {
      borderRadius: 10,
      boxShadow: theme => `0 0 8px  ${theme.colors.primary}`,
      textDecoration: "none",
      marginBottom: "1em",
      transition:
        "box-shadow .3s ease-out, transform .3s ease-out, opacity .2s ease-out",
      transitionDelay: ".1s",
      "&:hover": {
        transform: "translate(0, -4px)",
        boxShadow: theme => `0 2px 14px  ${theme.colors.hover}`,
      },
    },
    compact: {
      borderRadius: 2,
      border: "1px solid",
      borderColor: "muted",
    },
  },
  fonts: {
    title: "Kalam",
  },
})

export default customStyles
