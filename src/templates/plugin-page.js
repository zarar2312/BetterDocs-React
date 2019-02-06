import React from 'react'
import Layout from '../components/layout-mobile-footer'
//import hero from '../styles/altHero.module.scss'
//import style from '../styles/plugin-page.module.scss'
import { graphql } from 'gatsby'
import Sidebar from '../components/plugins/sidebar'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import kebabCase from "lodash/kebabCase"
import Helmet from 'react-helmet'
import AdSense from 'react-adsense';
//import ad from '../styles/ad.module.scss'
//import alert from '../styles/alerts.module.scss'
import Alerts from '../components/plugins/plugin-page-alerts'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
//import "../styles/plugin-page.css"
import Hero from '../components/plugins/hero'
import styled from 'styled-components';
import * as variable from '../styles/variables'
import { darken } from 'polished'

const Plugins = (props) => {
  const pluginList = props.data.listPlugins;
  const previewList = props.data.previewsList;
  const dependenciesList = props.data.dependencyList;
  const softList = props.data.softwareList;

  return (
  <Layout>
    {pluginList.edges.map(({ node }, i) => (
    <Helmet
      key={node.id}
      title={ node.frontmatter.title + ' by ' + node.frontmatter.author + ' | BetterDocs' }
      meta={[
        { name: 'description', content: node.frontmatter.description },
        { name: 'keywords', content: 'Discord, BetterDiscord, EnhancedDiscord, TwitchCord, Discord Hacks, Hacks, Mods, Discord Themes, Themes, Discord Plugins, Plugins, Discord Bots, Bots, Discord Servers, Discord Style, Styles' },
      ]}>
      <meta property="og:site_name" content="BetterDocs"/>
      {node.frontmatter.author ?
      <meta property="og:title" content={node.frontmatter.title + ' by ' + node.frontmatter.author}/>
      :
      <meta property="og:title" content={node.frontmatter.title}/>
      }
      <meta property="og:description" content={node.frontmatter.description}/>
      {node.frontmatter.thumbnail ?
      <meta property="og:image" content={node.frontmatter.thumbnail}/>
      :
      null
      }
      <meta property="og:url" content={"https://betterdocs.us/plugins" + node.fields.slug} />
      <html lang="en" />
    </Helmet>
    ))}
    <Container>
    {pluginList.edges.map(({ node }, i) => (
      <Wrapper key={node.id}>
        <Alerts
        status={node.frontmatter.status}
        slug={node.fields.slug}
        title={node.frontmatter.title}
        />
        <Hero
        title={node.frontmatter.title}
        author={node.frontmatter.author}
        download={node.frontmatter.download}
        auto={node.frontmatter.auto}
        support={node.frontmatter.support}
        status={node.frontmatter.status}
        tags={node.frontmatter.tags}
        npm_source_url={node.frontmatter.npm_source_url}
        npm_i={node.frontmatter.npm_i}
        github_source_url={node.frontmatter.github_source_url}
        gitlab_source_url={node.frontmatter.gitlab_source_url}
        discord_server={node.frontmatter.discord_server}
        SoftwaresGrouped={softList.group}
        tagsGrouped={pluginList.group}
        />
        {node.frontmatter.dependency &&
          <DependencyContainer>
            <Header><b>Required</b> Dependency(ies)</Header>
            <Dependencies>
              {dependenciesList.group.map(dependency => (
                <Button href={dependency.fieldValue} target="blank" key={dependency.fieldValue}>
                  <Text>Download</Text>
                </Button>
              ))}
            </Dependencies>
          </DependencyContainer>
        }
        <Ad>
          <AdSense.Google
              client='ca-pub-1998206533560539'
              slot='6545618600'
              style={{ display: 'block' }}
              format='auto'
              responsive='true'
            />
        </Ad>
        {previewList.edges.map(({ node }, i) => (
        <Tabbs key={node.id}>
          <TabListt>
            {node.frontmatter.previews ?
              <Tabb>Overview</Tabb>
            :
              <Tabb>Overview</Tabb>
            }            
            {node.frontmatter.previews &&
              <Tabb>Screenshots</Tabb>
            }
          </TabListt>
          <TabPanell>
            <ContentContainer>
                <Content>
                  <HtmlContent
                  dangerouslySetInnerHTML={{ __html: node.html }}>
                  </HtmlContent>
                  <Footer>
                    {node.frontmatter.date && 
                    <Date>
                    Last edit: {node.frontmatter.date}
                    </Date>
                    }
                    <Edit
                    target="blank" 
                    href={`https://github.com/MrRobotjs/BetterDocs-React/edit/master/src/plugins/${kebabCase(node.fields.slug)}.md`}
                    >
                    <svg id='Capa_1' xmlns='http://www.w3.org/2000/svg' width='459' height='459' viewBox='0 0 459 459'>
                        <path d='M0,362.1V459h96.9l280.5-283.05l-96.9-96.9L0,362.1z M451.35,102c10.2-10.2,10.2-25.5,0-35.7L392.7,7.649 c-10.2-10.2-25.5-10.2-35.7,0l-45.9,45.9l96.9,96.9L451.35,102z' id='create' />
                    </svg> Edit this page
                    </Edit>
                  </Footer>
                </Content>
            </ContentContainer>
          </TabPanell>
          {node.frontmatter.previews &&
            <TabPanell>
              <h2>Previews (wip)</h2>
              {previewList.group.map(image => (
                <img src={image.fieldValue} alt={image.fieldValue} key={node.id}/>
              ))}
            </TabPanell>
          }
        </Tabbs>
        ))}
      </Wrapper>
      ))}
      <Sidebar />

    </Container>
    <BackButton
    to="/plugins/"
    cover
    bg="#0a0a0a"
    >
      <svg xmlns='http://www.w3.org/2000/svg' id='Capa_1' viewBox='0 0 240.823 240.823' width='512' height='512'>
        <path id='Chevron_Right' d='M57.633,129.007L165.93,237.268c4.752,4.74,12.451,4.74,17.215,0c4.752-4.74,4.752-12.439,0-17.179 l-99.707-99.671l99.695-99.671c4.752-4.74,4.752-12.439,0-17.191c-4.752-4.74-12.463-4.74-17.215,0L57.621,111.816 C52.942,116.507,52.942,124.327,57.633,129.007z' fill='#FFF' />
      </svg>
    </BackButton>
    {pluginList.edges.map(({ node }, i) => (
    <TopHeader key={node.id}>
      <div>{node.frontmatter.title}</div>
    </TopHeader>
    ))}
  </Layout>
)
}

export default Plugins;

/*
{node.frontmatter.thumbnail &&
  <a href={node.frontmatter.thumbnail} target="blank" className={style.imgContainer}>
    <img className={style.img} src={node.frontmatter.thumbnail} alt={node.frontmatter.title} />
  </a>
} 
*/

export const pluginsQuery = graphql`
  query pluginsQuery($slug: String!) {
    listPlugins:allMarkdownRemark(
      filter: {
        collection: { 
          eq: "plugins" 
        }
        fields: {
          slug: {
            eq: $slug
          }
        }
      }) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
      ...pluginFragment
    },
    previewsList:allMarkdownRemark(
      filter: { 
        collection: { 
          eq: "plugins" 
        } 
        fields: {
          slug: {
            eq: $slug
          }
        }
      }
      ) {
      group(field: frontmatter___previews) {
        fieldValue
        totalCount
      }
      ...pluginFragment
    },
    softwareList:allMarkdownRemark(
      filter: {
        collection: { 
          eq: "plugins" 
        }
        fields: {
          slug: {
            eq: $slug
          }
        }
      }) {
      group(field: frontmatter___software) {
        fieldValue
        totalCount
      }
      ...pluginFragment
    },
    dependencyList:allMarkdownRemark(
      filter: {
        collection: { 
          eq: "plugins" 
        }
        fields: {
          slug: {
            eq: $slug
          }
        }
      }) {
      group(field: frontmatter___dependency) {
        fieldValue
        totalCount
      }
      ...pluginFragment
    }
  }
`

const Wrapper = styled.section`
`
const DependencyContainer = styled.div`
`
const Header = styled.div`
`
const Dependencies = styled.div`
`
const Button = styled.a`
`
const Text = styled.div`
`
const TabListt = styled(TabList)`
`
const Tabb = styled(Tab)`
`
const TabPanell = styled(TabPanel)`
`
const ContentContainer = styled.div`
`
const Content = styled.div`
`
const HtmlContent = styled.div`
`
const Footer = styled.div`
`
const Date = styled.div`
`
const Edit = styled.a`
`
const Tabbs = styled(Tabs)`
`
const Ad = styled.div`
`
const TopHeader = styled.div`
  position: fixed;
  top: 0px;
  z-index: 100;
  display: block;
  color: #fff;
  background-color: #0a0a0a;
  width: 100%;
  padding: 1rem 0;
  text-align: center;
  box-shadow: -4px 0px 8px 0px black;
  div {
      width: calc(100% - 4rem);
      display: block;
      margin: 0 auto;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 0.7rem;
  }
  @media (min-width: 850px) {
      display: none;
  }
`
const Container = styled.div`
  display: block;
  flex-direction: row;
  background-color: #fff;
  @media (min-width: 850px) {
    display: flex;
  }
  ${Wrapper} {
    order: 1;
    display: flex;
    flex: 3;
    flex-direction: column;
    overflow: hidden;
    padding-left: unset;
    @media (min-width: 850px) {
      padding-left: 14.8rem;
    }
    ${DependencyContainer} {
      display: flex;
      flex-direction: column;
      padding: 1rem;
      order: 2;
      background-color: #eee;
      ${Header} {
        margin-bottom: 17px;
        margin-top: -10px;
        font-size: 0.7rem;
      }
      ${Dependencies} {
        display: flex;
        counter-reset: dependency;  
        ${Button} {
            margin-left: 10px;
            &:first-child {
                margin-left: unset;
            }
            ${Text} {
              display: block;
              background-color: ${variable.SiteColor};
              color: #fff;
              border-radius: 2px;
              padding: 0.3rem 0.6rem;
              font-size: 0.6rem;
              border: 1px solid ${darken(0.1,variable.SiteColor)};
              transition: 250ms all linear;
              position: relative;
              &:hover {
                background: ${darken(0.1,variable.SiteColor)};
              }
              &::before {
                counter-increment: dependency;
                position: absolute;
                top: -8px;
                left: -8px;
                background-color: ${darken(0.1,variable.SiteColor)};
                padding: 4px 7px;
                font-size: 0.5rem;
                border-radius: 50%;
                content: counter(dependency);
                margin-right: 4px;
              }
              &:only-child {
                &::before {
                content: unset;
              }
            }
          }
        }
      }
    }
    ${Tabbs} {
      order: 3;
      ${TabListt} {
        display: flex;
        justify-content: center;
        border-bottom: unset;
        margin-bottom: unset;
        margin-left: unset;
        ${Tabb} {
          transform: all 250ms linear;
          margin: calc(1.45rem / 2) 0;
          padding: .35rem .75rem;
          text-shadow: 0 1px rgba(255,255,255,0.5);
          border-radius: 100px;
          border: 1px solid transparent;
          font-size: .575rem;
          font-weight: bold;
          color: #5f6368;
          list-style: none;
          cursor: pointer;
          &:nth-child(2) {
            margin-left: 10px;
          }
          &:only-child {
            display: none;
          }
          &:hover {
                color: #000;
                background-color: rgba(0,0,0,0.1);
            }
          &:focus {
              outline: unset;
              border: 1px solid ${darken(0.1,variable.SiteColor)};
              box-shadow: unset;
          }
          &:focus::after {
              display: none;
          }
          &[class*="selected"] {
            color: #fff;
            box-shadow: unset;
            text-shadow: unset;
            background-color: ${variable.SiteColor};
          }
        }
      }
      ${TabPanell} {
        /*width: calc(100% - 75px);*/
        margin: 0 auto;
        @media (min-width: 850px) {
          /*width: calc(100% - 300px);*/
        }
        ${ContentContainer} {
          display: flex;
          order: 4;
          flex-direction: column;
          max-height: 100%;
          overflow: auto;
          -webkit-overflow-scrolling: touch;
          padding-bottom: 3.1rem;
          @media (min-width: 850px) {
              padding-bottom: unset;
            }
            ${Content} {
              display: block;
              width: calc(100% - 75px);
              margin: 0 auto;
              padding-top: 2.1rem;
              /*padding-bottom: 2.1rem;*/
              word-break: break-all;
              flex-direction: column;
              font-size: 0.67rem;
              @media (min-width: 850px) {
                  width: calc(100% - 300px);
                  display: flex;
              }
            ${HtmlContent} {
              display: block;
              word-break: break-word;
              a:not([class*="anchor"]) {
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
                  color: #fff;
                  opacity: 1;
                  background-color: transparent;
                &::after {
                    height: 110%;
                    width: 110%;
                  }
                }
              }
            }
            ${Footer} {
              display: flex;
              border-top: 1px solid #f5f3f7;
              flex-direction: row;
              ${Date} {
                  flex: 1;
                  margin-top: 25px;
                  margin-bottom: 25px;
                  color: #3a3a3a;
              }
              ${Edit} {
                margin-top: 25px;
                opacity: 0.7;
                border-color: transparent;
                box-shadow: 0px 0px transparent;
                display: -webkit-inline-box;
                margin-bottom: 25px;
                color: #000;
                svg {
                    height: 15px;
                    width: 15px;
                    margin-right: 8px;
                }
              }
            }
          }
        }
      }
    }
  }
`
const BackButton = styled(AniLink)`
  position: fixed;
  top: 22px;
  left: 17px;
  z-index: 101;
  display: block;
  @media (min-width: 850px) {
      display: none;
  }
  svg {
      height: 20px;
      width: 20px;
  }
}
${Ad} {
  order: 3;
  display: block;
`