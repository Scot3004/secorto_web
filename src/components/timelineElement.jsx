import React from "react"
import { VerticalTimelineElement } from "react-vertical-timeline-component"
import { School, Work } from "@emotion-icons/material-twotone"
import { useThemeUI } from "theme-ui"

const TimelineElement = ({ item }) => {
  const { theme } = useThemeUI()

  const timelineTypeProps = {
    academic: {
      icon: <School title="Educación" />,
      iconStyle: {
        background: theme.colors.timeline.academicBG,
        color: theme.colors.timeline.iconColor,
      },
    },
    work: {
      icon: <Work title="Trabajo" />,
      iconStyle: {
        background: theme.colors.timeline.previousWorkBG,
        color: theme.colors.timeline.iconColor,
      },
    },
    currentWork: {
      icon: <Work title="Trabajo" />,
      iconStyle: {
        background: theme.colors.timeline.workBG,
        color: theme.colors.timeline.iconColor,
      },
    },
  }

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: theme.colors.background,
        color: "theme.colors.text",
        border: `4px solid ${theme.colors.primary}`,
        boxShadow: "0 2px 40px 0 rgba(0,0,0,0.07)",
      }}
      contentArrowStyle={{ borderRight: `12px solid ${theme.colors.primary}` }}
      date={item.date}
      {...timelineTypeProps[item.type]}
    >
      <h3 className="vertical-timeline-element-title">{item.title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{item.place}</h4>
      <p>{item.location}</p>
    </VerticalTimelineElement>
  )
}

export default TimelineElement
