import React from 'react'
//import style from 'src/styles/plugins-software-bar.module.scss'
import { Link, StaticQuery, graphql } from 'gatsby'
import kebabCase from "lodash/kebabCase"
import styled from 'styled-components';
import * as variable from 'src/styles/variables'
import { rgba, darken } from 'polished'
import { createGlobalStyle } from 'styled-components'

const pluginSoftware = () => (
    <StaticQuery
    query={ graphql`
    query pluginSoftware {
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
        <SoftwareBar>
            <GlobalStyle />
            <TagsContainer>
                <Tag 
                activeClassName="active"
                to="/plugins/"
                >All</Tag>
                {data.allMarkdownRemark.group.map(software => (
                <Tag 
                activeClassName="active"
                to={`/plugins/softwares/${kebabCase(software.fieldValue)}/`}
                key={software.fieldValue}
                alt={software.fieldValue}
                title={"List of plugins compatible with " + software.fieldValue}>   
                    <p>{software.fieldValue}</p> <div>{software.totalCount}</div>
                </Tag>
                ))}
            </TagsContainer>
        </SoftwareBar>
        )}
    />
)

export default pluginSoftware

const TagsContainer = styled.div`
`
const Tag = styled(Link)`
`
const SoftwareBar = styled.div`
    background-color: #fff;
    border-bottom: 1px solid #f5f3f7;
    display: flex;
    flex-direction: row;
    position: sticky;
    z-index: 3;
    box-shadow: 2px 2px 5px rgba(0,0,0,.25);
    @media ${variable.MidPoint} {
        box-shadow: 2px 2px 5px rgba(0,0,0,.15);
    }
    ${TagsContainer} {
        display: flex;
        padding: 0;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        width: 100%;
        @media ${variable.MidPoint} {
        }
        &::-webkit-scrollbar-button { 
            display: none; 
            height: 10px; 
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
            height: 5px;
        }
        ${Tag} {
            display: flex;
            padding: 13px 37px;
            transition: 250ms ease-in-out;
            font-size: 0.7rem;
            color: #000;
            border-right: 1px solid #eee;
            &:first-child {
                border-left: 1px solid #eee;
            }
            &:hover {
                background-color: #eee;
            }
            &[alt*="BetterDiscord"] {
                display: none;
            }
            &.active {
                background-color: ${variable.SiteColor};
                color: #fff;
                &:first-child {
                    border-left: 0;
                }
                &:hover {
                    background-color: ${variable.SiteColor}; 
                }
                &[alt*="BetterDiscord"] {
                    background-color: ${variable.BetterDiscord};
                    display: none;
                    div {
                        background-color: ${darken(0.1,variable.BetterDiscord)};
                    }
                }
                &[alt*="Powercord"] {
                    background-color: ${variable.Powercord};
                    div {
                        background-color: ${darken(0.1,variable.Powercord)};
                    }
                }
                &[alt*="BandagedBD"] {
                    background-color: ${variable.BandagedBD};
                    div {
                        background-color: ${darken(0.1,variable.BandagedBD)};
                    }
                }
                &[alt*="EnhancedDiscord"] {
                    background-color: ${variable.EnhancedDiscord};
                    div {
                        background-color: ${darken(0.1,variable.EnhancedDiscord)};
                    }
                }
                &[alt*="DiscordInjections"] {
                    background-color: ${variable.DiscordInjections};
                    div {
                        background-color: ${darken(0.1,variable.DiscordInjections)};
                    }
                }
            }
            &:active, &:focus {
                background-color: ${darken(0.1,variable.SiteColor)};
                color: #fff;
            }
            div {
                max-height: 100%;
                border-radius: 50%;
                background-color: ${variable.SiteColor};
                max-width: 100%;
                font-size: 0.5rem;
                padding: 5px;
                margin-left: 8px;
                color: #fff;
            }
            p {
                    margin: unset;
                    align-self: center;
                }
        }
    }
`

const GlobalStyle = createGlobalStyle`
[mode="dark"] {
    ${SoftwareBar} {
        background-color: rgba(0,0,0,0.26);
        border-color: rgba(0,0,0,0.2);
        ${TagsContainer} {
            ${Tag} {
                border-color: #18191c;
                color: #fff;
                &:hover {
                    background-color: rgba(0,0,0,0.2);
                }
            }
        }
    }
}
`