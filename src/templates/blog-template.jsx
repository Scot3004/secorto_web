import React from "react"
import { graphql } from "gatsby"

import Layout from "../containers/layout"
import Seo from "../containers/seo"
import BlogPost from "../components/Blog/blog-post"
import HeaderLink from "../components/Header/header-link"
import { MDXRenderer } from "gatsby-plugin-mdx"
import PostFooter from "../components/Footer/post-footer"

const BlogLink = <HeaderLink to="/blog">Blog</HeaderLink>

const BlogTemplate = ({
  data: { mdx, previous, next, site, avatar },
  location,
}) => (
  <Layout location={location} header={BlogLink} footer={<PostFooter author={site.siteMetadata.author} avatar={avatar} previous={previous} next={next} />}>
    <Seo title={mdx.frontmatter.title} />
    <BlogPost
      title={mdx.frontmatter.title}
      date={mdx.frontmatter.date}
      image={mdx.frontmatter.image}
    >
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </BlogPost>
  </Layout>
)

export const pageQuery = graphql`
  query BlogPostQuery($id: String, $previous: String, $next: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
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

export default BlogTemplate
