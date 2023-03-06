import React from "react"
import { graphql } from "gatsby"

import Layout from "../containers/layout"
import Seo from "../containers/seo"
import FooterContainer from "../containers/footer-container"
import Header from "../components/Header/header"
import PortfolioList from "../components/Portfolio/portfolio-list"

const PortfolioPosts = ({ data, location }) => (
  <Layout location={location} header={<Header>Portafolio</Header>} footer={ <FooterContainer />}>
    <PortfolioList posts={data.allMdx.edges} />
  </Layout>
)

export const Head = ({data: { capturaPortafolio }}) => (
  <Seo
    title="Portafolio"
    description="Portafolio de experiencias de Sergio Carlos Orozco Torres"
    imageSource={capturaPortafolio.publicURL}
    imageAlt="Captura de pantalla del portafolio"
  />
)

export const query = graphql`
  query ListadoPortafolio {
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
    capturaPortafolio: file(absolutePath: { regex: "/capturas/captura_homepage.jpg/" }) {
      publicURL
    }
  }
`

export default PortfolioPosts
