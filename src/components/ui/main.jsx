/** @jsx jsx */
import { Container, jsx } from "theme-ui"

const Main = ({ children, sidebarOpen, header, footer }) => (
  <div
    sx={{
      ml: [0, 0, sidebarOpen ? theme => theme.sizes.sidebar : 0],
      transition: "margin-left 0.3s ease-in-out;",
      minHeight: "95vh",
      position: "relative"
    }}
  >
    {header}
    <Container>
      <div sx={{pb: "5.3rem"}} id="main-content">
        {children}
      </div>
    </Container>
    {footer}
  </div>
)

export default Main
