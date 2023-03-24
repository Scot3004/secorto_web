import React from 'react';
import { Themed } from '@theme-ui/mdx'

const ExternalLink = ({children, ...props}) => (
  <Themed.a target="_blank" rel="noreferrer noopener" {...props}>
    {children}
  </Themed.a>
)

export default ExternalLink
