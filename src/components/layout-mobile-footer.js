import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import './layout.css'
//import Logo from "../images/mobile.png"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteSecondTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="mobile-version">
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'A Discord enhancement project. Free quality Themes, Plugins and Hacks for Discord and easy installation instructions for BetterDiscord and more!' },
            { name: 'keywords', content: 'Discord, BetterDiscord, EnhancedDiscord, TwitchCord, Discord Hacks, Hacks, Mods, Discord Themes, Themes, Discord Plugins, Plugins, Discord Bots, Bots, Discord Servers, Discord Style, Styles' },
          ]}
        >
          <meta property="og:site_name" content="BetterDocs"/>
          <meta property="og:image" content="https://i.imgur.com/B0vcfRw.png"/>
          <meta property="og:title" content={data.site.siteMetadata.title}/>
          <meta name="description" content="A Discord enhancement project. Free quality Themes, Plugins and Hacks for Discord and easy installation instructions for BetterDiscord and more!" />
          <meta property="og:description" content="A Discord enhancement project. Free quality Themes, Plugins and Hacks for Discord and easy installation instructions for BetterDiscord and more!"/>
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://betterdocs.us" />
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
        <Footer />
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
