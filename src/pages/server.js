import React from 'react'
import Helmet from 'react-helmet'
//import { Link } from 'gatsby'

import style from '../styles/index.module.scss'
import Layout from '../components/layout'
import Hero from '../components/index/hero'
import Features from '../components/index/features'
import Reasons from '../components/index/reasons'

const ServerPage = () => (
  <Layout>
      <Helmet>
            <title>BetterDocs Discord Server</title>
            <meta http-equiv="refresh" content="0;url=https://discord.gg/D4cAkXX" />
      </Helmet>
    <Hero />
    <div className={style.contentWrapper}
    >
    <Features />
    <section className={style.sectionQuote}
    >
      <div className={style.quote}>
      A few reasons why almost 2 million people have chosen BetterDocs.
      </div>
    </section>
    <Reasons />
    </div>
  </Layout>
)

export default ServerPage
