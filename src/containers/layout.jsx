import React from "react"
import { Themed } from "@theme-ui/mdx"
import { SkipNavLink } from "@reach/skip-nav"
import VisuallyHidden from "@reach/visually-hidden"
import "@reach/skip-nav/styles.css"

import Sidebar from "../components/Sidebar/sidebar"
import BurgerButton from "../components/Sidebar/burger-button"
import SidebarContext from "../context/SidebarContext"
import Main from "../components/ui/main"

const Layout = ({ children, header, footer }) => {
  return (
    <SidebarContext.Consumer>
      {sidebarOptions => (
        <Themed.root>
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
          <Main
            sidebarOpen={sidebarOptions.open}
            header={header}
            footer={footer}
          >
            {children}
          </Main>
        </Themed.root>
      )}
    </SidebarContext.Consumer>
  )
}

export default Layout
