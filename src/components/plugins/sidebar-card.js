import React from 'react'
import { Link } from 'gatsby'
//import style from 'src/styles/plugins-card.module.scss'
//import MissingSecond from 'src/images/missing_image.png'
//import kebabCase from "lodash/kebabCase"
import 'src/styles/tooltips.css'
import * as variable from 'src/styles/variables'
import { rgba } from 'polished'
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'

const pluginSidebarCard = ({title, slug, status, excerpt, author}) => (
    <Card
    activeClassName="active"
    to={'plugin' + slug}
    >
    <GlobalStyle />
        <Header>
            <Title>
                {title}
            </Title>
            <Author>
                {author}
            </Author>
        </Header>
        <Description>
            <Paragraph>
                {excerpt}
            </Paragraph>
        </Description>
        {status ?
            <Status alt={status}>{status}</Status>
        :
            <Status alt="Unknown">Unknown</Status>
        }
    </Card>
)

export default pluginSidebarCard

const Title = styled.span`
`
const Author = styled.span`
`
const Paragraph = styled.p`
`
const Status = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #00b167;
    font-size: 0.4rem;
    color:#fff;
    display: block;
    clip-path: polygon(0% -200%, 100% 115%, 100% 100%, 0% 100%);
    padding: 0.2rem 1rem 0.2rem 0.2rem;            
    &[alt="Deprecated"] {
        background-color: #a70a0a;
    }
    &[alt="Unknown"] {
        background-color: #005180;
    }
    @media ${variable.MidPoint} {
        left: -0.2rem;
    }
`
const Description = styled.div`
    ${Paragraph} {
        color: rgba(0, 0, 0, 0.54);
        font-size: 0.75em;
        line-height: 1.5;
        margin-bottom: 0.65rem;
    }
`

const Header = styled.div`
    display: flex;
    flex-basis: 100%;
    flex-direction: row;
    justify-content: flex-start;
    margin-bottom: 0.525rem;
    @media (max-width: 330px) {
        flex-direction: column;
        ${Title} {
            margin-top: 2px;
        }
    }
    ${Title} {
        flex: 1;
        font-weight: bold;
        color: rgba(0, 0, 0, 0.92);
    }
    ${Author} {
        color: rgba(0, 0, 0, 0.54);
        font-size: 0.52rem;
    }
`

const Card = styled(Link)`
    padding: 0.6rem;
    transition: .2s ease-in-out background-color, .2s ease-in-out border-left;
    width: calc(100% - 50px);
    margin: 0 auto;
    background-color: #fff;
    border: 1px solid #ede7f3;
    margin-top: 10px;
    border-radius: 8px;
    border-bottom-left-radius: 0px;
    font-size: 0.67rem;
    position: relative;
    &:hover {
        background-color: ${rgba(variable.SiteColor, 0.3)};
    }
    &:last-child {
        margin-bottom: 10px;
    }
    &.active {
        border-left: 4px solid ${variable.SiteColor};
        background-color: #fff;
        ${Header} {
            ${Title} {
                color: ${variable.SiteColor};
            }
            ${Author} {
                color: ${variable.SiteColor};
            }
        }
        ${Description} {
            ${Paragraph} {
                color: rgba(0, 0, 0, 0.92);
            }
        }
    }
    @media ${variable.MidPoint} {
        width: 100%;
        margin: unset;
        border-radius: unset;
        border-bottom-left-radius: unset;
        border: unset;
        border-bottom: 1px solid #ede7f3;
        border-left: 4px solid transparent;
        &.active {
            border-radius: unset !important;
            .status {
                left: 0rem;
            }
        }
        &:last-child {
            margin-bottom: unset;
        }
    }
`

const GlobalStyle = createGlobalStyle`
[mode="dark"] {
    ${Card} {
        background-color: #2f3136;
        border-color: #222327;
        border-left-color: transparent;
        &:hover {
            background-color: ${rgba(variable.SiteColor, 0.1)};
        }
        &.active {
            border-left: 4px solid ${variable.SiteColor};
            background-color: #27292e;
            ${Header} {
                ${Title} {
                    color: ${variable.SiteColor};
                }
                ${Author} {
                    color: ${variable.SiteColor};
                }
            }
            ${Description} {
                ${Paragraph} {
                    color: rgba(255, 255, 255, 0.92);
                }
            }
        }
        ${Header} {
            ${Title} {
                color: rgba(255, 255, 255, 0.92);
            }
            ${Author} {
                color: rgba(255, 255, 255, 0.54);
            }
        }
        ${Description} {
            display: flex;
            ${Paragraph} {
                color: rgba(255, 255, 255, 0.54);
            }
        }
    }
}
`