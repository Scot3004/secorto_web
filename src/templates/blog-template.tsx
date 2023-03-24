import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../containers/layout"
import Seo from "../containers/seo"
import BlogPost from "../components/Blog/blog-post"
import HeaderLink from "../components/Header/header-link"
import PostFooter from "../containers/post-footer"

const BlogLink = <HeaderLink to="/blog">Blog</HeaderLink>

const BlogTemplate = ({
  data: { mdx, previous, next },
  children
}) => (
  <Layout header={BlogLink} footer={<PostFooter previous={previous} next={next} />}>
    <BlogPost
      title={mdx.frontmatter.title}
      date={mdx.frontmatter.date}
      image={mdx.frontmatter.image}
    >
      {children}
    </BlogPost>
  </Layout>
)

export const Head = ({data: { mdx }}) => (
  <Seo
    title={mdx.frontmatter.title}
    description={mdx.excerpt}
    imageSource={mdx.image}
    type="article"
>
  <meta property="og:article:published_time" content={mdx.frontmatter.date}></meta>
</Seo>
)

export const pageQuery = graphql`
  query BlogPostQuery($id: String, $previous: String, $next: String) {
    mdx(id: { eq: $id }) {
      id
      body
      excerpt
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
  }
`

export default BlogTemplate
