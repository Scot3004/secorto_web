/** @jsx jsx */
import { jsx } from "theme-ui"

import { Link } from "gatsby"
import { Work, Message } from "@emotion-icons/material-twotone"

import Brand from "./brand"
import ColorModeSwitch from "../ui/color-mode-switch"
import StyledMenu from "./menu"

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <div
        sx={{
          minHeight: 300,
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Brand setOpen={setOpen} />
        <Link
          to="/blog"
          sx={{
            variant: "styles.navLink",
          }}
          onClick={setOpen}
        >
          <Message size={24} sx={{ mr: ".4rem" }} />
          Blog
        </Link>
        <Link
          to="/portafolio"
          sx={{
            variant: "styles.navLink",
          }}
          onClick={setOpen}
        >
          <Work size={24} sx={{ mr: ".4rem" }} />
          Portafolio
        </Link>
        <ColorModeSwitch
          afterToggle={setOpen}
        />
      </div>
    </StyledMenu>
  )
}

export default Menu
