import React from 'react'
//import { Link } from 'gatsby'

import style from '../styles/index.module.scss'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Features from '../components/features'
import Reasons from '../components/reasons'
import FeaturedThemes from '../components/featured-themes'

const IndexPage = () => (
  <Layout>
    <Hero />
    <div className={style.contentWrapper}
    >
    <FeaturedThemes />
    <section className={style.sectionQuote}
    >
      <div className={style.topWave}>
          <svg xmlns='http://www.w3.org/2000/svg' width='1920' viewBox='0 0 1920 253'>
              <path d='M0,0V242.6c49.51,3.19,80.85-14.85,137.48-46.35,116.72-64.93,202.06-74.41,277.13,8.89S542.25,73,633,66s132.6,75.65,222.4,55.42S1068.51-31,1240.51,9.75s160.22,200.74,264.39,170.89,125.46-98.79,203.36-79.85c64.65,15.77,100.49,121.11,177.74,87a218.89,218.89,0,0,1,34-12V0Z'
              fill='#36393f' />
          </svg>
      </div>
      <div className={style.quote}>
      A few reasons why almost 2 million people have chosen BetterDocs.
      </div>
    </section>
    <Features />
    <Reasons />
    </div>
  </Layout>
)

export default IndexPage
