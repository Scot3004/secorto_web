/** @jsx jsx */
import { Container, jsx } from "theme-ui"
import BaseFooter from "./base-footer"
import PostNavigation from "../Post/post-navigation"
import Bio from "../Bio/bio"

const PostFooter = ({ author, avatar, previous, next }) => (
  <BaseFooter>
    <Container >
      <div>
        <Bio author={author} avatar={avatar} />
        <PostNavigation previous={previous} next={next} />
      </div>

    </Container>
  </BaseFooter>
)
export default PostFooter
