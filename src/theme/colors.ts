const purple60 = `#E7B8FF`
const purple90 = `#993399`
const purple30 = `#D9BAE8`
const grey90 = `#1F1E24`
const black80 = `#1B1F23`
const lightBlue = `#B8FFFF`
const white = `#fff`
const lightWhite = `#DCDCDC`
const opaqueLightYellow = `rgba(255, 229, 100, 0.2)`
const opaqueLightWhite = `hsla(0, 0%, 100%, 0.2)`
const lightGray = `hsla(0, 0%, 0%, 0.2)`
const darkCyan = "#004f53"
const darkPurple = "#993399"
const lightCyan = "#91DEDE"
const darkBrown = '#130302'
const darkGray = '#0a0a0a'

const colors = {
  text: "#222",
  primary: darkCyan,
  background: white,
  hover: purple90,
  secondary: black80,
  muted: lightGray,
  highlight: opaqueLightYellow,
  heading: grey90,
  blogBg: "#eee",
  prism: {
    background: `#011627`,
    comment: `#809393`,
    string: `#addb67`,
    var: `#d6deeb`,
    number: `#f78c6c`,
    constant: `#82aaff`,
    punctuation: `#c792ea`,
    className: `#ffc98b`,
    tag: `#ffa7c4`,
    boolean: `#ff5874`,
    property: `#80cbc4`,
    namespace: `#b2ccd6`,
    highlight: `hsla(207, 95%, 15%, 1)`,
  },
  sidebar: {
    background: darkCyan,
    color: white,
    hover: lightBlue,
  },
  timeline: {
    workBG: darkCyan,
    academicBG: darkPurple,
    previousWorkBG: "#777",
    iconColor: "#fff",
  },
  modes: {
    dark: {
      text: lightWhite,
      background: darkBrown,
      primary: lightCyan,
      hover: purple30,
      secondary: lightWhite,
      muted: opaqueLightWhite,
      highlight: purple60,
      heading: white,
      blogBg: darkGray
    },
  },
}

export default colors
