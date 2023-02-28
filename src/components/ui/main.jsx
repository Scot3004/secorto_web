/** @jsx jsx */
import { Container, jsx } from "theme-ui"
import { MAIN_CONTENT_ID } from "../../constants"

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
    <main sx={{pb: "5.3rem"}} id={MAIN_CONTENT_ID}>
      <Container>
        {children}
      </Container>
    </main>
    {footer}
  </div>
)

export default Main
