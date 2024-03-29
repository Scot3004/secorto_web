/** @jsxImportSource theme-ui */
import HomePageLink from "./homepage-link"

const Header = ({ children, isTitle=false }) => {
  const CustomTag = isTitle ?  `h1`: `span`
  return (
    <header
      sx={{
        display: "flex",
        alignItems: "center",
        boxShadow: theme => `0 0 8px  ${theme.colors.primary}`,
        minHeight: [58],
      }}
    >
      <div sx={{ mx: "auto" }} />

      <div
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 0,
        }}
      >
        <HomePageLink />
        <CustomTag
          sx={{
            ml: 2,
            fontSize: [42],
            color: "primary",
            fontFamily: "title",
            position: "relative",
            top: "5px",
            margin: "0 1rem",
            fontWeight: 400
          }}
        >
          {children}
        </CustomTag>
      </div>
      <div sx={{ mx: "auto" }} />
    </header>
  )
}

export default Header
