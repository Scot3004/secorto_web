import React from "react"
import { graphql } from "gatsby"
import PortfolioPost from "../components/Portfolio/portfolio-post"
import Seo from "../containers/seo"
import Layout from "../containers/layout"
import HeaderLink from "../components/Header/header-link"
import PostFooter from "../containers/post-footer"

const PortfolioLink = <HeaderLink to="/portafolio">Portafolio</HeaderLink>

const PortfolioTemplate = ({
  data: { mdx, previous, next },
  children
}) => {
  return (
    <Layout header={PortfolioLink} footer={<PostFooter previous={previous} next={next} />}>
      <PortfolioPost
        title={mdx.frontmatter.title}
        role={mdx.frontmatter.role}
        responsibilities={mdx.frontmatter.responsibilities}
        image={mdx.frontmatter.image}
        gallery={mdx.frontmatter.gallery}
      >
        {children}
      </PortfolioPost>
    </Layout>
  )
}

export const Head = ({data: { mdx }}) => (
  <Seo
    title={mdx.frontmatter.title}
    description={`Experiencia en ${mdx.frontmatter.title} ${mdx.frontmatter.role} donde mis tareas son ${mdx.frontmatter.responsibilities}`}
    imageSource={mdx.frontmatter.image.publicURL}
    type="article"
  >
  </Seo>
)


export const pageQuery = graphql`
  query PortafolioPostQuery($id: String, $previous: String, $next: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        role
        responsibilities
        image {
          publicURL
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        gallery {
          alt
          image {
            publicURL
            thumbnail: childImageSharp {
              gatsbyImageData(width: 200)
            }
          }
        }
      }
    }
    previous: mdx(id: { eq: $previous }) {
      id
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
    next: mdx(id: { eq: $next }) {
      id
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
  }
`

export default PortfolioTemplate
