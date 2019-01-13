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
        <svg preserveAspectRatio='none' width='1920'viewBox='0 0 1920 330'
              >
            <path className={style.blob} d='M140.881198,194.260295 C257.600568,129.32862 342.939626,119.84993 418.009939,203.154617 C493.080251,286.459305 545.728689,70.9046172 636.439626,63.9593047 C727.150564,57.0139922 768.99822,139.670242 858.802907,119.431961 C948.607595,99.1936797 1071.91228,-32.9977266 1243.91228,7.75227342 C1415.91228,48.5022734 1404.10369,208.584305 1508.27166,178.709305 C1612.43963,148.834305 1633.73291,79.913472 1711.63588,98.8569055 C1776.28676,114.577866 1819.96778,221.391836 1889.37253,185.808108 C2017.32661,120.206212 2004.01952,336.769569 2004.01952,336.769569 L271.635881,337 L-149.063338,337 C-149.063338,337 -245.850307,175.637635 -58.0633382,228.867188 C33.8652851,254.92501 64.1722713,236.933925 140.881198,194.260295 Z'
            />
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
