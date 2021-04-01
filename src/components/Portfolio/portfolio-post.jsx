/** @jsx jsx */
import { jsx } from 'theme-ui'
import PostHero from '../Post/post-hero'
import PostTitle from '../Post/post-title'

import { PlaylistAddCheck, Person } from '@emotion-icons/material-twotone'
import GalleryItems from '../Gallery/GalleryItems'
import GalleryWrapper from '../Gallery/GalleryWrapper'

export default ({ children, title, role, responsibilities, gallery, image }) => (
  <main>
    <PostHero image={image} />
    <PostTitle sx={{mt: 3 }}>{title}</PostTitle>
    <p>
      <Person size={24} sx={{
        position: "relative",
        top: "-2px"
      }}/>{role}
    </p>
    <p>
      <PlaylistAddCheck size={24}  sx={{
        position: "relative",
        top: "-2px"
      }}/>{responsibilities}</p>
    {children}
    <GalleryWrapper>
      <GalleryItems items={gallery} />
    </GalleryWrapper>
  </main>
)
