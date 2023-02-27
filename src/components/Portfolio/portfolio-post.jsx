/** @jsx jsx */
import { jsx } from "theme-ui"
import PostHero from "../Post/post-hero"
import PostTitle from "../Post/post-title"

import { PlaylistAddCheck, Person } from "@emotion-icons/material-twotone"
import Gallery from "../Gallery/Gallery"
import ContentWrapper from "../ui/content-wrapper"

const PortfolioPost = ({
  children,
  title,
  role,
  responsibilities,
  gallery,
  image,
}) => (
  <main>
    <PostHero image={image} alt={title} />
    <ContentWrapper>
      <PostTitle sx={{ mt: 3 }}>{title}</PostTitle>
      <p>
        <Person
          size={24}
          sx={{
            position: "relative",
            top: "-2px",
          }}
          title="Rol"
        />
        {role}
      </p>
      <p>
        <PlaylistAddCheck
          size={24}
          sx={{
            position: "relative",
            top: "-2px",
          }}
          title="Tareas"
        />
        {responsibilities}
      </p>
      {children}
      <Gallery items={gallery} galleryId="galeria-portafolio" />
    </ContentWrapper>
  </main>
)

export default PortfolioPost
