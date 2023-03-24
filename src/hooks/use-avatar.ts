import { useStaticQuery, graphql } from "gatsby"
export const useAvatar = () => {
    const { avatar } = useStaticQuery(
    graphql`
      query AvatarQuery {
        avatar: file(absolutePath: { regex: "/avatar.(jpeg|jpg|gif|png)/" }) {
          childImageSharp {
            gatsbyImageData(width: 64, height: 64)
          }
        }
      }
    `
  )
  return avatar
}
