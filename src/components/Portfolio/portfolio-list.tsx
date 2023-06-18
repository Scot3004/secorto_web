/** @jsxImportSource theme-ui */
import { Flex } from "theme-ui"
import PortfolioLink from "./portfolio-link"

const PortfolioList = ({ posts }) => (
  <Flex
    sx={{
      flexWrap: "wrap",
      justifyContent: "center",
      gap: '3%',
      backgroundColor: "blogBg",
      p: '2rem 2rem 0',
      mt: '5px',
    }}
  >
    {posts.map(({ node }) => (
      <PortfolioLink
        key={node.fields.slug}
        title={node.frontmatter.title}
        slug={node.fields.slug}
        image={node.frontmatter.image}
      />
    ))}
  </Flex>
)

export default PortfolioList
