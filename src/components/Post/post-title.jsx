/** @jsx jsx */
import { jsx } from "theme-ui"
import { Themed } from "@theme-ui/mdx"


const PostTitle = props => <Themed.h1 sx={{ color: "primary" }} {...props} />

export default PostTitle
