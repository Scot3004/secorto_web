import React from 'react';
import Timeline from '../components/timeline'
import timelineData from '../../content/timeline.yml'
import PageTemplate from '../templates/page-template'
import Intro from '../assets/intro.inline.svg'
import Seo from '../containers/seo'
import About from '../blocks/about.mdx'

export const Head = () => <Seo title="Home" />

const IndexPage = () => (
<PageTemplate pageHeader={<Intro style={{background: '#1f1e24'}}/>}>
  <About/>
  <Timeline data={timelineData} />
</PageTemplate>
)

export default IndexPage
