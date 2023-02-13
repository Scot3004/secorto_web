/** @jsx jsx */
import { jsx } from "theme-ui"

import { Flex } from "theme-ui"

import PostLink from "./blog-link"

const PostList = ({ posts }) => (
  <Flex
    sx={{
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "3%",
      backgroundColor: "blogBg",
      p: '1rem',
      mt: "5px",
      transition: "background-color 0.3s linear",
    }}
  >
    {posts.map(({ node }) => (
      <PostLink
        key={node.fields.slug}
        title={node.frontmatter.title}
        date={node.frontmatter.date}
        excerpt={node.excerpt}
        slug={node.fields.slug}
      />
    ))}
  </Flex>
)

export default PostList
