import * as React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import BaseFooter from "../components/Footer/base-footer"
import SocialLinks from "../components/Footer/social-links"
import Bio from "../components/Bio/bio"

const FooterContainer = () => {
  const { social, author, job } = useSiteMetadata()

  return (
    <BaseFooter>
      <Bio author={author} job={job} />
      <SocialLinks title={"Sígueme en: "} socialLinks={social} />
    </BaseFooter>
  )

}

export default FooterContainer
