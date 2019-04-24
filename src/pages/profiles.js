import React from "react"
import Layout from '../components/layout-mobile-footer'
//import style from '../styles/themes-tags.module.scss'
import { graphql, Link } from "gatsby"
import Headroom from 'react-headroom';
import '../styles/tooltips.css'
import Card from '../components/profiles/card'
import styled from 'styled-components';
import * as variable from 'src/styles/variables'
import { rgba, darken } from 'polished'
import LazyLoad from "react-lazyload"
import { createGlobalStyle } from 'styled-components'
import { Helmet } from "react-helmet";

// Pass image as css instead of a dom element (img) style={{backgroundImage :  `url(${node.frontmatter.thumbnail})` }}

const ProfilesPage = ({data}) => {
  const { edges, totalCount } = data.allMarkdownRemark
  //const tags = data.tags;

  return (
    <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Profiles | Discord Source</title>
      <meta property="og:site_name" content="Discord Source"/>
      <meta property="og:title" content={`Profiles | Discord Source`}/>
      <meta property="og:description" content={ "There are " + totalCount + ` Profiles`}/>
      <meta property="og:url" content="https://discordsource.com/themes/" />
    </Helmet>
    <Container>
    <GlobalStyle />
      <Content>
        <Hero>
          <MainText>Browse Themes/Plugins</MainText>
          <h2 style={{textAlign: "center", color: "#fff"}}>by Author</h2>
          <SubTextt href="https://developer.github.com/v3/users/">Powered by Github</SubTextt>
        </Hero>
      <TitleBarHeadroom disableInlineStyles>
        <TitleBar>
          <Count>#Profiles <span>({totalCount})</span></Count>
          <RightSide>
            <Search placeholder="Search Profiles (WIP)" ></Search>
            <Help target="blank" href="https://www.youtube.com/watch?v=MlRSS6ikKh0" data-balloon="Need help?" data-balloon-pos="left">?</Help>
          </RightSide>
        </TitleBar>
      </TitleBarHeadroom>

        <Main>
          <Wrapper>
            {edges.map(({ node }) => {
              return (
                <LazyLoad key={node.id} height="10rem">
                  <Card
                  title={node.frontmatter.author_id} 
                  thumbnail={node.frontmatter.avatar_url}
                  slug={node.fields.slug}
                  theme={node.frontmatter.theme_developer}
                  plugin={node.frontmatter.plugin_developer}
                  tags={node.frontmatter.tags}
                  author={node.frontmatter.author_id}
                  excerpt={node.excerpt}
                  demo={node.frontmatter.demo}
                  mode={node.frontmatter.style}
                  featured= {node.frontmatter.featured}
                  bio={node.frontmatter.bio}
                  />
                </LazyLoad>
              )
            })}
          </Wrapper>
        </Main>
      </Content>

    </Container>
    <UploadContainer>
        <UploadBtn to="/theme/upload-a-theme/">
        +
        </UploadBtn>
    </UploadContainer>
    <HelpContainer>
        <HelpBtn data-balloon="Need help with theme installation?" data-balloon-pos="left" href="https://www.youtube.com/watch?v=MlRSS6ikKh0" target="blank">?</HelpBtn>
    </HelpContainer>
    </Layout>
  )
}

export default ProfilesPage

export const pageQuery = graphql`
  query AllProfiles {
    allMarkdownRemark( filter: { collection: { eq: "profiles" } } ) {
        ...profileFragment
    }
  }
`

const Content = styled.section`
`
const Wrapper = styled.div`
`
const Main = styled.div`
`
const Hero = styled.div`
`
const MainText = styled.h1`
`
const SubTextt = styled.a`
`

const Container = styled.div`
  display: block;
  background-color: transparent;
  flex-direction: row;
  @media ${variable.MidPoint} {
    display: flex;
    flex-direction: column;
  }
  ${Hero} {
    background-color: ${variable.SiteColor};
    padding: 0.4rem 0;
    position: relative;
    ${MainText} {
      color: #fff;
      margin: unset;
      text-align: center;
    }
    ${SubTextt} {
      color: #fff;
      margin: unset;
      text-align: center;
      font-size: 0.4rem;
      position: absolute;
      bottom: 0.2rem;
      left: 0.2rem;
    }
  }
  ${Content} {
    order: 1;
    display: flex;
    flex-direction: column;
    @media ${variable.MidPoint} {
        flex: 3;
    }
  }
  ${Main} {
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
    a:not(.icon):not(.anchor):not([class*="Btn"]):not(.imgContainer):not([class*="FeaturedIcon"]):not([class*="ImageContainer"]):not([class*="ThumbnailLink"]) {
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
      display: flex;
      /*width: calc(100% - 75px);*/
      margin: 0 auto;
      padding: 1.1rem 1rem;
      padding-bottom: 3.1rem;
      word-break: break-all;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      background-color: #f4f4f4;
      @media ${variable.MidPoint} {
        padding: 2.1rem 1rem;
        width: 100%;
      }
    }
  }
`

const TitleBar = styled.div`
  background-color: #fff;
  border-bottom: 1px solid #f5f3f7;
  display: flex;
  flex-direction: row;
  padding: 0.42rem 0.62rem;
  padding-bottom: unset;
  position: sticky;
  z-index: 3;
  flex-wrap: wrap;
  justify-content: space-between;
`

const TitleBarHeadroom = styled(Headroom)`
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
`

const Count = styled.div`
  font-weight: bold;
  color: ${variable.SiteColor};
  font-size: 0.85rem;
  align-self: center;
  margin-bottom: 0.32rem;
  span {
    font-weight: 500;
    font-size: 0.6em;
  }
`

const RightSide = styled.div`
  align-self: center;
  margin-bottom: 0.42rem;
`

const Search = styled.input`
  border: unset;
  transition: .2s ease-in-out opacity;
  border-radius: 2px;
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
`

const Help = styled.a`
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
`

const Upload = styled.a`
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
`

const UploadBtn = styled(Link)`

`

const UploadContainer = styled.div`
  display: inline;
  position: fixed;
  bottom: 52px;
  z-index: 101;
  color: #fff;
  font-size: 10px;
  width: 100%;
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

const HelpBtn = styled.a`

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
    ${Content} {
      ${TitleBarHeadroom} {
        ${TitleBar} {
          border-bottom: 1px solid #222327;
          background-color: #222327;
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
      ${Main} {
        a:not(.icon):not(.anchor):not([class*="Btn"]):not(.imgContainer):not([class*="FeaturedIcon"]):not([class*="ImageContainer"]) {
          color: #fff;
        }
        ${Wrapper} {
          background-color: #36393f;
        }
      }
    }
  }
}
`