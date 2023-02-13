import React from "react"

import { SidebarProvider } from "./src/context/SidebarContext"

const wrapRootElement = ({ element }) => (
  <SidebarProvider>{element}</SidebarProvider>
)

export default wrapRootElement
