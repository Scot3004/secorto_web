import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { useAvatar } from "../hooks/use-avatar"
import Footer from "../components/Footer/page-footer"

const FooterContainer = () => {
  const avatar = useAvatar()
  const { social, author, job } = useSiteMetadata()

  return <Footer socialLinks={social} author={author} job={job} avatar={avatar} />
}

export default FooterContainer
