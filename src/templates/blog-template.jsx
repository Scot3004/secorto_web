import React from "react"
import { graphql } from "gatsby"

import Layout from "../containers/layout"
import Seo from "../containers/seo"
import BlogPost from "../components/Blog/blog-post"
import HeaderLink from "../components/Header/header-link"
import { MDXProvider } from "@mdx-js/react"
import PostFooter from "../components/Footer/post-footer"

const BlogLink = <HeaderLink to="/blog">Blog</HeaderLink>

const BlogTemplate = ({
  data: { mdx, previous, next, site, avatar },
  location,
  children
}) => (
  <Layout header={BlogLink} footer={<PostFooter author={site.siteMetadata.author} job={site.siteMetadata.job} avatar={avatar} previous={previous} next={next} />}>
    <BlogPost
      title={mdx.frontmatter.title}
      date={mdx.frontmatter.date}
      image={mdx.frontmatter.image}
    >
      <MDXProvider>
        {children}
      </MDXProvider>
    </BlogPost>
  </Layout>
)

export const Head = () => <Seo title="Blog" />

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
        author
        job
      }
    }
  }
`

export default BlogTemplate
