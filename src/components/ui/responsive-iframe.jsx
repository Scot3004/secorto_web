/** @jsx jsx */
import { jsx } from "theme-ui"
import { useId } from "react";
const ResponsiveIFrame = ({children, ...props}) => {
  const iframeId = useId()
  return (
  <div sx={{
    position: "relative",
    overflow: "hidden",
    width: "100%",
    paddingTop: "56.25%" /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
  }}>
    <iframe
      id={iframeId}
      {...props}
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: "100%",
        height: "100%"
      }}>
      {children}
    </iframe>
  </div>
  )
}
export default ResponsiveIFrame
