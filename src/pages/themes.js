import React from 'react'
import Layout from '../components/layout-mobile-footer'
//import theme from '../styles/themes.module.scss'
//import featured from '../styles/theme-featured-section.module.scss'
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet";
import Star from "../images/star.svg"
import Headroom from 'react-headroom';
import '../styles/tooltips.css'
import Card from '../components/themes/card'
import styled from 'styled-components';
import * as variable from '../styles/variables'
import { rgba, darken } from "polished"
import FeaturedCard from '../components/themes/featured-card'
import LazyLoad from "react-lazyload"
import TagsBar from '../components/themes/tags'
import { createGlobalStyle } from 'styled-components'
import ThemesImg from "../images/themes-min.png"
import Bg from 'src/images/header-bg.svg'
import AdSense from 'react-adsense';
//import Modal from '../components/themes/modal'

// Pass image as css instead of a dom element (img) style={{backgroundImage :  `url(${node.frontmatter.thumbnail})` }}

const Themes = (props) => {
  const themeList = props.data.allMarkdownRemark;
  //const tags = props.data.tags;
  const featuredList = props.data.featured;
  const { totalCount } = props.data.allMarkdownRemark;
  const listCount = `${totalCount}`
  
  return (
  <Layout>
    <GlobalStyle />
    <Helmet>
        <meta charSet="utf-8" />
        <title>Discord Source | #1 Discord Themes</title>
        <meta property="og:site_name" content="Discord Source"/>
        <meta property="og:title" content="#1 Discord Themes"/>
        <meta property="og:description" content="List of free high quality Discord themes by the community! Customize Discord to your own liking with transparent themes and modern themes!"/>
        <meta property="og:url" content="https://discordsource.com/themes/" />
    </Helmet>
    <Container>
    <Hero>
      <HeroHeader>
        Start customizing your Discordapp with the
      </HeroHeader>
      <Big>
        best themes
      </Big>
      <Small>
        on Windows / MAC OS / Linux
      </Small>
      <HeroBg>
        
      </HeroBg>
    </Hero>
    <Wave>
      <svg preserveAspectRatio='none' width='1920'viewBox='0 0 1920 330' >
        <path d='M140.881198,194.260295 C257.600568,129.32862 342.939626,119.84993 418.009939,203.154617 C493.080251,286.459305 545.728689,70.9046172 636.439626,63.9593047 C727.150564,57.0139922 768.99822,139.670242 858.802907,119.431961 C948.607595,99.1936797 1071.91228,-32.9977266 1243.91228,7.75227342 C1415.91228,48.5022734 1404.10369,208.584305 1508.27166,178.709305 C1612.43963,148.834305 1633.73291,79.913472 1711.63588,98.8569055 C1776.28676,114.577866 1819.96778,221.391836 1889.37253,185.808108 C2017.32661,120.206212 2004.01952,336.769569 2004.01952,336.769569 L271.635881,337 L-149.063338,337 C-149.063338,337 -245.850307,175.637635 -58.0633382,228.867188 C33.8652851,254.92501 64.1722713,236.933925 140.881198,194.260295 Z' />
      </svg>
    </Wave>
    <FeaturedSection>
      <FeaturedBar>
        <First>
          <HeaderContainer>
            <HeaderTitle>Featured Themes</HeaderTitle>
          </HeaderContainer>
          <AllContainer>
            <ViewAll 
            to="/themes/featured/">View All -></ViewAll>
          </AllContainer>
        </First>
        <Second>
          <Paragraph>
            <p>Want to get featured?</p>
          </Paragraph>
          <Publish>
            <PublishBtn
            to="/theme/upload-a-theme/">Publish your theme</PublishBtn>
          </Publish>
        </Second>
      </FeaturedBar>
      <FeaturedContainer>
        {featuredList.edges.map(({ node }, i) => (
        <LazyLoad key={node.id} height="6rem">
          <FeaturedCard 
          key={node.id}
          title={node.frontmatter.title}
          thumbnail={node.frontmatter.thumbnail}
          slug={node.fields.slug}
          author={node.frontmatter.author.frontmatter.author_id}/>
        </LazyLoad>
        ))}
        <LastCard to="/themes/featured/">
        <ThumbnailContainer>
          <Thumbnail src={Star} alt="View All Featured Themes"></Thumbnail>
          <Text>View all featured themes</Text>
        </ThumbnailContainer>
      </LastCard>
    </FeaturedContainer>
  </FeaturedSection>
    
  <ContainerSection>
    <TitleBarHeadroom disableInlineStyles>
      <TitleBar>
        <Count>#Themes <span>({listCount})</span></Count>
        <RightSide>
          <Search placeholder="Search Themes library (WIP)" ></Search>
          <Help target="blank" href="https://www.youtube.com/watch?v=MlRSS6ikKh0" data-balloon="Need help with theme installation?" data-balloon-pos="left">?</Help>
          <Upload
          data-balloon="Want to publish your theme?" data-balloon-pos="left"
          to="/theme/upload-a-theme/">
            <svg id='Capa_1' xmlns='http://www.w3.org/2000/svg' width='433.5' height='433.5'
            viewBox='0 0 433.5 433.5'>
                <g id='file-upload'>
                    <polygon points='140.25,331.5 293.25,331.5 293.25,178.5 395.25,178.5 216.75,0 38.25,178.5 140.25,178.5'
                    />
                    <rect x='38.25' y='382.5' width='357' height='51' />
                </g>
            </svg>
          </Upload>
        </RightSide>
      </TitleBar>
    </TitleBarHeadroom>
      <TagsBar
      tagsArray={themeList.group}
      />
      <Content>
        <Wrapper>
        {variable.Ads === true &&
          <AdCard>
            <AdContainer>
              <AdSense.Google
                client='ca-pub-1998206533560539'
                slot='6545618600'
                style={{ display: 'block' }}
                format='auto'
                responsive='true'
              />
            </AdContainer>
            <Notice></Notice>
          </AdCard>
        }
          {themeList.edges.map(({ node }, i) => (
            <LazyLoad key={node.id} height="10rem">
              <Card
              title={node.frontmatter.title} 
              thumbnail={node.frontmatter.thumbnail}
              slug={node.fields.slug}
              status={node.frontmatter.status}
              tags={node.frontmatter.tags}
              author={node.frontmatter.author.frontmatter.author_id}
              excerpt={node.excerpt}
              demo={node.frontmatter.demo}
              mode={node.frontmatter.style}
              featured={node.frontmatter.featured}
              snippet={node.frontmatter.snippet}
              />
            </LazyLoad>
            ))}
        </Wrapper>
      </Content>
    </ContainerSection>
    </Container>
    <UploadContainer>
        <UploadBtn to="/theme/upload-a-theme/">
        +
        </UploadBtn>
    </UploadContainer>
    <HelpContainer>
        <HelpBtn data-balloon="Need help with theme installation?" data-balloon-pos="left" href="https://youtu.be/MlRSS6ikKh0" target="blank">?</HelpBtn>
    </HelpContainer>
  </Layout>
)
}

export default Themes;

export const allThemesQuery = graphql`
query allThemesQuery {
  allMarkdownRemark(filter: {collection: {eq: "themes"} } sort: { fields: [frontmatter___title], order: ASC}) {
    group(field: frontmatter___tags) {
      fieldValue
      totalCount
    }
    ...themeFragment
  },
  featured: allMarkdownRemark(filter: {collection: {eq: "themes"} frontmatter: { featured: { eq: true } } } sort: { fields: [frontmatter___title], order: ASC} limit: 8 ) {
    group(field: collection) {
      fieldValue
      totalCount
    }
    ...themeFragment
  }
}
`
const ContainerSection = styled.section`
`
const FeaturedBar = styled.div`
`
const First = styled.div`
`
const HeaderContainer = styled.div`
`
const HeaderTitle = styled.div`
`
const ViewAll = styled(Link)`
`
const AllContainer = styled.div`
`
const Second = styled.div`
`
const Paragraph = styled.div`
`
const Publish = styled.div`
`
const PublishBtn = styled(Link)`
`
const FeaturedContainer = styled.div`
`
const FeaturedSection = styled.section`
`
const LastCard = styled(Link)` 
`
const TitleBarHeadroom = styled(Headroom)`
`
const ThumbnailContainer = styled.div`
`
const Thumbnail = styled.img`
`
const Text = styled.div`
`
const TitleBar = styled.div`
`
const Count = styled.div`
`
const Search = styled.input`
`
const Help = styled.a`
`
const Upload = styled(Link)`
`
const Content = styled.div`
`
const Wrapper = styled.div`
`
const UploadBtn = styled(Link)`
`
const HelpBtn = styled.a`
`
const Hero = styled.div`
`
const HeroHeader = styled.h1`
`
const HeroBg = styled.div`
`
const Wave = styled.div`
`
const Big = styled.h2`
`
const Small = styled.h3`
`
const AdCard = styled.div`
`
const AdContainer = styled.div`
`
const Notice = styled.div`
`
const RightSide = styled.div`
`

const Container = styled.div`
  display: block;
  background-color: #fff;
  flex-direction: row;
  @media ${variable.MidPoint} {
    display: flex;
    flex-direction: column;
  }
  ${Hero} {
    display: flex;
    padding: 20px;
    padding-bottom: unset;
    flex-direction: column;
    background-color: #0a0a0a;
    overflow: hidden;
    position: relative;
    &::before {
      content: "";
      /*background-image: url(${Bg});*/
      background-size: 38%;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: unset;
      transform: unset;
      /*box-shadow: inset 0px -40px 103px -15px ${variable.SiteColor};*/
      top: unset;
      bottom: unset;
      left: 0;
      top: 0;
      pointer-events: none;
    }
    ${HeroHeader} {
      text-align: center;
      color: #fff;
      font-weight: normal;
      font-size: 0.85rem;
      margin-bottom: 12px;
      z-index: 1;
    }
    ${Big} {
      color: ${variable.SiteColor};
      font-weight: bold;
      text-transform: capitalize;
      text-align: center;
      font-size: 3.3rem;
    }
    ${Small} {
      font-size: 0.4rem;
      font-weight: normal;
      text-align: center;
      color: rgba(255,255,255,0.6);
      letter-spacing: 4px;
    }
    ${HeroBg} {
      background-image: url("${ThemesImg}");
      height: 10rem;
      background-size: contain;
      background-repeat: no-repeat;
      z-index: 1;
      background-position: center;
      margin-bottom: unset;
      transition: 300ms linear;
    }
  }
  ${Wave} {
    height: 20vh;
    position: relative;
    background-color: #fff;
    svg {
      position: absolute;
      margin-top: -5px;
      width: 100%;
      height: 100%;
      transform: rotate(180deg);
      path {
        fill: #0a0a0a;
        animation-play-state: running;
        animation: blobAnimation 75s linear infinite alternate;
      }
    }
  }
  ${FeaturedSection} {
    flex-direction: column;
    display: flex; /* none */
    overflow: hidden;
    @media ${variable.MidPoint} {
        display: flex;
    }
    ${FeaturedBar} {
      display: flex;
      flex-direction: column;
      padding: 0.62rem 0.82rem;
      @media ${variable.MidPoint} {
          display: flex;
          flex-direction: row;
      }
      ${First} {
        flex: 1;
        display: flex;
        flex-direction: row;
        ${HeaderContainer} {
          flex-direction: column;
          justify-content: center;
          display: flex;
          ${HeaderTitle} {
            margin-left: unset;
            font-size: 0.85rem;
            color: ${variable.SiteColor};
            font-weight: bold;
            @media ${variable.MidPoint} {
              margin-left: 15px;
            }
          }
        }
        ${AllContainer} {
            flex-direction: column;
            justify-content: center;
            display: flex;
            ${ViewAll} {
              margin-left: 25px;
              font-size: 0.55rem;
              position: relative;
              top: 2px;
              color: ${rgba(variable.SiteColor, 0.6)};
              transition: 400ms linear;
            &:hover {
                color: ${variable.SiteColor};
            }
          }
        }
      }
      ${Second} {
        flex: 1;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        margin-top: 20px;
        @media ${variable.MidPoint} {
          justify-content: flex-end;
          margin-top: unset;
        }
        ${Paragraph} {
            margin-right: 15px;
            flex-direction: column;
            justify-content: center;
            display: flex;
            p {
                margin: unset;
                font-size: 0.55rem;
                color: #7c7c7c;
            }
        }
        ${Publish} {
          margin-right: 15px;
          ${PublishBtn} {
            padding: 0.4rem 0.6rem;
            background-color: ${variable.SiteColor};
            color: #fff;
            border-radius: 3px;
            display: -webkit-inline-box;
            font-size: 0.69rem;
            transition: 250ms ease-in-out;
            &:hover {
              background-color: ${darken(0.1, variable.SiteColor)};
            }
          }
        }
      }
    }
    ${FeaturedContainer} {
      display: flex;
      flex-wrap: nowrap;
      overflow-x: scroll;
      -webkit-overflow-scrolling: touch;
      padding: 25px;
      justify-content: space-between;
      width: 100%;
      margin: 0 auto;
      &::after {
          content: "";
          display: block;
          height: 11.5em;
          width: 50px;
          pointer-events: none;
          background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #fff 100%);
          position: absolute;
          right: 0px;
      }
      &::-webkit-scrollbar-button {
          display: none;
          border-radius: 0px;
      }
      &::-webkit-scrollbar-thumb {
          background-color: ${rgba(variable.SiteColor, 0.3)};
          transition: background-color .2s ease-in-out;
      }
      &::-webkit-scrollbar-thumb:hover {
          background-color: ${variable.SiteColor};
      }
      &::-webkit-scrollbar-track {
          background-color: ${rgba(variable.SiteColor, 0.06)};
      }
      &::-webkit-scrollbar {
          width: 5px;
          height: 8px;
      }
      ${LastCard} {
        margin-left: 50px;
        ${ThumbnailContainer} {
          box-shadow: none;
          border: 1px solid #f5f3f7;
          background-color: rgba(245,243,247,.25);
          -o-border-image: initial;
          border-image: initial;
          transition: all .25s cubic-bezier(.4,0,.2,1) 0s;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-right: 25px;
          height: 10rem;
          padding-bottom: unset;
          width: 16.7rem;
          position: relative;
          ${Thumbnail} {
            width: 3em;
            height: 3em;
            margin: 0 auto;
            display: block;
            position: static;
          }
          ${Text} {
            color: ${variable.SiteColor};
            font-weight: bold;
            font-weight: 700;
            border-bottom: 3px solid transparent;
            transition: all .25s cubic-bezier(.4,0,.2,1) 0s;
            display: -webkit-inline-box;
            font-size: .65rem;
            margin: 1rem auto;
          }
        }
        &:hover {
          ${ThumbnailContainer} {
            transform: translateY(-3px);
            box-shadow: ${rgba(variable.SiteColor, 0.5)} 0px 8px 20px;
          }
          ${Text} {
            border-bottom: 3px solid transparent;
          }
        }
      }
    }
  }
  ${ContainerSection} {
    order: 1;
    display: flex;
    flex-direction: column;
    @media ${variable.MidPoint} {
        flex: 3;
    }
    ${TitleBarHeadroom} {
      display: contents;
      width: 100%;
      .headroom {
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
      }
      .headroom--unfixed {
          position: relative;
          transform: translateY(0);
      }
      .headroom--scrolled {
          transition: transform 200ms ease-in-out;
          position: sticky;
          top: 3rem;
      }
      .headroom--unpinned {
          position: sticky;
          top: 0;
      }
      .headroom--pinned {
          position: sticky;
          top: 3rem;
          transform: translateY(0%);
      }
      @media ${variable.MidPoint} {
        .headroom {
        }
        .headroom--unfixed {
        }
        .headroom--scrolled {
            top: 1.8rem;
        }
        .headroom--unpinned {
            top: 0;
        }
        .headroom--pinned {
            top: 1.8rem;
        }
      }
      ${TitleBar} {
        border-bottom: 1px solid #f5f3f7;
        background-color: #fff;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 0.42rem 0.62rem;
        padding-bottom: unset;
        position: sticky;
        z-index: 3;
        flex-wrap: wrap;
        justify-content: space-between;
        ${Count} {
          font-weight: bold;
          color: ${variable.SiteColor};
          font-size: 0.85rem;
          align-self: center;
          margin-bottom: 0.32rem;
          span {
            font-weight: 500;
            font-size: 0.6em;
          }
        }
        ${RightSide} {
          align-self: center;
          margin-bottom: 0.42rem;
          ${Search} {
            border: unset;
            transition: .2s ease-in-out opacity;
            border-radius: 2px;
            font-size: 0.7rem;
            background-color: rgba(0, 0, 0, 0.1);
            padding: 0.3rem 0.6rem;
            color: #262626;
            transition: 250ms linear background-color;
            &::placeholder {
              color: rgba(0, 0, 0, 0.6);
            }
            &:hover {
              background-color: rgba(0, 0, 0, 0.07);
            }
            &:active,
            &:focus {
              opacity: 1;
              outline: unset;
              background-color: rgba(0, 0, 0, 0.05);
            }
          }
          ${Help} {
            margin-left: 13px;
            color: rgba( 0,0,0, 0.5);
            align-self: center;
            transition: 200ms ease-in-out;
            display: none;
            font-weight: bold;
            &:hover {
              color: #000;
            }
            @media ${variable.MidPoint} {
              display: initial;
            }
          }
          ${Upload} {
            margin-left: 13px;
            align-self: center;
            display: none;
            svg {
              height: 0.6rem;
              width: 0.6rem;
              opacity: 0.5;
              transition: 250ms ease-in-out;
            }
            &:hover {
              svg {
                  opacity: 1;
              }
            }
            @media ${variable.MidPoint} {
              display: initial;
            }
          }
        }
      }
    }
    ${Content} {
      display: flex;
      order: 1;
      flex-direction: column;
      overflow-x: hidden;
      -webkit-overflow-scrolling: touch;
      max-height: unset;
      @media ${variable.MidPoint} {
        max-height: unset;
      }
      &::-webkit-scrollbar-button {
        display: none;
        height: 13px;
        border-radius: 0px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: ${rgba(variable.SiteColor, 0.3)};
        transition: background-color .2s ease-in-out;
      }
      &::-webkit-scrollbar-thumb:hover {
        background-color: ${variable.SiteColor};
      }
      &::-webkit-scrollbar-track {
        background-color: ${rgba(variable.SiteColor, 0.06)};
      }
      &::-webkit-scrollbar {
        width: 8px;
      }
      a:not([class*="LinkStatus"]):not(.icon):not(.anchor):not([class*="Btn"]):not(.imgContainer):not([class*="FeaturedIcon"]):not([class*="ImageContainer"]):not([class*="ThumbnailLink"]) {
        display: inline-block;
        transition: color 250ms, text-shadow 250ms;
        color: #000;
        text-decoration: none;
        cursor: pointer;
        position: relative;
        z-index: 0;
        line-height: 1rem;

        &:after {
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

        &:hover {
          color: #fff !important;
          opacity: 1;
          background-color: transparent;
          &::after {
              height: 110% !important;
              width: 110% !important;
          }
        }
      }
      ${Wrapper} {
        display: block;
        width: calc(100% - 75px);
        margin: 0 auto;
        padding-top: 0.1rem;
        padding-bottom: 3.1rem;
        word-break: break-all;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        @media ${variable.MidPoint} {
          display: flex;
          padding: 2.1rem 0;
          padding-top: 0.1rem;
        }
        ${AdCard} {
          display: flex;
          flex-basis: 16rem;
          background-color: transparent;
          position: relative;
          max-height: 10rem;
          height: 10rem;
          ${AdContainer} {
            margin: 0 auto;
            width: 100%;
            z-index: 2;
          }
          ${Notice} {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 1;
            text-align: center;
          }
        }
      }
    }
  }
`

const UploadContainer = styled.div`
  position: fixed;
  bottom: 52px;
  z-index: 101;
  color: #fff;
  width: 100%;
  font-size: 10px;
  pointer-events: none;
  @media ${variable.MidPoint} {
      display: none;
  }
  ${UploadBtn} {
    background-color: ${variable.SiteColor};
    color: #ffffff;
    border-radius: 50%;
    width: 2em;
    height: 2em;
    line-height: 1.75em;
    text-align: center;
    font-size: 2.8em;
    display: block;
    margin: 0 auto;
    position: relative;
    top: 25px;
    border: 3.5px solid #0a0a0a;
    pointer-events: all;
  }
`

const HelpContainer = styled.div`
  position: fixed;
  right: 1rem;
  bottom: 2.5rem;
  z-index: 100;
  @media ${variable.MidPoint} {
      right: 1.5rem;
      bottom: 1rem;
      display: none;
  }
  ${HelpBtn} {
    display: block;
    width: 2.5rem;
    height: 2.5rem;
    background-color: ${variable.SiteColor};
    color: #fff;
    text-align: center;
    line-height: 2.5rem;
    border-radius: 50%;
    transition: all linear 250ms;
    box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.5), inset 0px 2px 3px -2px #ffffff;
    font-size: 1.3rem;
    &:hover {
        box-shadow: 0px 5px 9px 1px rgba(0, 0, 0, 0.4), inset 0px 2px 3px -2px #ffffff;
        background-color: ${darken(0.1, variable.SiteColor)};
    }
  }
`

const GlobalStyle = createGlobalStyle`
[mode="dark"] {
  ${Container} {
    background-color: #36393f;
    ${Wave} {
      background-color: #18191c;
    }
    ${FeaturedSection} {
      background-color: #18191c;
      ${FeaturedContainer} {
        &::after {
            content: "";
            background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #18191c 100%);
        }
        ${LastCard} {
          ${ThumbnailContainer} {
            border-color: #131318;
            background-color: #131318;
          }
        }
      }
    }
    ${ContainerSection} {
      ${TitleBarHeadroom} {
        ${TitleBar} {
          border-bottom: 1px solid #222327;
          background-color: #222327;
          ${RightSide} {
            ${Search} {
              background-color: rgba(255, 255, 255, 0.1);
              color: #eee;
              &::placeholder {
                color: rgba(255, 255, 255, 0.6);
              }
              &:hover {
                background-color: rgba(255, 255, 255, 0.07);
              }
              &:active,
              &:focus {
                background-color: rgba(255, 255, 255, 0.05);
              }
            }
            ${Help} {
              color: rgba(255,255,255, 0.5);
              &:hover {
                color: #fff;
              }
            }
            ${Upload} {
              svg {
                fill: #fff;            
              }
            }
          }
        }
      }
      ${Content} {
        a:not([class*="LinkStatus"]):not(.icon):not(.anchor):not([class*="Btn"]):not(.imgContainer):not([class*="FeaturedIcon"]):not([class*="ImageContainer"]) {
          color: #fff;
        }
      }
    }
  }
  @keyframes blobAnimation {
    0% {
      d: path("M140.881198,194.260295 C257.600568,129.32862 342.939626,119.84993 418.009939,203.154617 C493.080251,286.459305 545.728689,70.9046172 636.439626,63.9593047 C727.150564,57.0139922 768.99822,139.670242 858.802907,119.431961 C948.607595,99.1936797 1071.91228,-32.9977266 1243.91228,7.75227342 C1415.91228,48.5022734 1404.10369,208.584305 1508.27166,178.709305 C1612.43963,148.834305 1633.73291,79.913472 1711.63588,98.8569055 C1776.28676,114.577866 1819.96778,221.391836 1889.37253,185.808108 C2017.32661,120.206212 2004.01952,336.769569 2004.01952,336.769569 L271.635881,337 L-149.063338,337 C-149.063338,337 -245.850307,175.637635 -58.0633382,228.867188 C33.8652851,254.92501 64.1722713,236.933925 140.881198,194.260295 Z"); }
    50% {
      d: path("M-60.13579,199.189799 C-33.8674767,-71.7287911 170.194454,11.9640675 274.985105,83.0972992 C379.775756,154.230531 409.072181,161.653171 521.54913,124.460269 C634.026079,87.2673683 645.348165,219.42808 735.152853,199.189799 C824.95754,178.951518 948.262228,46.7601116 1120.26223,87.5101116 C1292.26223,128.260112 1309.89513,321.347957 1414.0631,291.472957 C1518.23106,261.597957 1580.53259,89.5639434 1732.07052,88.5665294 C1892.57296,87.5101116 1897.70372,225.708266 2049.59054,199.189799 C2201.47736,172.671332 2002.94707,336.794682 2002.94707,336.794682 L270.563429,337.025114 L-60.13579,337.025114 C-60.13579,337.025114 -469.886827,134.917309 -282.099858,188.146862 C-190.171235,214.204685 -65.9645849,259.30515 -60.13579,199.189799 Z"); }
    to {
      d: path("M-160.553381,263.533987 C-124.4955,243.377988 -18.6139605,181.080724 56.456352,264.385412 C131.526664,347.690099 165.148428,226.409513 223.668826,168.5 C282.189224,110.590487 372.68516,208.331261 462.489847,188.09298 C552.294535,167.854699 723.262827,-40.1656225 847.424394,40.7522734 C971.58596,121.670169 1156.59375,252.295176 1300.40314,228.958726 C1444.21253,205.622277 1478.90991,106.221579 1563.51957,124.699258 C1655.80276,144.85274 1595.69955,250.007434 1832.41793,206.740235 C2069.1363,163.473036 2002.94707,336.794682 2002.94707,336.794682 L270.563429,337.025114 L-60.13579,337.025114 C-60.13579,337.025114 -495.794798,256.512987 -308.007829,309.74254 C-216.079206,335.800362 -208.740043,290.469854 -160.553381,263.533987 Z"); } 
  }
}
`
