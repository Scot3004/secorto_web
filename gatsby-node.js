const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require("path")

const contentTemplate = {
  blog: `./src/templates/blog-template.jsx`,
  portafolio: `./src/templates/portafolio-template.jsx`,
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode, basePath: `blog` })
    const contentType = getNode(node.parent).sourceInstanceName
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
  }

  const posts = result.data.allMdx.edges

  posts.forEach(({ node, previous, next }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(contentTemplate[node.fields.contentType]),
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
    query {
      allMdx(
        filter: { fields: { contentType: { eq: "blog" } } }
        sort: { fields: frontmatter___date }
      ) {
        edges {
          node {
            id
            fields {
              slug
              contentType
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
    query {
      allMdx(
        filter: { fields: { contentType: { eq: "portafolio" } } }
        sort: { fields: frontmatter___title }
      ) {
        edges {
          node {
            id
            fields {
              slug
              contentType
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
