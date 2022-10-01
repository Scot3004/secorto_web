import React from 'react';
import { GatsbyImage, getSrc, getImage } from "gatsby-plugin-image"

const GalleryItems = ({ items, galleryId }) => (
  <>
    {items?.map((item, index) => {
      const image = getImage(item.image.thumbnail)
      return (
        <a
          href={getSrc(item.image.full)}
          target="_blank"
          rel="noreferrer"
          key={galleryId + '-' + index}
        >
          <GatsbyImage image={image} alt={item.alt} />
        </a>
      )
    })}
  </>
)

export default GalleryItems
