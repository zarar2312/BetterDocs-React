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
import AdSense from 'react-adsense';
import LazyLoad from "react-lazyload"

// Pass image as css instead of a dom element (img) style={{backgroundImage :  `url(${node.frontmatter.thumbnail})` }}

const Themes = (props) => {
  const themeList = props.data.allMarkdownRemark;
  //const tags = props.data.tags;
  const featuredList = props.data.featured;
  const { totalCount } = props.data.allMarkdownRemark;
  const listCount = `${totalCount}`
  
  return (
  <Layout>
    <Helmet>
        <meta charSet="utf-8" />
        <title>BetterDocs | #1 Discord Themes</title>
        <meta property="og:site_name" content="BetterDocs"/>
        <meta property="og:title" content="BetterDocs | #1 Discord Themes"/>
        <meta property="og:description" content="List of free high quality Discord themes by the community! Customize Discord to your own liking with transparent themes and modern themes!"/>
        <meta property="og:url" content="https://betterdocs.us/themes/" />
    </Helmet>
    <Container>
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
            to="/themes/upload-a-theme/">Publish your theme</PublishBtn>
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
          author={node.frontmatter.author}/>
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
        <Search placeholder="Search Themes library (WIP)" ></Search>
        <Help target="blank" href="https://www.youtube.com/watch?v=j_Uc0wZPJSY" data-balloon="Need help with theme installation?" data-balloon-pos="left">?</Help>
        <Upload
        data-balloon="Want to publish your theme?" data-balloon-pos="left"
        to="/themes/upload-a-theme/">
          <svg id='Capa_1' xmlns='http://www.w3.org/2000/svg' width='433.5' height='433.5'
          viewBox='0 0 433.5 433.5'>
              <g id='file-upload'>
                  <polygon points='140.25,331.5 293.25,331.5 293.25,178.5 395.25,178.5 216.75,0 38.25,178.5 140.25,178.5'
                  />
                  <rect x='38.25' y='382.5' width='357' height='51' />
              </g>
          </svg>
        </Upload>
      </TitleBar>
    </TitleBarHeadroom>
      <Content>
          <Wrapper>
          {themeList.edges.map(({ node }, i) => (
            <LazyLoad key={node.id} height="10rem">
              <Card
              title={node.frontmatter.title} 
              thumbnail={node.frontmatter.thumbnail}
              slug={node.fields.slug}
              status={node.frontmatter.status}
              tags={node.frontmatter.tags}
              author={node.frontmatter.author}
              excerpt={node.excerpt}
              demo={node.frontmatter.demo}
              style={node.frontmatter.style}
              featured= {node.frontmatter.featured}
              />
            </LazyLoad>
          ))}
        </Wrapper>
      </Content>

    </ContainerSection>

    </Container>
    <UploadContainer>
        <UploadBtn to="/themes/upload-a-theme/">
        +
        </UploadBtn>
    </UploadContainer>
    <HelpContainer>
        <HelpBtn data-balloon="Need help with theme installation?" data-balloon-pos="left" href="https://www.youtube.com/watch?v=j_Uc0wZPJSY" target="blank">?</HelpBtn>
    </HelpContainer>
  </Layout>
)
}

export default Themes;

export const allThemesQuery = graphql`
query allThemesQuery {
  allMarkdownRemark(filter: {collection: {eq: "themes"} } sort: { fields: [frontmatter___title], order: ASC}) {
    group(field: collection) {
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

const Container = styled.div`
  display: block;
  background-color: transparent;
  flex-direction: row;
  @media (min-width: 850px) {
    display: flex;
    flex-direction: column;
  }
  ${FeaturedSection} {
    flex-direction: column;
    display: none;
    overflow: hidden;
    background-color: #fff;
    @media (min-width: 850px) {
        display: flex;
    }
    ${FeaturedBar} {
      display: block;
      padding: 0.62rem 0.82rem;
      @media (min-width: 850px) {
          display: flex;
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
            margin-left: 15px;
            font-size: 0.85rem;
            color: ${variable.SiteColor};
            font-weight: bold;
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
        justify-content: flex-end;
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
          }
        }
      }
    }
    ${FeaturedContainer} {
      display: flex;
      flex-wrap: nowrap;
      overflow-x: scroll;
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
    @media (min-width: 850px) {
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
      @media (min-width: 850px) {
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
        background-color: #fff;
        border-bottom: 1px solid #f5f3f7;
        display: flex;
        flex-direction: row;
        padding: 0.42rem 0.62rem;
        position: sticky;
        z-index: 3;
        ${Count} {
          flex: 10;
          font-weight: bold;
          color: ${variable.SiteColor};
          font-size: 0.85rem;
          align-self: center;
          span {
            font-weight: 500;
            font-size: 0.6em;
          }
        }
        ${Search} {
          border: unset;
          transition: .2s ease-in-out opacity;
          border-radius: 2px;
          flex: 2;
          font-size: 0.7rem;
          align-self: center;
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
          @media (min-width: 850px) {
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
          @media (min-width: 850px) {
            display: initial;
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
      background-color: #fff;
      @media (min-width: 850px) {
        max-height: unset;
        background: #fff;
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
      a:not(.icon):not(.anchor):not([class*="Btn"]):not(.imgContainer):not([class*="FeaturedIcon"]):not([class*="ImageContainer"]) {
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
        padding-top: 1.1rem;
        padding-bottom: 3.1rem;
        word-break: break-all;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        @media (min-width: 850px) {
          display: flex;
          padding: 2.1rem 0;
        }
      }
    }
  }
`

const UploadContainer = styled.div`
  display: inline;
  position: fixed;
  bottom: 52px;
  z-index: 100;
  color: #fff;
  font-size: 10px;
  width: 100%;
  pointer-events: none;
  @media (min-width: 850px) {
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
  @media (min-width: 850px) {
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