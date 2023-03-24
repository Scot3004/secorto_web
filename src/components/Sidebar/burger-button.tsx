/** @jsxImportSource theme-ui */
import { Fragment } from "react"

const BurgerIcon = ({ open, children, ...props }) => (
  <button
    {...props}
    sx={{
      position: "fixed",
      top: "0.6rem",
      left: "1rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      width: "1.5rem",
      height: "1.5rem",
      background: "transparent",
      border: "none",
      cursor: "pointer",
      padding: 0,
      zIndex: "101",

      "&:focus": {
        outline: "none",
      },

      div: {
        width: "1.5rem",
        height: "0.25rem",
        background: theme =>
          open ? theme.colors.sidebar.color : theme.colors.primary,
        borderRadius: "10px",
        transition: "all 0.3s linear",
        position: "relative",
        transformOrigin: "1px",
      },
    }}
  >
    {children}
  </button>
)

const Burger = ({ open, setOpen }) => {
  return (
    <Fragment>
      <BurgerIcon
        open={open}
        onClick={() => setOpen(!open)}
        aria-label="Alternar barra lateral"
      >
        <div
          sx={{
            transform: open ? "rotate(45deg)" : "rotate(0)",
          }}
        />
        <div
          sx={{
            opacity: open ? "0" : "1",
            transform: open ? "translateX(20px)" : "translateX(0)",
          }}
        />
        <div
          sx={{
            transform: open ? "rotate(-45deg)" : "rotate(0)",
          }}
        />
      </BurgerIcon>
      <div
        sx={{
          "&::before": {
            content: "''",
            top: "0.15rem",
            left: "0.5rem",
            position: "fixed",
            width: "48px",
            height: "48px",
            background: theme => theme.colors.background,
            zIndex: "99",
            borderRadius: "10px",
          },
        }}
      />
    </Fragment>
  )
}

export default Burger
