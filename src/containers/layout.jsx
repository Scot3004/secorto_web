import React from "react"
import Sidebar from "../components/Sidebar/sidebar"
import BurgerButton from "../components/Sidebar/burger-button"
import SidebarContext from "../context/SidebarContext"
import Main from "../components/ui/main"
import VisuallyHidden from "../components/ui/visually-hidden"
import { MAIN_CONTENT_ID } from "../constants"
import { ThemeProvider } from "theme-ui"
import { useThemedStylesWithMdx } from '@theme-ui/mdx'
import { MDXProvider, useMDXComponents } from '@mdx-js/react'
import theme from "../theme"

const Layout = ({ children, header, footer }) => {
  const components = useThemedStylesWithMdx(useMDXComponents())
  return (
    <SidebarContext.Consumer>
      {sidebarOptions => (
        <ThemeProvider theme={theme}>
          <MDXProvider components={components}>
            <VisuallyHidden>
              <a href={`#${MAIN_CONTENT_ID}`}>Saltar al contenido</a>
            </VisuallyHidden>
            <BurgerButton
              open={sidebarOptions.open}
              setOpen={sidebarOptions.toggleOpen}
            />
            <Sidebar
              open={sidebarOptions.open}
              setOpen={sidebarOptions.closeOnMobile}
            />
            <Main
              sidebarOpen={sidebarOptions.open}
              header={header}
              footer={footer}
            >
              {children}
            </Main>
          </MDXProvider>
        </ThemeProvider>
      )}
    </SidebarContext.Consumer>
  )
}

export default Layout
