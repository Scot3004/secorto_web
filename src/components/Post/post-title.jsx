/** @jsx jsx */
import { jsx } from "theme-ui"
import { Themed } from "@theme-ui/mdx"

// eslint-disable-next-line react/jsx-pascal-case
const PostTitle = props => <Themed.h1 sx={{ color: "primary" }} {...props} />

export default PostTitle
