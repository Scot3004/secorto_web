/** @jsx jsx */
import { jsx } from "theme-ui"

import { Flex } from "theme-ui"

import PortfolioLink from "./portfolio-link"

const PortfolioList = ({ posts }) => (
  <Flex
    sx={{
      flexWrap: "wrap",
      justifyContent: "center",
      gap: '3%'
    }}
  >
    {posts.map(({ node }) => (
      <PortfolioLink
        key={node.slug}
        title={node.frontmatter.title}
        slug={node.slug}
        image={node.frontmatter.image}
      />
    ))}
  </Flex>
)

export default PortfolioList
