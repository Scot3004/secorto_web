/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */
import React from 'react';
import CustomLayout from "./wrapRootElement"

export const wrapRootElement = CustomLayout
const webfontURL = "/fonts/fonts.css"

export const onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: `es` })
  setHeadComponents([
    <link
      rel="stylesheet"
      href={webfontURL}
      key="webFont"
    />,
    <link
      rel="preload"
      href="/fonts/kalam-v16-latin-regular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="preloadFontKalam"
    />,
    <link
      rel="preload"
      href="/fonts/alegreya-sans-v21-latin-500.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="preloadFontAlegreya"
    />
  ])
}
