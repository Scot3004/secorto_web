/** @jsx jsx */
import { jsx } from "theme-ui"

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
      transition: "background-color 0.3s linear",
    }}
  >
    {posts.map(({ node }) => (
      <PortfolioLink
        key={node.slug}
        title={node.frontmatter.title}
        slug={node.fields.slug}
        image={node.frontmatter.image}
      />
    ))}
  </Flex>
)

export default PortfolioList
