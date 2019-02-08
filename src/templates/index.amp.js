import React from 'react'
//import Layout from '../components/layout'
import Helmet from 'react-helmet'

export default ({ data }) => (
  <div>
    <Helmet>
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, shrink-to-fit=no" />
    </Helmet>
    <h1>AMP PAGE</h1>
    <p>amp page content</p>
  </div>
)