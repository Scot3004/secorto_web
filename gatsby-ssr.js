/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */
import CustomLayout from "./wrapRootElement"

export const wrapRootElement = CustomLayout

export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `es` })
}
