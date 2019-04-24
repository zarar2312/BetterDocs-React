import React from 'react'
import Helmet from 'react-helmet'
//import { Link } from 'gatsby'

//import style from '../styles/index.module.scss'
import Layout from '../components/layout'
import Hero from '../components/index/hero'
import Features from '../components/index/features'
import Reasons from '../components/index/reasons'
import styled from 'styled-components';

const ServerPage = () => (
  <Layout>
      <Helmet>
            <title>Discord Source Discord Server</title>
            <meta http-equiv="refresh" content="0;url=https://discord.gg/D4cAkXX" />
      </Helmet>
    <Hero />
    <Container>
      <Features />
      <Reasons />
    </Container>
  </Layout>
)

export default ServerPage

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
`