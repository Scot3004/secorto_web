/** @jsx jsx */
import { jsx } from "theme-ui"
import { SkipNavContent } from "@reach/skip-nav"

const Main = ({ children, sidebarOpen, header, footer }) => (
  <div
    sx={{
      ml: [0, 0, sidebarOpen ? theme => theme.sizes.sidebar : 0],
      transition: "margin-left 0.3s ease-in-out;",
      minHeight: "98vh",
      position: "relative"
    }}
  >
    {header}
    <SkipNavContent />
    <div
      sx={{
        maxWidth: `container`,
        mx: `auto`,
        px: 3,
        py: 3
      }}
    >
      {children}
    </div>
    {footer}
  </div>
)

export default Main
