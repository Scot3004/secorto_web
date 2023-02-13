/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useThemeUI } from "theme-ui"

function Seo({
  description,
  title,
  imageSource,
  imageAlt,
  children
}) {
  const { theme } = useThemeUI()
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const image = imageSource
    ? `${site.siteMetadata.siteUrl}${imageSource}`
    : null
  const imageAltText = imageAlt || metaDescription
  return (
    <>
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={imageAltText} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata?.author || ``} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:image:alt" content={imageAltText} />
      <meta
        name="viewport"
        content="width=device-width, minimum-scale=1"
      ></meta>
      <meta name="theme-color" content={theme.rawColors.primary} />
      {children}
    </>
  )
}

export default Seo
