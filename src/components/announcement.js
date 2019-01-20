import React from 'react'
//import mystyles from '../styles/header.module.scss'
//import AniLink from "gatsby-plugin-transition-link/AniLink"
import { StaticQuery, graphql } from 'gatsby'
import style from '../styles/announcement.module.scss'
//import Headroom from 'react-headroom';
import CookieBanner from 'react-cookie-banner';

class Announcement extends React.Component {

  componentDidMount () {

  }

  render () {
    return (
    <StaticQuery
    query={ graphql`
    query announcement {
        site {
            siteMetadata {
              announcement
            }
        }
    }  
  `}//<div className={style.header}>Why it is Special</div>
    render={data => (
        <CookieBanner
      message={data.site.siteMetadata.announcement}
      onAccept={() => {}}
      cookie="user-has-accepted-cookies"
      className={style.announcement}
      buttonMessage="I understand"
      dismissOnScroll={false}
      disableStyle={true}/>
      
    )}
  />
)}}

export default Announcement