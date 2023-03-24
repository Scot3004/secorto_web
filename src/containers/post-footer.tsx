import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { useAvatar } from "../hooks/use-avatar"
import BaseFooter from "../components/Footer/base-footer"
import Bio from "../components/Bio/bio"
import PostNavigation from "../components/Post/post-navigation"

const PostFooter = ({previous, next}) => {
  const avatar = useAvatar()
  const { author, job } = useSiteMetadata()

  return (
    <BaseFooter>
      <Bio author={author} job={job} avatar={avatar} />
      <PostNavigation previous={previous} next={next} />
    </BaseFooter>
  )
}

export default PostFooter
