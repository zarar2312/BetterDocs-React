import React from 'react'
import styled from 'styled-components';
import MobileNavigationBar from '../components/header/mobile'
import DesktopNavigationBar from '../components/header/desktop'
import * as variable from 'src/styles/variables'

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
  @media ${variable.MidPoint} {
  }
`

const Container2 = styled.div`
  width: 100%;
  z-index: 100;
  max-width: 100%;
  transition: .2s linear background-color, .2s linear box-shadow;
  @media ${variable.MidPoint}  {
      height: unset;
      box-shadow: unset;
  }
`