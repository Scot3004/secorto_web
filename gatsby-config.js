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
        description: `Sitio web de Sergio Orozco especialista en seguridad informática SDET perficient`,
        start_url: "/",
        background_color: "#004f53",
        theme_color: "#004f53",
        display: "standalone",
        icon: "content/img/logo.png",
        icons: [
          {
            src: "/icon/maskable_icon_x48.png",
            type: `image/png`,
            sizes: `48x48`,
            purpose: "maskable"
          },
          {
            src: "/icon/maskable_icon_x72.png",
            type: `image/png`,
            sizes: `72x72`,
            purpose: "maskable"
          },
          {
            src: "/icon/maskable_icon_x96.png",
            type: `image/png`,
            sizes: `96x96`,
            purpose: "maskable"
          },
          {
            src: "/icon/maskable_icon_x128.png",
            type: `image/png`,
            sizes: `128x128`,
            purpose: "maskable"
          },
          {
            src: "/icon/maskable_icon_x192.png",
            type: `image/png`,
            sizes: `192x192`,
            purpose: "maskable"
          },
          {
            src: "/icon/maskable_icon_x384.png",
            type: `image/png`,
            sizes: `384x384`,
            purpose: "maskable"
          },
          {
            src: "/icon/maskable_icon_x512.png",
            type: `image/png`,
            sizes: `512x512`,
            purpose: "maskable"
          },
          {
            src: "/icon/logo_48.png",
            type: `image/png`,
            sizes: `48x48`,
            purpose: "any"
          },
          {
            src: "/icon/logo_72.png",
            type: `image/png`,
            sizes: `72x72`,
            purpose: "any"
          },
          {
            src: "/icon/logo_96.png",
            type: `image/png`,
            sizes: `96x96`,
            purpose: "any"
          },
          {
            src: "/icon/logo_128.png",
            type: `image/png`,
            sizes: `128x128`,
            purpose: "any"
          },
          {
            src: "/icon/logo_192.png",
            type: `image/png`,
            sizes: `192x192`,
            purpose: "any"
          },
          {
            src: "/icon/logo_384.png",
            type: `image/png`,
            sizes: `384x384`,
            purpose: "any"
          },
          {
            src: "/icon/logo_512.png",
            type: `image/png`,
            sizes: `512x512`,
            purpose: "any"
          },
        ],
        crossOrigin: `use-credentials`,
        theme_color_in_head: true,
        shortcuts: [
          {
            name: "Blog",
            url: "/blog",
            description: "Entradas del blog",
            icons: [
              {
                src: "/icon/twotone_message_white_48dp.png",
                sizes: "96x96"
              }
            ],
          },
          {
            name: "Portafolio",
            url: "/portafolio",
            description: "Portafolio de experiencias",
            icons: [
              {
                src: "/icon/twotone_work_white_48dp.png",
                sizes: "96x96"
              }
            ],
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
