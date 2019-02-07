import React from 'react'
//import mystyles from '../styles/footer.module.scss'
import { Link } from 'gatsby'
import styled from 'styled-components';
import * as variable from 'src/styles/variables'
//import { darken } from 'polished'
import { createGlobalStyle } from 'styled-components'

const Footer = () => (
  <FooterContainer>
    <GlobalStyle />
    <Wave 
    preserveAspectRatio='none' 
    width='1920'
    viewBox='0 0 1920 330'>
        <Blob fillOpacity='0.04' d='M140.881198,194.260295 C257.600568,129.32862 342.939626,119.84993 418.009939,203.154617 C493.080251,286.459305 545.728689,70.9046172 636.439626,63.9593047 C727.150564,57.0139922 768.99822,139.670242 858.802907,119.431961 C948.607595,99.1936797 1071.91228,-32.9977266 1243.91228,7.75227342 C1415.91228,48.5022734 1404.10369,208.584305 1508.27166,178.709305 C1612.43963,148.834305 1633.73291,79.913472 1711.63588,98.8569055 C1776.28676,114.577866 1819.96778,221.391836 1889.37253,185.808108 C2017.32661,120.206212 2004.01952,336.769569 2004.01952,336.769569 L271.635881,337 L-149.063338,337 C-149.063338,337 -245.850307,175.637635 -58.0633382,228.867188 C33.8652851,254.92501 64.1722713,236.933925 140.881198,194.260295 Z'
        />
    </Wave>
    <Container>
        <List>
            <FirstItem>
                <Logo>
                    <svg xmlns='http://www.w3.org/2000/svg' className="siteLogo" id='Calque_1' viewBox='0 0 1100.2603 578.46808' width='3.75rem' height='100'>
                        <g id='g3' transform='translate(-28.6 -43.2)' fill='#fff'>
                            <path d='m 156.1,273.9 -127.1,0 0,142.7 84.6,76.2 0,-138.6 45.2,0 c 28.7,0 42.9,13.8 42.9,36 l 0,106 c 0,22.2 -13.4,37.1 -42.9,37.1 l -130.2,0 0,80.7 127,0 c 68.1,0.4 132,-33.7 132,-111.7 l 0,-114 C 288.1,308.7 224.2,273.9 156.1,273.9 l 0,0 z'
                            id='path5' />
                            <path d='m 701.9,502.3 0,-117.1 c 0,-42.1 75.8,-51.7 98.7,-9.6 l 70,-28.3 C 843,286.8 792.9,269.2 751.2,269.2 c -68.1,0 -135.5,39.4 -135.5,115.9 l 0,117.1 c 0,77.3 67.3,115.9 133.9,115.9 42.9,0 94.1,-21 122.5,-76.2 l -75,-34.4 c -18.3,47.3 -95.2,35.8 -95.2,-5.2 l 0,0 z'
                            id='path7' />
                            <path d='m 1011.4069,404.66806 c -26.39995,-5.7 -43.99995,-15.3 -45.19995,-31.8 1.5,-39.4 62.39995,-40.9 97.99995,-3.1 l 56.3,-43.2 c -35.2,-42.9 -75,-54.3 -115.9,-54.3 -62.39995,0 -122.79995,35.2 -122.79995,101.8 0,64.7 49.7,99.5 104.5,107.9 27.89995,3.8 58.89995,14.9 58.19995,34.1 -2.3,36.4 -77.29995,34.4 -111.39995,-6.9 l -54.3,50.9 c 31.8,40.9 75,61.6 115.6,61.6 62.39995,0 131.59995,-36 134.29995,-101.8 3.6,-83 -56.8,-104.1 -117.3,-115.2 l 0,0 z'
                            id='path9' />
                        </g>
                        <g id='g19' transform='translate(-28.6 -43.2)' fill='#fff'>
                            <path d='m 103.3,43.3 -74.7,0 0,77.1 47.7,43 0,-81.7 27.8,0 c 29.6,0 29.6,37.2 0,37.2 l -18.3,0 0,35.6 18.3,0 c 29.6,0 29.6,37.2 0,37.2 l -75.5,0 0,38.3 74.6,0 c 38.5,0 68.3,-15.4 69.4,-53.6 0,-17.6 -4.8,-30.7 -13.3,-39.8 8.5,-9.1 13.3,-22.2 13.3,-39.8 -1,-38.1 -30.8,-53.5 -69.3,-53.5 z'
                            id='path21' />
                            <polygon points='529.8,81.7 529.8,230 577.6,230 577.6,81.7 625.7,81.7 625.7,43.3 358.7,43.3 358.7,81.7 406.8,81.7 406.8,230 454.5,230 454.5,81.7'
                            id='polygon23' />
                            <polygon points='296.5,160.5 296.5,112.8 245.4,112.8 245.4,81.7 341.7,81.7 341.7,43.3 197.6,43.3 197.6,230 341.7,230 341.7,191.7 245.4,191.7 245.4,160.5'
                            id='polygon25' />
                            <polygon points='741.3,160.5 741.3,112.8 690.1,112.8 690.1,81.7 786.4,81.7 786.4,43.3 642.4,43.3 642.4,230 786.4,230 786.4,191.7 690.1,191.7 690.1,160.5'
                            id='polygon27' />
                            <path d='m 918.6,166 c 22.5,-7.1 36.5,-26.6 36.5,-61.1 -1,-43.6 -30.8,-61.7 -69.2,-61.7 l -74.5,0 0,186.8 47.6,0 0,-59.2 8.4,0 43.2,59.2 58.7,0 -50.7,-64 z m -31.9,-35.8 -27.7,0 0,-48.5 27.7,0 c 29.6,0 29.6,48.5 0,48.5 z'
                            id='path29' />
                        </g>
                        <path d='m 422.31942,226.64861 c -70.4,0 -140.39998,38.3 -140.39998,116.7 l 0,116 c 0,77.7 70.39998,116.7 141.19998,116.7 70.4,0 140.4,-39 140.4,-116.7 l 0,-116 c 0,-78.1 -70.8,-116.7 -141.2,-116.7 z m 55.1,232.7 c 0,24.5 -27.6,37.1 -54.7,37.1 -27.6,0 -55.1,-11.9 -55.1,-37.1 l 0,-116 c 0,-24.9 26.8,-38.3 53.6,-38.3 27.9,0 56.3,11.9 56.3,38.3 l 0,116 z'
                        id='path15-5' fill='#fff' />
                    </svg>
                </Logo>
            <Paragraph>
            A Discord enhancement project. Free quality Themes and Plugins for Discord and easy installation instructions for BetterDiscord and more!
            </Paragraph>
            </FirstItem>
            <Item>
                <CategoryHeader>
                General
                </CategoryHeader>
                <SubList>
                    <SubItem>
                        <SubLink to="/">
                            Home
                        </SubLink>
                    </SubItem>
                    <SubItem>
                        <SubLink to="/themes/"
                        >
                            Themes
                        </SubLink>
                    </SubItem>
                    <SubItem>
                        <SubLink to="/plugins/">
                            Plugins
                        </SubLink>
                    </SubItem>
                </SubList>
            </Item>
            <Item>
                <CategoryHeader>
                Help
                </CategoryHeader>
                <SubList>
                <SubItem>
                    <SubLink to="/getting-started/">
                        Getting Started
                    </SubLink>
                </SubItem>
                <SubItem>
                    <SubLink to="/contact/">
                        Contact
                    </SubLink>
                </SubItem>
                <SubItem>
                    <Suba href="https://christopher-portfolio.netlify.com" target="blank">
                        About
                    </Suba>
                </SubItem>
                </SubList>
            </Item>
            <LastItem>
                <CategoryHeader>
                Contact Us
                </CategoryHeader>
                <SubList>
                    <SubItem>
                        <Paragraph>
                        Need help with something? <Link to="/contact/" className="decorated">Get in Touch.</Link>
                        </Paragraph>
                        <Suba href="mailto:betterdocs@support.com"
                        >
                        betterdocs@support.com
                        </Suba>
                    </SubItem>
                </SubList>
            </LastItem>
        </List>
    </Container>  
  </FooterContainer>
)

export default Footer

const Wave = styled.svg`
`
const Blob = styled.path`
`
const Container = styled.div`
`
const List = styled.ul`
`
const FirstItem = styled.li`
`
const Logo = styled.div`
`
const Paragraph = styled.p`
`
const LastItem = styled.div`
`
const Item = styled.li`
`
const CategoryHeader = styled.h4`
`
const SubList = styled.ul`
`
const SubItem = styled.li`
`
const SubLink = styled(Link)`
`
const Suba = styled.a`
`

const FooterContainer = styled.footer`
    position: relative;
    border-top: 1px solid #eee;
    font-size: 0.7rem;
    background-color: #fff;
    ${Wave} {
        bottom: 0;
        left: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        ${Blob} {
            -webkit-animation-play-state: running;
            animation-play-state: running;
            animation: footer-blob-animation 75s linear infinite alternate;
        }
    }
    ${Container} {
        width: calc(100% - 3rem);
        margin: 0 auto;
        position: relative;
        padding: 0 20px;
        overflow: hidden;
        padding-top: 50px;
        ${List} {
            -webkit-flex-flow: wrap;
            -moz-flex-flow: wrap;
            -ms-flex-flow: wrap;
            flex-flow: wrap;
            list-style: none;
            padding: 0;
            @media (min-width: 850px) {
                margin: -10px -60px 10px -60px;
                display: flex;
            }
            > ${Item} {
                box-sizing: border-box;
                ${Paragraph} {
                    font-size: 1.1rem;
                    color: #999;
                    margin-bottom: 20px;
                    line-height: 1.4em;
                    display: block;
                    margin-block-start: 1em;
                    margin-block-end: 1em;
                    margin-inline-start: 0px;
                    margin-inline-end: 0px;
                }
                @media (min-width: 850px) {
                    flex: 0;
                    padding: 0 60px;
                }
                ${CategoryHeader} {
                    margin: 0 0 0.5rem 0;
                    font-size: 0.8rem;
                    color: #666;
                }
                ${SubList} {
                    padding: 0;
                    list-style: none;
                    margin: 0;
                    > ${SubItem} {
                        font-size: 0.7rem;
                        margin: 0.6rem 0;
                        ${SubLink}, ${Suba} {
                            white-space: nowrap;
                            color: #999;
                            text-decoration: none;
                            &:hover {
                                color: #000;
                            }
                        }
                    }
                }
            }
            > ${FirstItem}, > ${LastItem} {
                ${Logo} {
                    display: initial;
                    position: relative;
                    top: 4px;
                    path, polygon {
                        fill: ${variable.SiteColor};
                    }
                }
                ${Paragraph} {
                    font-size: 0.66rem;
                    color: #999;
                    margin-bottom: 20px;
                    line-height: 1.4em;
                    display: block;
                    margin-block-start: 1em;
                    margin-block-end: 1em;
                    margin-inline-start: 0px;
                    margin-inline-end: 0px;
                }
                ${CategoryHeader} {
                    margin: 0 0 0.5rem 0;
                    font-size: 0.7rem;
                    color: #666;
                }
                ${SubList} {
                    list-style: none;
                    margin: 0;
                }
                ${Suba} {
                    display: inline-block;
                    transition: color 250ms, text-shadow 250ms;
                    color: #000;
                    text-decoration: none;
                    cursor: pointer;
                    position: relative;
                    z-index: 0;
                    line-height: 1rem;
                    &:hover {
                        color: #fff;
                        opacity: 1;
                        background-color: transparent;
                        &::after {
                            height: 110%;
                            width: 110%;
                        }
                    }
                    &::after {
                        position: absolute;
                        z-index: -1;
                        bottom: -1px;
                        left: 50%;
                        transform: translateX(-50%);
                        content: '';
                        width: 100%;
                        height: 3px;
                        background-color: ${variable.SiteColor};
                        transition: all 250ms;
                    }
                }
                @media (min-width: 850px) {
                    flex: 1;
                    padding: 0 60px;
                }
            }
        }
    }
`

const GlobalStyle = createGlobalStyle`
  [mode="dark"] {
    ${FooterContainer} {
        border-color: #222327;
        background-color: #222327;
        ${Wave} {
          ${Blob} {
                fill: #fff;
            }
        }
        ${Container} {
            ${List} {
                > ${Item} {
                    ${Paragraph} {
                    }
                    ${CategoryHeader} {
                        color: #eee;
                    }
                    ${SubList} {
                        > ${SubItem} {
                            ${SubLink}, ${Suba} {
                                color: #999;
                                &:hover {
                                    color: #000;
                                }
                            }
                        }
                    }
                }
                > ${FirstItem}, > ${LastItem} {
                    ${Paragraph} {
                        color: #999;
                    }
                    ${CategoryHeader} {
                        color: #eee;
                    }
                    ${SubList} {
                    }
                    ${Suba} {
                        color: #fff;
                    }
                }
            }
        }
    }
}
`