import React from "react"
import renderer from "react-test-renderer"
import BlogPost from "../blog-post"

describe("BlogPost", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <BlogPost title="blog-post" image="testImage" date="October 14, 2021">
          content
        </BlogPost>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
