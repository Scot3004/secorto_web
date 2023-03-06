import React from 'react';
import {  Themed } from "@theme-ui/mdx"
import Timeline from '../components/timeline'
import timelineData from '../../content/timeline.yml'
import PageTemplate from '../templates/page-template'
import Intro from '../assets/intro.inline.svg'
import Seo from '../containers/seo'
import About from '../blocks/about.mdx'
import { graphql } from 'gatsby';

export const pageQuery = graphql`
  query HomePageQuery {
    capturaHome: file(absolutePath: { regex: "/capturas/captura_homepage.jpg/" }) {
      publicURL
    }
  }
`

export const Head = ({data: { capturaHome }}) => (
  <Seo
    title="Sergio Carlos Orozco Torres. especialista en seguridad informática Software engineer in test para Perficient, organizador de python Barranquilla y ciclista"
    description="Pagina de inicio donde se presenta quien es Sergio Carlos Orozco Torres, motivaciones y que me llevo a crear este sitio web Y finaliza con un timeline que muestra las experiencias y los estudios realizados"
    imageSource={capturaHome.publicURL}
    imageAlt="Captura de pantalla de la página de inicio"
  />
)

const IndexPage = () => (
<PageTemplate pageHeader={<Intro style={{background: '#1f1e24'}}/>}>
  <About/>
  <Themed.h2>Mis logros</Themed.h2>
  <Timeline data={timelineData} />
</PageTemplate>
)

export default IndexPage
