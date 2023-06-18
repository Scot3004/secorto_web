const customStyles = {
  root: {
    fontFamily: `body`
  },
  pre: {
    variant: `prism`,
    fontFamily: `monospace`,
    tabSize: 4,
    hyphens: `none`,
    marginBottom: 2,
    color: `white`,
    bg: `prism.background`,
    overflow: `auto`,
    borderRadius: 10,
    p: 3,
  },
  code: {
    fontFamily: `monospace`,
    // from typography overrideThemeStyles
    // "h1 code, h2 code, h3 code, h4 code, h5 code, h6 code"
    fontSize: `inherit`,
  },
  inlineCode: {
    borderRadius: `0.3em`,
    color: `secondary`,
    bg: `highlight`,
    paddingTop: `0.15em`,
    paddingBottom: `0.05em`,
    paddingX: `0.2em`,
  },
  // from typography overrideThemeStyles
  a: {
    color: `primary`,
    ":hover": {
      color: `hover`,
    },
    overflowWrap: "break-word",
    wordWrap: "break-word"
  },
  hr: {
    borderColor: `muted`,
  },
  p: {
    code: {
      fontSize: `inherit`,
    },
    textAlign: `justify`,
  },
  li: {
    code: {
      fontSize: `inherit`,
    },
  },
  blockquote: {
    color: `inherit`,
    borderLeftColor: `inherit`,
    opacity: 0.8,
    "&.translation": {
      fontSize: `1em`,
    },
  },
  navLink: {
    fontSize: 24,
    fontFamily: "heading",
    color: "primary",
    p: [1, 2],
    textDecoration: "none",
    ":hover": {
      color: "sidebar.hover",
    },
  },
}

export default customStyles
