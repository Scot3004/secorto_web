import React from "react"
import Layout from "./layout"
import Seo from "./seo"
import Header from "../components/Header/header"
import Footer from "../components/Footer/page-footer"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { useAvatar } from "../hooks/use-avatar"
import ContentWrapper from "../components/ui/content-wrapper"

const PageLayout = ({ location, children, metadata }) => {
  const avatar = useAvatar()
  const { title, social, author } = useSiteMetadata()

  const pageTitle = metadata?.title ? metadata.title : title
  const pageHeader = metadata?.header ? (
    metadata.header
  ) : (
    <Header>{pageTitle}</Header>
  )

  const footer = <Footer socialLinks={social} author={author} avatar={avatar} />

  return (
    <Layout location={location} header={pageHeader} footer={footer}>
      <Seo title={pageTitle} />
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </Layout>
  )
}

export default PageLayout
