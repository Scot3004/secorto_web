/** @jsxImportSource theme-ui */
import { Link } from "gatsby"
import Logo from "../../assets/logo.inline.svg"

const HomepageLink = () => (
  <div>
    <Link to="/">
      <Logo
        alt="logo"
        sx={{
          width: [36],
          height: [36],
          verticalAlign: "middle",
          borderRadius: "50%",
          transition: "box-shadow .5s",
          boxShadow: theme => `2px 2px 8px ${theme.colors.primary}`,
          ":hover": {
            boxShadow: theme => `2px 2px 8px ${theme.colors.hover}`,
          },
        }}
      />
    </Link>
  </div>
)

export default HomepageLink
