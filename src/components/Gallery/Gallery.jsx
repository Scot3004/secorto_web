/** @jsx jsx */
import { jsx } from "theme-ui"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import PhotoSwipeAdapter from './PhotoSwipeAdapter';

const Gallery = ({ items, galleryId }) => (
  <PhotoSwipeAdapter galleryId={galleryId} childElement='a'>
    {items?.map((item, index) => {
      const image = getImage(item.image.thumbnail)
      return (
        <a
          href={item.image.publicURL}
          target="_blank"
          rel="noreferrer"
          key={galleryId + '-' + index}
          sx={{
            "m": "0.5rem"
          }}
        >
          <GatsbyImage image={image} alt={item.alt} />
        </a>
      )
    })}
  </PhotoSwipeAdapter>
)

export default Gallery
