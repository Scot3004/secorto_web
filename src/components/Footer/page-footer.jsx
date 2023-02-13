/** @jsx jsx */
import { Container, jsx } from "theme-ui"
import { Themed } from "@theme-ui/mdx"

import { Fragment } from "react"
import Bio from "../Bio/bio"
import BaseFooter from "./base-footer"

const PageFooter = ({ socialLinks, author, job, avatar }) => (
  <BaseFooter>
    <Container>
      <Bio author={author} job={job} avatar={avatar} />
      <div
        sx={{textAlign: "center"}}
      >
        Sígueme en:{" "}
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
    </Container>
  </BaseFooter>
)
export default PageFooter
