import React from "react"
import { Themed } from "@theme-ui/mdx"
import Helmet from "react-helmet"
import { SkipNavLink } from "@reach/skip-nav"
import VisuallyHidden from "@reach/visually-hidden"
import "@reach/skip-nav/styles.css"
import SimpleReactLightbox from "simple-react-lightbox"

import Sidebar from "../components/Sidebar/sidebar"
import BurgerButton from "../components/Sidebar/burger-button"
import SidebarContext from "../context/SidebarContext"
import Main from "../components/ui/main"

const Layout = ({ children, header, footer }) => {
  const webfontURL =
    "/fonts/fonts.css"
  return (
    <SidebarContext.Consumer>
      {sidebarOptions => (
        <Themed.root>
          <Helmet>
            <link rel="stylesheet" href={webfontURL} />
            <meta
              name="viewport"
              content="width=device-width, minimum-scale=1"
            ></meta>
          </Helmet>
          <VisuallyHidden>
            <SkipNavLink>Saltar al contenido</SkipNavLink>
          </VisuallyHidden>
          <BurgerButton
            open={sidebarOptions.open}
            setOpen={sidebarOptions.toggleOpen}
          />
          <Sidebar
            open={sidebarOptions.open}
            setOpen={sidebarOptions.closeOnMobile}
          />
          <SimpleReactLightbox>
            <Main
              sidebarOpen={sidebarOptions.open}
              header={header}
              footer={footer}
            >
              {children}
            </Main>
          </SimpleReactLightbox>
        </Themed.root>
      )}
    </SidebarContext.Consumer>
  )
}

export default Layout
