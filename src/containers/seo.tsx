/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

interface SeoProps {
  description: string
  title: string
  imageSource: any
  imageAlt?: string
  type: string
  children?: any
}

function Seo({
  description,
  title,
  imageSource,
  imageAlt,
  type,
  children
}: SeoProps) {
  const siteMetadata = useSiteMetadata()

  const metaDescription = description || siteMetadata.description
  const defaultTitle = siteMetadata?.title
  const image = imageSource
    ? `${siteMetadata.siteUrl}${imageSource}`
    : null
  const imageAltText = imageAlt || metaDescription
  return (
    <>
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:image:alt" content={imageAltText} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={siteMetadata?.author || ``} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta property="twitter:image:alt" content={imageAltText} />
      {image && <>
          <meta property="og:image" content={image} />
          <meta property="twitter:image" content={image} />
        </>
      }
      <meta
        name="viewport"
        content="width=device-width, minimum-scale=1"
      ></meta>
      {children}
    </>
  )
}

Seo.defaultProps = {
  type: "website"
}

export default Seo
