const colorMode = (isDark: boolean, isMedia: boolean) => ({
  onBeforeLoad (win: any) {
    const callback = cy.stub(win, 'matchMedia')
    callback.withArgs('(prefers-color-scheme: dark)')
    .as(`dark-mode ${isDark}`)
    .returns({
      matches: isDark,
    })
    callback
    .as(`matchMedia ${isMedia}`)
    .returns({
      matches: isMedia,
    })
  },
})

export const darkMode = () => colorMode(true, true)

export const lightMode = () => colorMode(false, true)
