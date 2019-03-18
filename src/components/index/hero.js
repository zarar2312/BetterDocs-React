import React from 'react'
import previewJpg from 'src/images/discord-comparison.jpg'
import previewWebp from 'src/images/discord-comparison.webp'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Bg from 'src/images/header-bg.svg'
import * as variable from 'src/styles/variables'
import Loading from 'src/images/Loading.gif'
import LazyLoad from "react-lazyload"

const Hero = () => (
  <Container>
    <TextContainer>
        <Header
        >The Discord Enhancement Project.
        </Header>
        <SubText>
          <Text>
          Custom Discord CSS themes + JS plugins, BTTV & FFZ twitch emotes and lots of extra tools.
          </Text>
        </SubText>
        <ActionBtn> 
            <Btn to="/download/" target="blank">
              Download
            </Btn> 
        </ActionBtn>
    </TextContainer>
    <ImageContainer>
        <LazyLoad once={true} height="100%"
                placeholder={<img src={Loading} alt="Loading"
            />}>
            <picture>
                <source srcSet={previewWebp} type="image/webp"/>
                <img src={previewJpg} alt="Discord Themes Preview"/>
            </picture>
        </LazyLoad>
    </ImageContainer>
  </Container>
)

export default Hero

const TextContainer = styled.div`
`
const Header = styled.h1`
`
const SubText = styled.div`
`
const Text = styled.h2`
`
const ImageContainer = styled.div`
`
const ActionBtn = styled.div`
`
const Btn = styled(Link)`
`
const Container = styled.section`
  justify-content: space-between;
  display: block;
  padding: 1.85rem 1.5625rem;
  padding-bottom: 3.8rem;
  flex-direction: row;
  color: #ffffff;
  text-align: center;
  position: relative;
  z-index: 99;
  background: linear-gradient(15deg, ${variable.SiteColor} 50%, #1868df 100%);
  &::before {
    content: "";
    background-image: url(${Bg});
    background-size: 38%;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: unset;
    transform: unset;
    box-shadow: inset 0px -35px 55px -16px ${variable.SiteColor};
    top: unset;
    bottom: unset;
    left: 0;
    top: 0;
    pointer-events: none;
  }
  @media ${variable.MidPoint} {
    display: flex;
    padding: 4.25rem 0;
    padding-bottom: 4.8rem;
  }
  ${TextContainer} {
    max-width: unset;
    flex-basis: 21%;
    padding: unset;
    margin: 0 auto;
    position: relative;
    animation-name: slide;
    animation-duration: 1s;
    -webkit-animation-duration: 1s;
    visibility: visible;
    transition: 300ms linear;
    @media ${variable.MidPoint} {
        max-width: calc(100% - 125px);
    }
    ${Header} {
        font-size: 1.68rem;
        text-align: left;
        line-height: 2.2rem;
        font-weight: bold;
        word-break: break-word;
        margin: 0;
    }
    ${SubText} {
        padding: 10px 0px;
        ${Text} {
            text-align: left;
            line-height: 1.6rem;
            color: #fff;
            margin: 0;
            font-weight: normal;
            font-size: 0.8rem;
            font-family: unset;
        }
    }
    ${ActionBtn} {
        margin-bottom: 50px;
        text-align: left;
        margin-top: 20px;
        @media ${variable.MidPoint} {
            margin-bottom: 0;
            margin-top: 15px;
        }
        ${Btn} {
            color: ${variable.SiteColor};
            text-decoration: none;
            padding: 0.8rem 1.2rem;
            background-color: #fff;
            border-radius: 2px;
            -webkit-appearance: none;
            box-shadow: 0px 4px 8px -1px rgba(0, 0, 0, 0.6);
            transition: .2s linear box-shadow,.2s linear background-color;
            font-size: 0.7rem;
            &:hover {
                background-color: rgba(255,255,255, 0.9);
                box-shadow: 0 7px 15px rgba(32,34,37,.3);
            }
            &:focus, &:active {
                background-color: rgba(255,255,255, 0.7);
                box-shadow: 0 10px 20px rgba(32,34,37,.3);
            }
        }
    }
  }
  ${ImageContainer} {
    flex-basis: 50%;
    box-shadow: 0px 12px 30px 0px rgba(0, 0, 0, 0.6);
    transform: translate(0px, 0px);
    animation-duration: 3s;
    animation-name: float;
    animation-iteration-count: infinite;
    display: flex;
    z-index: 1;
    /*@media ${variable.MidPoint} {
        padding-bottom: unset;
        height: 19.25rem;
    }*/
    img {
        height: 100%;
        width: 100%;
        border-radius: 2px;
        margin: unset;
    }
  }
`