/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `SeCOrTo`,
    description: `Sitio web de Sergio Orozco`,
    siteUrl: `https://www.secorto.com`,
    author: "Sergio Carlos Orozco Torres",
    job: "Software developer",
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/scot3004`,
      },
      {
        name: `GitHub`,
        url: `https://github.com/scot3004`,
      },
      {
        name: "LinkedIn",
        url: `https://linkedin.com/in/scot3004`,
      },
    ],
    menuLinks: [
      {
        name: "Blog",
        link: "/blog",
      },
      {
        name: "Portafolio",
        link: "/portafolio",
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "SeCOrTo",
        short_name: "SeCOrTo",
        start_url: "/",
        background_color: "#004f53",
        theme_color: "#004f53",
        // Enables "Add to HomeScreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "content/img/logo.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
        theme_color_in_head: false,
        shortcuts: [
          {
            name: "Blog",
            url: "/blog",
            description: "Blog Posts",
          },
          {
            name: "Portafolio",
            url: "/portafolio",
            description: "Posts del portafolio",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-theme-ui",
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portafolio`,
        path: `${__dirname}/content/portafolio`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blocks`,
        path: `${__dirname}/src/blocks`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1380,
              linkImagesToOriginal: false,
            },
          },
          //{ resolve: `gatsby-remark-copy-linked-files` },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
      }
    }
  ],
}
