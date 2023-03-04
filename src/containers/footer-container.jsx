import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { useAvatar } from "../hooks/use-avatar"
import BaseFooter from "../components/Footer/base-footer"
import SocialLinks from "../components/Footer/social-links"
import Bio from "../components/Bio/bio"

const FooterContainer = () => {
  const avatar = useAvatar()
  const { social, author, job } = useSiteMetadata()

  return (
    <BaseFooter>
      <Bio author={author} job={job} avatar={avatar} />
      <SocialLinks title={"Sígueme en: "} socialLinks={social} />
    </BaseFooter>
  )

}

export default FooterContainer
