/** @jsxImportSource theme-ui */
import { Link } from "gatsby"

import Logo from "../../assets/logo.inline.svg"
import { useSiteMetadata } from "../../hooks/use-site-metadata"

const Brand = ({ setOpen }) => {
  const { author, job } = useSiteMetadata()

  return (
    <div>
      <Link
        to="/"
        onClick={setOpen}
        sx={{
          variant: "styles.navLink",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Logo sx={{ width: 128 }} />
        <p sx={{ fontSize: "1.5rem", mb: "0.5rem" }}>{author}</p>
        <p sx={{ fontSize: 16, color: "sidebar.color", margin: 0 }}>
          {job}
        </p>
      </Link>
      <hr sx={{ width: "10%", margin: "10px auto 0" }}></hr>
    </div>
  )
}

export default Brand
