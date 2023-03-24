/** @jsxImportSource theme-ui */
import { Link } from "gatsby"
import Header from "./header"

const HeaderLink = ({ children, to, ...props }) => (
  <Header>
    <Link
      to={to}
      {...props}
      sx={{
        color: "primary",
        transition: "all 0.3s linear",
        textDecoration: "none",
        ":hover": {
          color: "hover",
        },
      }}
    >
      {children}
    </Link>
  </Header>
)

export default HeaderLink
