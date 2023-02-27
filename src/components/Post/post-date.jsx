/** @jsx jsx */
import { jsx } from "theme-ui"
import { CalendarToday } from "@emotion-icons/material-twotone"

const PostDate = ({ children, ...props }) => (
  <div {...props}>
    <small>
      <CalendarToday
        size={16}
        sx={{
          position: "relative",
          top: "-2px",
        }}
        title="Fecha"
      />{" "}
      {new Intl.DateTimeFormat("es-CO", { dateStyle: "full" }).format(
        new Date(children)
      )}
    </small>
  </div>
)

export default PostDate
