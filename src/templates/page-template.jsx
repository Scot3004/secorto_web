import React from "react"
import Layout from "../containers/layout"
import Header from "../components/Header/header"
import ContentWrapper from "../components/ui/content-wrapper"
import FooterContainer from "../containers/footer-container"

const PageTemplate = ({ children, title, pageHeader }) => {
  pageHeader = pageHeader ? pageHeader : (
    <Header>{title}</Header>
  )

  const footer = <FooterContainer />

  return (
    <Layout header={pageHeader} footer={footer}>
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </Layout>
  )
}

export default PageTemplate
