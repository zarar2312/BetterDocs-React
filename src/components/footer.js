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
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1850.2603 580.46808'
                    width='3.75rem' height='2rem'>
                        <g id='Layer_2' className='st0'>
                            <rect className='st1' width='1940' height='640' />
                        </g>
                        <g id='Discord'>
                            <path className='st3' d='M99.6,37.8H28.3V118l47.5,42.8V83h25.4c16.1,0,24.1,7.7,24.1,20.2v59.5c0,12.5-7.5,20.9-24.1,20.9H28v45.4 h71.4c38.3,0.2,74.2-18.9,74.2-62.8v-64.1C173.8,57.4,137.9,37.8,99.6,37.8L99.6,37.8z'
                            />
                            <path className='st3' d='M473.7,166.1v-65.8c0-23.6,42.6-29,55.5-5.4l39.3-15.9c-15.5-34-43.6-43.9-67.1-43.9 c-38.3,0-76.1,22.1-76.1,65.1v65.8c0,43.4,37.8,65.1,75.2,65.1c24.1,0,52.9-11.8,68.8-42.8l-42.1-19.3 C516.9,195.6,473.7,189.1,473.7,166.1L473.7,166.1z'
                            />
                            <path className='st3' d='M343.6,109.4c-14.8-3.2-24.7-8.6-25.4-17.8c0.9-22.1,35-23,55-1.7l31.6-24.3C385.1,41.5,362.7,35,339.7,35 c-35,0-69,19.8-69,57.2c0,36.3,27.9,55.9,58.7,60.6c15.7,2.1,33.1,8.4,32.7,19.1c-1.3,20.4-43.4,19.3-62.6-3.9L269,196.7 c17.8,23,42.1,34.6,64.9,34.6c35,0,73.9-20.2,75.5-57.2C411.5,127.5,377.6,115.6,343.6,109.4L343.6,109.4z'
                            />
                            <rect x='199.6' y='37.8' className='st3' width='48.2' height='190.9' />
                            <path className='st3' d='M1011.5,37.8h-71.4V118l47.5,42.8V83h25.4c16.1,0,24.1,7.7,24.1,20.2v59.5c0,12.5-7.5,20.9-24.1,20.9h-73.1 v45.4h71.6c38.3,0.2,74.2-18.9,74.2-62.8v-64.1C1085.7,57.4,1049.8,37.8,1011.5,37.8L1011.5,37.8z'
                            />
                            <path className='st3' d='M661.3,35.2c-39.6,0-78.9,21.5-78.9,65.6v65.1c0,43.6,39.6,65.6,79.3,65.6c39.6,0,78.9-21.9,78.9-65.6v-65.1 C740.6,56.9,700.9,35.2,661.3,35.2z M692.3,165.9c0,13.8-15.5,20.9-30.7,20.9c-15.5,0-31-6.7-31-20.9v-65.1 c0-14,15-21.5,30.1-21.5c15.7,0,31.6,6.7,31.6,21.5V165.9z'
                            />
                            <path className='st3' d='M876.1,163.4c23-7.3,37.4-27.3,37.4-62.6C912.4,56.1,881.9,38,842.5,38h-76.3v190.9H815v-60.6h8.6l44.3,60.6 h60.2L876.1,163.4z M843.4,126.6H815V83h28.4C873.7,83,873.7,126.6,843.4,126.6z'
                            />
                        </g>
                        <g id='Source'>
                            <polygon className='st3' points='1550.4,274.3 1550.4,614.1 1812.5,614.1 1812.5,544.3 1637.2,544.3 1637.2,487.6 1730.3,487.6 1730.3,400.7 1637.2,400.7 1637.2,344 1812.5,344 1812.5,274.3'
                            />
                            <path className='st3' d='M1344.2,502.3V385.2c0-42.1,75.8-51.7,98.7-9.6l70-28.3c-27.6-60.5-77.7-78.1-119.4-78.1 c-68.1,0-135.5,39.4-135.5,115.9v117.1c0,77.3,67.3,115.9,133.9,115.9c42.9,0,94.1-21,122.5-76.2l-75-34.4 C1421.2,554.8,1344.2,543.3,1344.2,502.3L1344.2,502.3z'
                            />
                            <path className='st3' d='M1165.5,497.4c40.9-13,66.6-48.6,66.6-111.4c-1.9-79.6-56.3-111.7-126.3-111.7H970v339.8h86.9V506.2h15.3 l78.8,107.9h107.1L1165.5,497.4z M1107.4,431.9h-50.5v-77.7h50.5C1161.3,354.2,1161.3,431.9,1107.4,431.9z'
                            />
                            <path className='st3' d='M441.2,269.3c-70.4,0-140.4,38.3-140.4,116.7V502c0,77.7,70.4,116.7,141.2,116.7c70.4,0,140.4-39,140.4-116.7 V386C582.4,307.9,511.6,269.3,441.2,269.3z M496.3,502c0,24.5-27.6,37.1-54.7,37.1c-27.6,0-55.1-11.9-55.1-37.1V386 c0-24.9,26.8-38.3,53.6-38.3c27.9,0,56.3,11.9,56.3,38.3V502z'
                            />
                            <path className='st3' d='M160.8,401.3c-26.4-5.7-44-15.3-45.2-31.8c1.5-39.4,62.4-40.9,98-3.1l56.3-43.2c-35.2-42.9-75-54.3-115.9-54.3 c-62.4,0-122.8,35.2-122.8,101.8c0,64.7,49.7,99.5,104.5,107.9c27.9,3.8,58.9,14.9,58.2,34.1c-2.3,36.4-77.3,34.4-111.4-6.9 L28,556.7c31.8,40.9,75,61.6,115.6,61.6c62.4,0,131.6-36,134.3-101.8C281.7,433.5,221.3,412.4,160.8,401.3L160.8,401.3z'
                            />
                            <path className='st3' d='M834.7,274.7H938v199.6c0,19.8-3.1,38.5-9.3,56.1c-6.2,17.6-15.8,33-29,46.1c-13.2,13.2-27,22.4-41.5,27.7 c-20.1,7.5-44.3,11.2-72.4,11.2c-16.3,0-34.1-1.1-53.4-3.4c-19.3-2.3-35.4-6.8-48.3-13.6c-13-6.8-24.8-16.4-35.5-28.9 s-18.1-25.3-22.1-38.6c-6.4-21.3-9.6-40.2-9.6-56.6V274.7h103.3V479c0,18.3,5.1,32.5,15.2,42.8c10.1,10.3,24.2,15.4,42.2,15.4 c17.8,0,31.8-5.1,41.9-15.2c10.1-10.1,15.2-24.5,15.2-43V274.7z'
                            />
                        </g>
                    </svg>
                </Logo>
            <Paragraph>
            A Discord enhancement project. Free quality Themes and Plugins for Discord and easy installation instructions for BetterDiscord and more! Logo originally made by BeardDesign.
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
                    <Suba href="https://discordsource.com/server/" target="blank">
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
                        <Suba href="mailto:na@na.com"
                        >
                        support@discordsource.com
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
    margin-bottom: 0.2rem;
    @media ${variable.MidPoint} {
        margin-bottom: unset;
    }
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
            @media ${variable.MidPoint} {
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
                @media ${variable.MidPoint} {
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
                    svg {
                        path, polygon, rect {
                            fill: ${variable.SiteColor};
                        }
                        #Better {
                            .st3 {
                                fill: transparent !important;
                            }
                        }
                        #Layer_2 {
                            rect.st1 {
                                fill: transparent;
                            }
                        }
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
                @media ${variable.MidPoint} {
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
                                    color: #fff;
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
