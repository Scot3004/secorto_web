/** @jsxImportSource theme-ui */
import { Link } from "gatsby"
import { Flex, Link as ThemedLink } from "theme-ui"
import { ArrowBack, ArrowForward } from "@emotion-icons/material-twotone"

const NavigationLink = ({ node, rel, children }) => (
  <div sx={{ p: "10px 0" }}>
    {node && (
      <ThemedLink
        as={Link}
        sx={{ textDecoration: "none" }}
        to={node.fields.slug}
        rel={rel}
      >
        {children}
      </ThemedLink>
    )}
  </div>
)

const PostNavigation = ({ previous, next }) => (
  <div>
    {(previous || next) && (
      <Flex
        sx={{
          borderTop: theme => `1px solid ${theme.colors.primary}`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          transition: "all .3s linear",
          mb: "-36px",
        }}
      >
        <NavigationLink node={previous} rel="prev">
          <ArrowBack size={24} /> {previous?.frontmatter.title}
        </NavigationLink>
        <NavigationLink node={next} rel="next">
          {next?.frontmatter.title} <ArrowForward size={24} />
        </NavigationLink>
      </Flex>
    )}
  </div>
)

export default PostNavigation
