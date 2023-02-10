

import CustomLayout from "./wrapRootElement"

export const wrapRootElement = CustomLayout

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(`
    Hice cambios en este sitio web,
    ¿deseas recargar para aplicarlos?
  `)
  if (answer === true) {
    window.location.reload()
  }
}
