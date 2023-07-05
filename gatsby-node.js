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
  blog: path.resolve(`./src/templates/blog-template.tsx`),
  portafolio: path.resolve(`./src/templates/portafolio-template.tsx`),
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

exports.onCreateWebpackConfig = ({
  stage, actions, getConfig, rules
}, { rule: ruleProps = {} }) => {
  const { include, exclude } = ruleProps

  if([
    'develop',
    'develop-html',
    'build-html',
    'build-javascript'
  ].includes(stage)) {
    // Add the svg-react-loader rule
    actions.setWebpackConfig({
      module: {
        rules: [
          //...
          {
            test: /\.svg$/,
            use: ['@svgr/webpack'],
          },
        ],
      }
    })
    const cfg = getConfig()
    const imgsRule = rules.images()

    const newUrlLoaderRule = (include || exclude) ? {
      ...imgsRule,
      include: exclude,
      exclude: include
    } : {
      ...imgsRule,
      test: new RegExp(imgsRule.test.toString().replace('svg|', '').slice(1, -1))
    }

    cfg.module.rules = [
      // Remove the base url-loader images rule entirely
      ...cfg.module.rules.filter(rule => {
        if(rule.test) {
          return rule.test.toString() !== imgsRule.test.toString()
        }
        return true
      }),
      // Put it back without SVG loading
      newUrlLoaderRule
    ]
    actions.replaceWebpackConfig(cfg)
  }
}
