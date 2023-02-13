import React from "react"
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
        <div>
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
        </div>
      )}
    </SidebarContext.Consumer>
  )
}

export default Layout
