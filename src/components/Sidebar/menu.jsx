/** @jsx jsx */
import { jsx } from "theme-ui"

const Menu = ({ children, open }) => (
  <nav
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      background: theme => theme.colors.sidebar.background,
      transform: open ? "translateX(0)" : "translateX(-100%)",
      height: "100vh",
      textAlign: "left",
      padding: "1rem",
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: "100",
      overflow: "auto",
      transition: "transform 0.3s ease-in-out",
      width: "100%",
      "@media (min-width: 830px)": {
        width: theme => theme.sizes.sidebar,
      },
      a: {
        fontSize: "1.2rem",
        color: theme => theme.colors.sidebar.color,
        fontFamily: "heading",
        textDecoration: "none",
        transition: "color 0.3s linear",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: "0.1em",
        wordWrap: "break-word",
        "@media (min-width: 830px)": {
          justifyContent: "flex-start",
        },
      },
    }}
  >
    {children}
  </nav>
)

export default Menu
