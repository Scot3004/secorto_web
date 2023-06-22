import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../containers/layout"
import Seo from "../containers/seo"
import FooterContainer from "../containers/footer-container"
import Header from "../components/Header/header"
import PostList from "../components/Blog/blog-list"

const BlogPosts = ({ data, location }) => (
  <Layout header={<Header isTitle>Blog</Header>} footer={<FooterContainer />}>
    <PostList posts={data.allMdx.edges} />
  </Layout>
)

export const Head = ({data: { capturaBlog }}) => (
  <Seo
    title="Blog"
    description="Blog de experiencias de Sergio Carlos Orozco Torres"
    imageSource={capturaBlog.publicURL}
    imageAlt="Captura de pantalla del blog"
  />
)

export const query = graphql`
query ListadoBlog {
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
    capturaBlog: file(absolutePath: { regex: "/capturas/captura_homepage.jpg/" }) {
      publicURL
    }
  }
`

export default BlogPosts
