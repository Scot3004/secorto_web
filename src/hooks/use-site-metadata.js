import { useStaticQuery, graphql } from "gatsby"
export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            description
            author {
              name
              job
            }
            siteUrl
            social {
              name
              url
            }
          }
        }
      }
    `
  )
  return site.siteMetadata
}
