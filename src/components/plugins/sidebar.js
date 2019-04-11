import React from 'react'
//import style from 'src/styles/plugin-sidebar.module.scss'
import { StaticQuery, graphql } from 'gatsby'
import Tags from 'src/components/plugins/sidebar-software'
import Headroom from 'react-headroom';
import Card from 'src/components/plugins/sidebar-card'
import * as variable from 'src/styles/variables'
import { rgba } from 'polished'
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'

const Sidebar = () => (
  <StaticQuery
    query={ graphql`
    query pluginsSidebarQuery {
      listPlugins:allMarkdownRemark(filter: { collection: { eq: "plugins" } } sort: { fields: [frontmatter___title], order: ASC}) {
        group(field: collection) {
          fieldValue
          totalCount
        }
        ...pluginFragment
      }
  }
  `}
    render={data => (
      <>
        <AnimHeader downTolerance={5} disableInlineStyles>
        <GlobalStyle />
          <SidebarContainer>
          <Header>
            <Search 
            placeholder='Search Plugins library (WIP)'></Search>
            <Output>
              {data.listPlugins.totalCount + ' Plugins'}
            </Output>
            <Tags />
          </Header>
          <Results>
          {data.listPlugins.edges.map(({ node }, i) => (
            <Card 
            key={node.id}
            title={node.frontmatter.title}
            author={node.frontmatter.author.frontmatter.author_id}
            slug={node.fields.slug}
            status={node.frontmatter.status}
            excerpt={node.excerpt}
            />
            ))}
          </Results>
        </SidebarContainer>
      </AnimHeader>
      </>
    )}
  />
)

export default Sidebar

const Results = styled.div`
  display: flex;
  flex-direction: column;
  max-height: calc(((((100vh - 1.4rem) - 2.5rem) - 2.45rem) - 1.05rem) - 2.8rem); /*28.2*/
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  @media ${variable.MidPoint} {
      max-height: calc(((((100vh - 1.35rem) - 2.5rem) - 2.45rem) - 1.05rem) - 2.8rem);/*1.42 (1.35)*/
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
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid rgb(245, 243, 247);
`

const Output = styled.div`
  color: rgba(0, 0, 0, 0.54);
  font-size: 0.55rem;
  margin: 0 1.05rem;
`

const Search = styled.input`
  background: #fff;
  border: 1px solid #e0d6eb;
  border-radius: 4px;
  color: ${variable.SiteColor};
  display: inline-block;
  font-size: 0.75rem;
  height: 1.85rem;
  padding: 0;
  padding-right: 1.25rem;
  padding-left: 1.25rem;
  margin: 0.55rem 1rem;
  margin-bottom: 0.3rem;
  vertical-align: middle;
  white-space: normal;
  width: calc(100% - 2.1rem);
`

const SidebarContainer = styled.section`
  background: rgb(251, 250, 252);
  border-right: 1px solid rgb(245, 243, 247);
  order: 0;
  display: none;
  flex: 1;
  @media ${variable.MidPoint} {
      position: fixed;
      display: block;
      width: 14.8rem;
  }
`

const AnimHeader = styled(Headroom)`
display: none;
  @media ${variable.MidPoint} {
        display: block;
    }
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
    }
    .headroom--unpinned {
        position: fixed;
        transform: translateY(-100%);
        ${Results} {
          max-height: calc(((((100vh - -3.3rem) - 2.5rem) - 2.45rem) - 1.05rem) - 2.8rem) !important;
        }
    }
    .headroom--pinned {
        position: fixed;
        transform: translateY(0%);
        top: 1.82rem;
        ${Results} {
          max-height: calc(((((100vh - -1.58rem) - 2.5rem) - 2.45rem) - 1.05rem) - 2.8rem) !important;
        }
    }
`

const GlobalStyle = createGlobalStyle`
[mode="dark"] {
  ${SidebarContainer} {
    background-color: #2f3136;
    border-color: #2f3136;
    ${Header} {
      border-color: #222327;
    ${Output} {
      color: #eee;
    }
    ${Search} {
        background: rgba(255, 255, 255, 0.1);
        color: #eee;
        border-color: transparent;
        &::placeholder {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.6;
        }
        &:hover {
          background: rgba(255, 255, 255, 0.07);
        }
        &:active, &:focus {
          background: rgba(255, 255, 255, 0.05);
          outline: unset;
        }
      }
    }
  }
}
`