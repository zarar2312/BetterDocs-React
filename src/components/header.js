import React from 'react'
//import mystyles from '../styles/header.module.scss'
//import AniLink from "gatsby-plugin-transition-link/AniLink"
//import { Link } from 'gatsby'
//import Headroom from 'react-headroom';
//import '../styles/header.css'
import styled from 'styled-components';
import MobileNavigationBar from '../components/header/mobile'
import DesktopNavigationBar from '../components/header/desktop'

class Header extends React.Component {

  componentDidMount () {

  }

  render () {
    return (
  <Container>
    <Container2>

      <DesktopNavigationBar/>
      <MobileNavigationBar/>

    </Container2>
    <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
  </Container>
)}}

export default Header

const Container = styled.div`
  display: block;
  width: 100%;
  /*new*/
  z-index: 100;
  /*end-new*/
  @media (min-width: 850px) {
  }
`

const Container2 = styled.div`
  width: 100%;
  z-index: 100;
  max-width: 100%;
  transition: .2s linear background-color, .2s linear box-shadow;
  @media (min-width: 850px)  {
      height: unset;
      box-shadow: unset;
  }
`