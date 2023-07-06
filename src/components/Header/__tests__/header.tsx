import { ThemeUIProvider } from "@theme-ui/theme-provider"
import * as React from "react"
import renderer from "react-test-renderer"
import Header from "../header"

const theme = {
  colors: {
    primary: "red",
  },
}

describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <ThemeUIProvider theme={theme}>
          <Header>header content</Header>
        </ThemeUIProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
