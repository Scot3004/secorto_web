import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Hero = ({ image, alt }) => {
  const img = getImage(image)
  return <>{img && <GatsbyImage image={img} alt={alt} />}</>
}

export default Hero
