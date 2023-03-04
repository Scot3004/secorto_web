import React from "react"
import { graphql } from "gatsby"

import Layout from "../containers/layout"
import Seo from "../containers/seo"
import FooterContainer from "../containers/footer-container"
import Header from "../components/Header/header"
import PostList from "../components/Blog/blog-list"

const BlogPosts = ({ data, location }) => (
  <Layout location={location} header={<Header>Blog</Header>} footer={<FooterContainer />}>
    <Seo title="Blog" />
    <PostList posts={data.allMdx.edges} />
  </Layout>
)

export const Head = () => <Seo title="Blog" />

export const query = graphql`
  {
    allMdx(
      filter: { fields: { contentType: { eq: "blog" } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          fields{
            slug
          }
          excerpt
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

export default BlogPosts
