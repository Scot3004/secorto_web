/** @jsx jsx */
import { Card, Text, jsx } from "theme-ui"
import { Themed } from "@theme-ui/mdx"
import { Link } from "gatsby"
import PostDate from "../Post/post-date"

const PostLink = ({ title, slug, date, excerpt, image }) => (
  <Card
    as={Link}
    to={slug}
    sx={{
      flex: ["0 1 100%", "0 1 45%"],
      padding: "1rem",
      mb: "1.5rem",
      background: "background"
    }}
  >
    <Text
      sx={{
        color: "primary",
        fontFamily: "heading"
      }}
    >
      <h2
        sx={{
          margin: 0,
          fontWeight: "heading"
        }}
      >
        {title}
      </h2>
      <PostDate sx={{ color: "text" }}>{date}</PostDate>
      <Themed.p
        sx={{
          color: "text",
          margin: 0,
        }}
      >
        {excerpt}
      </Themed.p>
    </Text>
  </Card>
)

export default PostLink
