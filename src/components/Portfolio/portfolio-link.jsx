/** @jsxImportSource theme-ui */
import { Card, Text } from "theme-ui"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const PortfolioLink = ({ slug, image, title }) => (
  <Card
    as={Link}
    sx={{
      flex: ["0 1 100%", "0 1 48%"],
      mb: "1.5rem",
      backgroundColor: "background"
    }}
    to={slug}
  >
    <GatsbyImage
      image={image?.childImageSharp.gatsbyImageData}
      sx={{
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        margin: "auto",
      }}
      height="220"
      alt={title}
    />
    <Text
      sx={{
        color: "primary",
        fontFamily: "heading",
        textAlign: "center",
        margin: "0 auto .5rem",
        display: "block",
      }}
    >
      {title}
    </Text>
  </Card>
)

export default PortfolioLink
