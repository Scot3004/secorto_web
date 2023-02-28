import React from "react"
import Sidebar from "../components/Sidebar/sidebar"
import BurgerButton from "../components/Sidebar/burger-button"
import SidebarContext from "../context/SidebarContext"
import Main from "../components/ui/main"
import VisuallyHidden from "../components/ui/visually-hidden"
import { MAIN_CONTENT_ID } from "../constants"

const Layout = ({ children, header, footer }) => {
  return (
    <SidebarContext.Consumer>
      {sidebarOptions => (
        <div>
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
        </div>
      )}
    </SidebarContext.Consumer>
  )
}

export default Layout
