import * as React from "react";
import renderer from "react-test-renderer"
import Seo from "./seo"
import * as Gatsby from "gatsby"
import { ThemeProvider } from "theme-ui"

const useStaticQuery = jest.spyOn(Gatsby, `useStaticQuery`)
const mockUseStaticQuery = {
  site: {
    siteMetadata: {
      title: `Site metadata title`,
      siteUrl: 'https://example.site.metadata/',
      description: "Site metadata description"
    }
  }
}

const theme = {
  colors: {
    primary: "#fff",
  },
}

describe("Seo con titulo", () => {
  beforeEach(() => {
    useStaticQuery.mockImplementation(() => mockUseStaticQuery)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it("render Seo modelo blog", () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={theme}>
          <Seo title="Blog post" imageSource="imageSourceStub" imageAlt="Stub para el alt de imagen" description="description stub">
            <meta property="og:article:published_time" content="August 14, 2022"></meta>
          </Seo>
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
