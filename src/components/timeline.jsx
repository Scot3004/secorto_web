/** @jsxImportSource theme-ui */

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { Star } from "@emotion-icons/material-twotone"
import TimelineElement from "./timelineElement"

import { useThemeUI } from "theme-ui"

const Timeline = ({ data }) => {
  const { theme } = useThemeUI()

  const isBrowser = typeof window !== "undefined"
  const animationsEnabled = isBrowser ?
    window.matchMedia('(prefers-reduced-motion: no-preference)').matches === true
    : true
  return (
    <VerticalTimeline
      animate={animationsEnabled}
      sx={{
        "&.vertical-timeline::before": {
          background: theme.colors.primary,
          width: 4,
          transition: "all 0.3s linear",
        },
        ".vertical-timeline-element-icon": {
          boxShadow: "0 4px 40px 0 rgba(0,0,0,0.07)",
        },
        ".vertical-timeline-element-content, .vertical-timeline-element-content-arrow":
          {
            transition: "all 0.3s linear",
          },
      }}
    >
      {data.map((item, index) => (
        <TimelineElement item={item} key={index} />
      ))}
      <VerticalTimelineElement
        iconStyle={{
          background: theme.colors.timeline.previousWorkBG,
          color: theme.colors.timeline.iconColor,
        }}
        icon={<Star title="Fin de sección de logros" />}
      ></VerticalTimelineElement>
    </VerticalTimeline>
  )
}

export default Timeline
