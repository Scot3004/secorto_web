import React from "react"
import { graphql } from "gatsby"

import Layout from "../containers/layout"
import Seo from "../containers/seo"
import FooterContainer from "../containers/footer-container"
import Header from "../components/Header/header"
import PortfolioList from "../components/Portfolio/portfolio-list"

const PortfolioPosts = ({ data, location }) => (
  <Layout location={location} header={<Header>Portafolio</Header>} footer={ <FooterContainer />}>
    <Seo title="Portafolio" />
    <PortfolioList posts={data.allMdx.edges} />
  </Layout>
)

export const Head = () => <Seo title="Portafolio" />

export const query = graphql`
  {
    allMdx(
      filter: { fields: { contentType: { eq: "portafolio" } } }
      sort: { frontmatter: { title: ASC } }
    ) {
      edges {
        node {
          fields{
            slug
          }
          excerpt
          frontmatter {
            title
            image {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, aspectRatio: 1.7)
              }
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        social {
          name
          url
        }
      }
    }
  }
`

export default PortfolioPosts
