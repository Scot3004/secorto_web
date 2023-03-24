import * as React from "react"
import renderer from "react-test-renderer"
import PortfolioPost from "../portfolio-post"

const gallery = [
  {
    image: {
      publicURL: "srcImg1",
      thumbnail: "thumbImg1",
    },
    alt: "img1",
  },
  {
    image: {
      publicURL: "srcImg2",
      thumbnail: "thumbImg1",
    },
    alt: "img2",
  },
]

describe("PortfolioPost", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <PortfolioPost
          title="portfolio-post"
          role="my-role"
          responsibilities="my-responsibilities"
          gallery={gallery}
          image="testImage"
        >
          content
        </PortfolioPost>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
