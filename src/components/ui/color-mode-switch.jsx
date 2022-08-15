/** @jsx jsx */
import { jsx } from "theme-ui"

import { useColorMode } from "theme-ui"
import { Switch } from 'theme-ui'
import sun from "../../assets/sun.png"
import moon from "../../assets/moon.png"

const LabelTema = ({text, alt, iconSrc}) => (
  <div
  >
    <img
      alt={alt}
      src={iconSrc}
      width="16"
      height="16"
      role="presentation"
      sx={{
        mr: "0.5rem"
      }}
    />
  <span sx={{color: "#fff"}}>{text}</span>
</div>
)

const labelDark = <LabelTema text="Modo oscuro" alt="Luna" iconSrc={moon} />
const labelLight = <LabelTema text="Modo claro" alt="Sol" iconSrc={sun} />

const ColorModeSwitch = ({ afterToggle, ...props }) => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = e => {
    setColorMode(isDark ? `light` : `dark`)
    setTimeout(function () {
      afterToggle()
    }, 400)
  }

  const switchLabel = isDark ? labelDark : labelLight

  return (
    <div
    sx={{margin: "1rem 0.5rem"}}>
    <Switch
      label={switchLabel}
      {...props}
      aria-label="Activar tema oscuro"
      aria-checked={isDark}
      checked={isDark}
      onChange={toggleColorMode}
      sx={{
        'input:checked ~ &': {
          backgroundColor: "background"
        }

      }}
    />
    </div>
  )
}

export default ColorModeSwitch
