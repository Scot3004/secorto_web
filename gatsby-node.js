/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */
/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

 const { createFilePath } = require(`gatsby-source-filesystem`)
 const path = require("path")

 const contentTemplate = {
  blog: path.resolve(`./src/templates/blog-template.jsx`),
  portafolio: path.resolve(`./src/templates/portafolio-template.jsx`),
}

 exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const contentType = getNode(node.parent).sourceInstanceName
    const slug = createFilePath({ node, getNode, basePath: contentType })
    createNodeField({
      node,
      name: `contentType`,
      value: contentType,
    })
    createNodeField({
      node,
      name: `slug`,
      value: `/${contentType}${slug}`,
    })
  }
}

 const createPostTypePages = (result, actions, reporter, context) => {
  const { createPage } = actions

  if (result.errors) {
    reporter.panicOnBuild(`🚨  ERROR: Creating pages for '${context}'`)
    console.log(result.errors);
  }

  const posts = result.data.allMdx.edges

  posts.forEach(({ node, previous, next }) => {
    createPage({
      path: node.fields.slug,
      component: `${contentTemplate[node.fields.contentType]}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        slug: node.fields.slug,
        id: node.id,
        previous: previous ? previous.id : null,
        next: next ? next.id : null,
      },
    })
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const resultBlog = await graphql(`
    query BlogPostsQuery {
      allMdx(
        filter: { fields: { contentType: { eq: "blog" } } }
        sort: { frontmatter: { date: DESC } }
      ) {
        edges {
          node {
            id
            fields {
              slug
              contentType
            }
            internal {
              contentFilePath
            }
          }
          previous {
            id
          }
          next {
            id
          }
        }
      }
    }
  `)

  createPostTypePages(resultBlog, actions, reporter, "Blog")

  const resultPortafolio = await graphql(`
    query PortafolioPostsQuery {
      allMdx(
        filter: { fields: { contentType: { eq: "portafolio" } } }
        sort: { frontmatter: { title: ASC } }
      ) {
        edges {
          node {
            id
            fields {
              slug
              contentType
            }
            internal {
              contentFilePath
            }
          }
          previous {
            id
          }
          next {
            id
          }
        }
      }
    }
  `)

  createPostTypePages(resultPortafolio, actions, reporter, "Portafolio")
}
