/** @jsx jsx */
import { jsx } from "theme-ui"
import { Themed } from "@theme-ui/mdx"

import { Fragment } from "react"

const SocialLinks = ({ socialLinks, title }) => (
  <div sx={{ textAlign: "center" }}>
    {title}
    {socialLinks
      ? socialLinks.map((platform, i, arr) => (
          <Fragment key={platform.url}>
            <Themed.a
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {platform.name}
            </Themed.a>
            {arr.length - 1 !== i && <Fragment>, </Fragment>}
          </Fragment>
        ))
      : null}
  </div>
)

export default SocialLinks
