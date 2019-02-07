import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'
import Footer from './footer'
import './layout.css'
import Announcement from './announcement';
//import Logo from "../images/mobile.png"
//<link rel="manifest" href="/site.webmanifest"/>
//var time = new Date().getHours();
//<html lang="en" class={0 <= time&&time < 7 && "dark"} id={17 <= time&&time < 24 && "dark"} /> 
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
    render={(data) => (
      <div className="mobile-version">
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'A Discord enhancement project. Free quality Themes, Plugins and Hacks for Discord and easy installation instructions for BetterDiscord and more!' },
            { name: 'keywords', content: 'Discord, BetterDiscord, EnhancedDiscord, TwitchCord, Discord Hacks, Hacks, Mods, Discord Themes, Themes, Discord Plugins, Plugins, Discord Bots, Bots, Discord Servers, Discord Style, Styles' },
          ]}
        >
          <meta name="msvalidate.01" content="2907AD22A611E606FD26FA8AA6CA2DB4" />
          <meta property="og:site_name" content="BetterDocs"/>
          <meta property="og:image" content="https://i.imgur.com/B0vcfRw.png"/>
          <meta property="og:title" content={data.site.siteMetadata.title}/>
          <meta name="description" content="A Discord enhancement project. Free quality Themes, Plugins and Hacks for Discord and easy installation instructions for BetterDiscord and more!" />
          <meta property="og:description" content="A Discord enhancement project. Free quality Themes, Plugins and Hacks for Discord and easy installation instructions for BetterDiscord and more!"/>
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://betterdocs.us" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0a0a0a"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <meta name="msapplication-TileColor" content="#0a0a0a"/>
          <meta name="msapplication-TileImage" content="/mstile-144x144.png"/>
          <meta name="theme-color" content="#0a0a0a"/>
          
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Announcement />
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
