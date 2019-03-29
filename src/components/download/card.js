import React from 'react'
//import style from 'src/styles/download.module.scss'
import 'src/styles/tooltips.css'
//import Tooltip from 'src/components/download/tooltip'
import styled from 'styled-components';
import * as variable from 'src/styles/variables'
import { darken } from "polished"
import { createGlobalStyle } from 'styled-components'

const downloadCard = ({children, title, download}) => (
<Card target="blank" alt={title}>
<GlobalStyle />
    <Header>
        <Title>{title}</Title>
        <Wave height='100' id='Layer_1' preserveAspectRatio='none' viewBox='0 0 300 100' width='300' xmlns='http://www.w3.org/2000/svg'>
            <Layer1 d='M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z'
            fill='#FFF' opacity='0.6' />
            <Layer2 d='M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z'
            fill='#FFF' opacity='0.6' />
            <Layer3 d='M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716	H42.401L43.415,98.342z'
            fill='#FFF' opacity='0.7' />
            <Layer4 d='M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z'
            fill='#FFF' />
        </Wave>
    </Header>
    <Body>
      <Features>
        {children}
      </Features>
    </Body>
    <Footer>
      <DownloadBtn
      href={download}
      target="blank"
      >Download</DownloadBtn>
    </Footer>
</Card>
)

export default downloadCard

const Wave = styled.svg`

`
const Layer1 = styled.path`

`
const Layer2 = styled.path`

`
const Layer3 = styled.path`

`
const Layer4 = styled.path`

`
const Title = styled.p`

`
const Body = styled.div`
  padding: 0.2rem 0;
  flex: 2;
`

const Features = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const DownloadBtn = styled.a`

`

const Footer = styled.div`
  flex: 1;
  padding: 0.5rem 1rem;
  border-top: 1px solid #eee;
  display: flex;
  flex-direction: row;
  justify-content: center;
  ${DownloadBtn} {
    font-size: 0.8rem;
    background-color: ${variable.SiteColor};
    color: #fff;
    line-height: unset;
    align-self: center;
    padding: 0.3rem 0.7rem;
    border-radius: 2px;
    transition: 300ms;
    &:hover, &:focus {
        background-color: ${darken(0.1, variable.SiteColor)};
        outline: unset;
    }
    &:active {
        background-color: ${darken(0.15, variable.SiteColor)};
    }
  }
`

const Header = styled.div`
  /*font-family: sans-serif; */
  /* font-weight: 200; */
  transition: ease-in-out 400ms;
  /* padding: 0.6rem 0.8rem 1.23rem 0.8rem; */
  border-top-left-radius: 0.55rem;
  border-top-right-radius: 0.55rem;
  position: relative;
  overflow: hidden;
  /* text-align: center; */
  flex: 1 1;
  display: flex;
  padding: 0.5rem 0rem 1.6rem 0rem;
  justify-content: center;
  flex-basis: 10%;
  @media ${variable.MidPoint} {
      padding: 0.5rem 0rem 0.85rem 0rem;
  }
  ${Title} {
      font-size: 1rem;
      color: #fff;
      /* display: flex; */
      /* padding: 0.6rem 0.8rem 1.23rem 0.8rem; */
      /* margin: 0.6rem 0.8rem 1.23rem 0.8rem; */
      text-align: center;
      margin: unset;
  }
  ${Wave} {
      position: absolute;
      height: 3rem;
      left: 0px;
      bottom: -25px;
      bottom: -1rem;
      width: 100%;
      @media ${variable.MidPoint} {
          bottom: -40px;
          bottom: -1.5rem;
      }
      ${Layer1} {
          transition: 300ms linear;
      }
      ${Layer2} {
          transition: 300ms linear;
      }
      ${Layer3} {
          transition: 300ms linear;
      }
      ${Layer4} {
          transition: 300ms linear;
      }
  }
`

const Card = styled.div`
  flex-basis: 27%;
  border: 1px solid #eff2f6;
  border-radius: 0.6rem;
  margin-top: 15px;
  display: block;
  transition-duration: 800ms;
  margin-bottom: 15px;
  animation-name: slideTop;
  animation-duration: 1s;
  @media ${variable.MidPoint} {
    margin-top: unset;
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;
  }
  &:hover {
    border-bottom-left-radius: 0px;
    -webkit-box-shadow: 0 10px 90px rgba(0, 0, 0, 0.08);
    box-shadow: 0 10px 90px rgba(0, 0, 0, 0.08);
    transform: translateY(-0.5em) !important;
  }
  &:nth-child(odd):hover {
    ${Wave} {
      ${Layer1} {
          -webkit-transform: translate3d(-15px,0,0);
          transform: translate3d(-15px,0,0);
      }
      ${Layer2} {
          -webkit-transform: translate3d(15px,0,0);
          transform: translate3d(15px,0,0);
      }
      /*.waveLayer3 {
          -webkit-transform: translate3d(15px,0,0);
          transform: translate3d(15px,0,0);
      }
      .waveLayer4 {
          -webkit-transform: translate3d(-15px,0,0);
          transform: translate3d(-15px,0,0);
      }*/
    }
  }
  &:nth-child(even):hover {
    ${Wave} {
      ${Layer1} {
          -webkit-transform: translate3d(15px,0,0);
          transform: translate3d(15px,0,0);
      }
      ${Layer2} {
          -webkit-transform: translate3d(-15px,0,0);
          transform: translate3d(-15px,0,0);
      }
      /*.waveLayer3 {
          -webkit-transform: translate3d(15px,0,0);
          transform: translate3d(15px,0,0);
      }
      .waveLayer4 {  
          -webkit-transform: translate3d(-15px,0,0);
          transform: translate3d(-15px,0,0);
      }*/
    }
  }
  &[alt="BandagedBD"] {
      border: 1px solid ${variable.BandagedBD};
      order: 1;
      ${Header} {
          background: ${variable.BandagedBD};
      }
      [class^="feature__Feature"] {
          color: ${variable.BandagedBD};
      }
      ${Footer} {
        ${DownloadBtn} {
          background-color: ${variable.BandagedBD};
        }
      }
  }
  &[alt="EnhancedDiscord"] {
      order: 2;
      ${Header} {
          background: ${variable.EnhancedDiscord};
      }
      [class^="feature__Feature"] {
          color: ${variable.EnhancedDiscord};
      }
      ${Footer} {
        ${DownloadBtn} {
          background-color: ${variable.EnhancedDiscord};
        }
      }
  }
  &[alt="BeautifulDiscord"] {
      order: 4;
      ${Header} {
          background: ${variable.BeautifulDiscord};
      }
      [class^="feature__Feature"] {
          color: ${variable.BeautifulDiscord};
      }
      ${Footer} {
        ${DownloadBtn} {
          background-color: ${variable.BeautifulDiscord};
        }
      }
  }
  &[alt="DiscordInjections"] {
      order: 5;
      ${Header} {
          background: ${variable.DiscordInjections};
      }
      [class^="feature__Feature"] {
          color: ${variable.DiscordInjections};
      }
      ${Footer} {
        ${DownloadBtn} {
          background-color: ${variable.DiscordInjections};
        }
      }
  }
  &[alt="Powercord"] {
      order: 3;
      ${Header} {
          background: ${variable.Powercord};
      }
      [class^="feature__Feature"] {
          color: ${variable.Powercord};
      }
      ${Footer} {
        ${DownloadBtn} {
          background-color: ${variable.Powercord};
        }
      }
  }
  &[alt="BetterDiscord"] {
      order: 6;
      position: relative;
      overflow: hidden;
      cursor: not-allowed;
      &:hover {
          .info {
              opacity: 1;
          }
      }
      ${Header} {
          background-color: ${variable.BetterDiscord};
      }
      [class^="feature__Feature"] {
          color: ${variable.BetterDiscord};
      }
      .info {
          display: flex;
          width: 100%;
          height: 100%;
          transition: 300ms linear;
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          opacity: 0;
          z-index: 1;
          background-color: rgba(255, 255, 255, 0.92);
          text-align: center;
          /* line-height: 2rem; */
          font-size: 0.9rem;
          word-wrap: break-word;
          word-break: keep-all;
          justify-content: center;
          flex-direction: column;
          b {
              color: ${variable.SiteColor};
          }
      }
      ${Footer} {
        ${DownloadBtn} {
          background-color: ${variable.BetterDiscord};
        }
      }
      &::before {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.8);
        content: "This mod has been deprecated. Use it's successor BandagedBD instead";
        z-index: 2;
        text-align: center;
        line-height: 2rem;
        transition: 250ms ease-in-out;
      }
      &:hover {
        &::before {
          background-color: rgba(255, 255, 255, 0.95);
        }
      }
  }
`

const GlobalStyle = createGlobalStyle`
[mode="dark"] {
    ${Card} {
      border-color: #151515;
        &[alt="BandagedBD"] {
            border: 1px solid ${variable.BandagedBD};
            order: 1;
        }
        ${Footer} {
            border-color: #151515;
        }
        ${Wave} {
            path {
                fill: #222327;
            }
        }
    }
}
`