import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import PortfolioPost from "../components/Portfolio/portfolio-post"
import Seo from "../containers/seo"
import Layout from "../containers/layout"
import HeaderLink from "../components/Header/header-link"
import PostFooter from "../components/Footer/post-footer"

const PortfolioLink = <HeaderLink to="/portafolio">Portafolio</HeaderLink>

const PortfolioTemplate = ({
  data: { mdx, previous, next, avatar, site },
  location,
  children
}) => {
  return (
    <Layout header={PortfolioLink} footer={<PostFooter author={site.siteMetadata.author} job={site.siteMetadata.job} avatar={avatar} previous={previous} next={next} />}>
      <PortfolioPost
        title={mdx.frontmatter.title}
        role={mdx.frontmatter.role}
        responsibilities={mdx.frontmatter.responsibilities}
        image={mdx.frontmatter.image}
        gallery={mdx.frontmatter.gallery}
      >
        <MDXProvider>
          {children}
        </MDXProvider>
      </PortfolioPost>
    </Layout>
  )
}

export const Head = () => <Seo title="Portafolio" />

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
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        gallery {
          alt
          image {
            full: childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
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
    site {
      siteMetadata {
        author
        job
      }
    }
  }
`

export default PortfolioTemplate
