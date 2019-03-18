import React from 'react'
//import style from 'src/styles/tags.module.scss'
import { Link, StaticQuery, graphql } from 'gatsby'
import kebabCase from "lodash/kebabCase"
import * as variable from 'src/styles/variables'
import { rgba, darken } from 'polished'
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'

const pluginSidebarSoftware = () => (
    <StaticQuery
    query={ graphql`
    query pluginSoftwareInfo {
        allMarkdownRemark(filter: {collection: {eq: "plugins"}}) {
        group(field: frontmatter___software) {
            fieldValue
            totalCount
        }
          ...pluginFragment
        }
      }      
  `}
    render={data => (
        <Container>
            <GlobalStyle />
            <Tag
            activeClassName="active"
            to="/plugins/"
            >All</Tag>
            {data.allMarkdownRemark.group.map(software => (
                <Tag 
                activeClassName="active"
                to={`/plugins/softwares/${kebabCase(software.fieldValue)}/`}
                key={software.fieldValue}
                ><p>{software.fieldValue}</p> <div>{software.totalCount}</div>
                </Tag>
            ))}
        </Container>
        )}
    />
)

export default pluginSidebarSoftware

const Tag = styled(Link)`
`
const Container = styled.div`
    display: flex;
    overflow-x: auto;
    width: 100%;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar-button { 
        display: none; 
        height: 7px;
        border-radius: 0px; 
    } 
    &::-webkit-scrollbar-thumb { 
        background-color: ${rgba(variable.SiteColor, 0.3)};
        transition: background-color .2s ease-in-out;
        height: 7px;
    } 
    &::-webkit-scrollbar-thumb:hover { 
        background-color: ${variable.SiteColor};
    } 
    &::-webkit-scrollbar-track { 
        background-color: ${rgba(variable.SiteColor, 0.06)};
        height: 7px;
    }
    &::-webkit-scrollbar { 
        width: 8px;
        height: 7px;
    }
    ${Tag} {
        border-radius: 25px;
        border: 1px solid #dfe1e5;
        padding: .2rem .45rem;
        font-size: .5rem;
        margin-left: 5px;
        background-color: #fff;
        color: #6f6f6f;
        margin-top: .3em;
        margin-bottom: .8em;
        /* line-height: 1rem; */
        transition-duration: .8s;
        display: flex;
        flex-direction: row;
        align-self: center;
        @media ${variable.MidPoint} {
            padding: .25rem .5rem;
        }
        &[href="/plugins/softwares/null/"] {
            display: none;
        }
        p {
            margin: unset;
            align-self: center;
        }
        div {
            background-color: #eee;
            color: #5f6368;
            border-radius: 50%;
            /* width: .9rem; */
            /* height: .9rem; */
            text-align: center;
            font-size: .4rem;
            margin-left: .28rem;
            /* display: block; */
            padding: 0.15rem;
            align-self: center;
        }
        &:hover {
            border-bottom-left-radius: 0px;
            -webkit-box-shadow: 0 10px 90px rgba(0, 0, 0, 0.08);
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08), 0 2px 6px 2px rgba(0, 0, 0, 0.03);
        }
        &.active {
            color: ${variable.SiteColor};
            border: 1px solid ${rgba(variable.SiteColor, 0.15)};
            outline: unset;
            background-color: ${rgba(variable.SiteColor, 0.1)};
            box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 1px 0 0px rgba(0, 0, 0, 0.08);
        }
        &:first-child {
            margin-left: 18px;
        }
        &:active, &:focus {
            box-shadow: 0 1px 2px 0 ${rgba(variable.SiteColor, 0.45)}, 0 2px 6px 2px ${rgba(variable.SiteColor, 0.3)};
            color: ${variable.SiteColor};
        }
    }
`

const GlobalStyle = createGlobalStyle`
[mode="dark"] {
    ${Container} {
        ${Tag} {
            background-color: #44464b;
            border-color: #44464b;
            color: rgba(255, 255, 255, 0.85);
            div {
                background-color: ${variable.SiteColor};
                color: #fff;
            }
            &.active {
                color: #fff;
                border: 1px solid ${rgba(variable.SiteColor, 0.1)};
                outline: unset;
                background-color: ${darken(0.1, variable.SiteColor)};
                box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 1px 0 0px rgba(0, 0, 0, 0.08);
            }
        }
    }
}
`