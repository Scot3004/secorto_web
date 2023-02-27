/** @jsx jsx */
import { jsx } from "theme-ui"

const VisuallyHidden = ({children, ...props}) => (
  <div sx={{
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: "1px",
    overflow: "hidden",
    position: "absolute",
    whiteSpace: "nowrap",
    width: "1px"
  }} {...props}>
    {children}
  </div>
)

export default VisuallyHidden
