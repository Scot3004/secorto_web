/** @jsx jsx */
import { jsx, Container } from "theme-ui"

const BaseFooter = ({ children }) => (
  <footer
    sx={{
      mt: "1rem",
      mx: 0,
      position: "absolute",
      bottom: 0,
      width: "100%",
      height: "6rem",
      px: 3
    }}
  >
    <Container>
      {children}
    </Container>
  </footer>
)
export default BaseFooter
