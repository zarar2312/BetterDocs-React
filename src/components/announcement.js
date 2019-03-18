import React from 'react'
//import mystyles from '../styles/header.module.scss'
//import AniLink from "gatsby-plugin-transition-link/AniLink"
import { StaticQuery, graphql } from 'gatsby'
//import style from '../styles/announcement.module.scss'
//import Headroom from 'react-headroom';
import CookieBanner from 'react-cookie-banner';
import styled from 'styled-components';
import * as variable from 'src/styles/variables'
import { darken } from 'polished'

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
        <Banner
      message={data.site.siteMetadata.announcement}
      onAccept={() => {}}
      cookie="user-has-accepted-cookies"
      buttonMessage="I understand"
      dismissOnScroll={false}
      disableStyle={true}/>
      
    )}
  />
)}}

export default Announcement

const Banner = styled(CookieBanner)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${variable.SiteColor};
  flex-direction: column;
  padding: 15px 55px;
  padding-top: 20px;
  @media ${variable.MidPoint} {
    flex-direction: row;
    padding: 10px 30px;
  }
  span {
    font-size: 0.6rem;
    color: rgba( 255,255,255, 0.9);
    justify-self: center;
  }
  button {
    color: #fff;
    background-color: transparent;
    border-radius: 3px;
    line-height: unset;
    padding: 2px 9px;
    margin-top: 7px;
    justify-self: center;
    transition: 250ms ease-in-out;
    height: 1.2rem;
    margin-left: 10px;
    border: unset;
    font-size: 0.6rem;
    font-weight: bold;
    align-self: flex-end;
    border: 1px solid rgba( 255,255,255, 0.55);
    @media ${variable.MidPoint} {
        margin-top: unset;
    }
    &:hover {
        background-color: ${darken(0.1, variable.SiteColor)};
        color: #fff;
        cursor: pointer;
    }
    &:focus, &:active {
        opacity: 0.8;
        outline: 0;
    }
  }
`