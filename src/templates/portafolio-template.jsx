import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import PortfolioPost from "../components/Portfolio/portfolio-post"
import Seo from "../containers/seo"
import Layout from "../containers/layout"
import HeaderLink from "../components/Header/header-link"
import PostFooter from "../components/Footer/post-footer"

const PortfolioLink = <HeaderLink to="/portafolio">Portafolio</HeaderLink>

const PortfolioTemplate = ({
  data: { mdx, previous, next, avatar, site },
  location,
}) => {
  return (
    <Layout location={location} header={PortfolioLink} footer={<PostFooter author={site.siteMetadata.author} avatar={avatar} previous={previous} next={next} />}>
      <Seo title={mdx.frontmatter.title} />
      <PortfolioPost
        title={mdx.frontmatter.title}
        role={mdx.frontmatter.role}
        responsibilities={mdx.frontmatter.responsibilities}
        image={mdx.frontmatter.image}
        gallery={mdx.frontmatter.gallery}
      >
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </PortfolioPost>
    </Layout>
  )
}

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
        author {
          name
          job
        }
      }
    }
  }
`

export default PortfolioTemplate
