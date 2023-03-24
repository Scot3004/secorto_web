/** @jsxImportSource theme-ui */
import { Container } from "theme-ui"

const BaseFooter = ({ children }) => (
  <footer
    sx={{
      mt: "1rem",
      mx: 0,
      position: "absolute",
      bottom: 0,
      width: "100%",
      height: "6rem",
      px: 3,
      "@media print": {
        display: "none"
      }
    }}
  >
    <Container>
      {children}
    </Container>
  </footer>
)
export default BaseFooter
