/** @jsx jsx */
import { jsx } from "theme-ui"
import { Flex, Box, Link } from "theme-ui"
import AvatarImg from "../../assets/avatar.jpg"

const Bio = ({ author, job }) => {
  return (
    <Flex
      sx={{
        my: 2,
        alignItems: `center`,
        borderTop: theme => `1px solid ${theme.colors.muted}`,
        pt: 2,
      }}
    >
      <img
        src={AvatarImg}
        alt={author}
        width={64}
        height={64}
        sx={{
          mr: 2,
          borderRadius: "50%",
        }}
      />
      <Box
        sx={{
          textAlign: 'center',
          margin: "auto"
        }}>
        <p sx={{
          fontFamily: "title",
          fontSize: "1.5rem",
          m: 0
        }}><Link sx={{
          textDecoration: 'none'
        }} href="https://www.secorto.com/">{author}</Link></p>
        <p sx={{
          m:0,
          fontSize: "0.8rem"
        }}>{job}</p>
      </Box>
    </Flex>
  )
}

export default Bio
