/** @jsx jsx */
import { jsx, Switch, Label, useColorMode } from "theme-ui"

import { LightMode, DarkMode } from "@emotion-icons/material-twotone"

const ColorModeSwitch = ({ afterToggle, ...props }) => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = e => {
    setColorMode(isDark ? `light` : `dark`)
    setTimeout(function () {
      afterToggle()
      // TODO: Eliminar, workaround debido a que el cambio de color no se está aplicando correctamente
      location.reload(true);
    }, 400)
  }

  const IconWrapper = ({children}) => (
    <div
      sx={{
        width:"100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer"
      }}
    >
      {children}
    </div>
  )

  return (
    <Label htmlFor="color-switch"
    sx={{
      margin: "1rem 0.5rem",
      display: "flex",
      alignItems: "center"
    }}>
      <IconWrapper>
        <LightMode sx={{color: "#fff"}} size={24} />
      </IconWrapper>


    <Switch
      id="color-switch"
      {...props}
      aria-label="Activar tema oscuro"
      aria-checked={isDark}
      checked={isDark}
      onChange={toggleColorMode}
      sx={{
        'input:checked ~ &': {
          backgroundColor: "background"
        },
        margin: "auto"
      }}
    />
      <IconWrapper>
        <DarkMode sx={{color: "#fff"}} size={24} />
      </IconWrapper>
    </Label>
  )
}

export default ColorModeSwitch
