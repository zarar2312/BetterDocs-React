import React from 'react'
import { Link } from 'gatsby'
//import MissingSecond from 'src/images/missing_image.png'
import kebabCase from "lodash/kebabCase"
import 'src/styles/tooltips.css'
import * as variable from 'src/styles/variables'
import { rgba } from 'polished'
import styled from 'styled-components';
//import stylehero from 'src/styles/altHero.module.scss'
import { createGlobalStyle } from 'styled-components'

const pluginsHero = ({title,npm_i,download,auto,support,github_source_url,gitlab_source_url,npm_source_url,discord_server,tags,SoftwaresGrouped,tagsGrouped,author,status}) => (
    <Hero alt={title}>
    <GlobalStyle />
        <Container>
        {title && 
            <Header>{title}</Header>
        }
        {discord_server &&
        <Discord>
            <a href={discord_server} target="blank">
                <svg id='Layer_1' xmlns='http://www.w3.org/2000/svg' height="30" viewBox="0 0 250 240" width="30">
                    <path className='st0' d='M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z'
                    />
                    <path className='st0' d='M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z'
                    />
                </svg>
                Server</a>
        </Discord>
        }
        </Container>
    </Hero>
)

export default pluginsHero

const Container = styled.div`
`
const Header = styled.h2`
`
const Paragraph = styled.div`
`
const DetailsContainer = styled.div`
`
const Github = styled.div`
`
const Gitlab = styled.div`
`
const Npm = styled.div`
`
const Discord = styled.div`
`
const TagsContainer = styled.div`
`
const ATag = styled(Link)`
`
const SoftwaresContainer = styled.div`
`
const Softwaree = styled(Link)`
`
const Options= styled.div`
`
const DownloadBtn = styled.a`
`
const NpmBtn = styled.div`
`
const DemoBtn = styled.a`
`
const SupportBtn = styled.a`
`
const StatusContainer = styled.div`
`
const AStatus = styled.div`
`
const Hero = styled.div`
    order: 1;
    background: transparent;
    border-bottom: 2px solid #f0f0f0;
    display: block;
    color: #ffffff;
    text-align: center;
    position: relative;
    z-index: 99;
    padding: 30px 0px 30px 0px;
    background-size: cover;
    background-color: ${variable.SiteColor};
    &[alt="Upload a Plugin"] {
        ${SoftwaresContainer}, ${DetailsContainer} {
            display: none !important;
        }
    }
    &::before {
        content: "";
        background-size: 38%;
        position: fixed;
        width: 100%;
        height: 100%;
        border-radius: unset;
        transform: unset;
        box-shadow: unset;
        top: unset;
        bottom: unset;
        left: 0;
        top: 0;
        pointer-events: none;
    }
    ${Container} {
        margin: 0 auto;
        padding: 0;
        flex: 2;
        display: flex;
        flex-direction: column;
        ${Header} {
            font-size: 1.8rem;
            font-weight: bold;
            color: #282828;
            margin-bottom: unset;
            text-align: center;
            color: #fff;
        }
        ${Paragraph} {
            margin-top: 0.2rem;
            p {
                color: #999;
                font-size: 0.5em;
                margin-bottom: unset;
                    a {
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
        }
        ${DetailsContainer} {
            display: flex;
            margin-top: 0.3rem;
        }
        ${Discord} {
            position: absolute;
            bottom: 0.2rem;
            right: 0.2rem;
            border-radius: 3px;
            svg {
                height: 0.8rem;
                width: 0.8rem;
                opacity: 1;
                transition: 800ms ease-in-out;
                position: relative;
                left: -4px;
                top: 5px;
                fill: #fff;
            }
            a {
                background-color: #7289DA;
                color: #fff;
                font-size: 0.55rem;
                padding: 0.15rem 0.35rem;
                border-radius: 3px;
                border: 1px solid #7289DA;
                transition: all 300ms linear;
                &:hover {
                    color: #7289DA;
                    background-color: #fff;
                    border: 1px solid #7289DA;
                    svg {
                        fill: #7289DA;
                    }
                }
            }
        }
        ${StatusContainer} {
            margin-top: 0.3rem;
            &[alt="Deprecated"] {
                display: initial;
            }
            &[alt="Undefined"] {
                display: none;
            }
            &[alt="null"] {
                display: none;
            }
            &[alt="Updated"] {
                display: initial;
            }
            ${AStatus} {
                color: #4e4e4e;
                display: -webkit-box;
                div {
                    background: #fff;
                    border-radius: 25px;
                    color: #fff;
                    padding: 0.2rem 0.45rem;
                    /* position: relative; */
                    /* top: 0px; */
                    font-size: 0.45em;
                    display: -webkit-inline-box;
                    font-weight: bold;
                    border: 1px solid;
                }
                div[class="Updated"] {
                    border-color: #00b167;
                    color: #00b167;
                    background-color: rgba(#00b167,0.04);
                }
                div[class="Deprecated"] {
                    border-color: #a70a0a;
                    color: #a70a0a;
                }
                .unknown {
                    border-color: #005180;
                    color: #005180;
                }
            }
        }
    }
    ${Options} {
        flex: 1 1;
        display: flex;
        text-align: left;
        max-width: calc(100% - 25px);
        margin: 0 auto;
        margin-top: 10px;
        flex-direction: row;
        position: relative;
        @media (min-width: 450px) {
            max-width: calc(100% - 75px);
        }
        @media (min-width: 850px) {
            flex-direction: column;
            margin-top: unset;
            text-align: unset;
            max-width: unset;
            margin: unset;
            display: flex;
        }
        @media (max-width: 250px) {
            flex-direction: column;
            display: block;
        }
        ${DownloadBtn} {
            background-color: ${variable.SiteColor};
            padding: 0.6em 0.7rem;
            border-radius: 2px;
            color: #fff;
            margin-bottom: 5px;
            transition: 300ms ease-in-out;
            display: -webkit-inline-box;
            font-size: 0.67rem;
            padding-left: 12px;
            @media (min-width: 850px) {
                margin: 0 auto;
                margin-top: unset;
                margin-bottom: 5px;
            }
            &:hover {
                background-color: ${rgba(variable.SiteColor,0.85)};
            }
            &:active, &:focus {
                background-color: ${rgba(variable.SiteColor,0.65)};
            }
            svg {
                height: 0.6rem;
                width: 0.6rem;
                margin-right: 7px;
                position: relative;
                top: 2px;
            }
        }
        ${NpmBtn} {
            background-color: #fff;
            border: 1px solid #b3b3b3;
            border-left: 3px solid #b3b3b3;
            padding: 0.6em 0.6rem;
            border-radius: 2px;
            color: #0a0a0a;
            margin-bottom: 5px;
            transition: 300ms ease-in-out;
            display: -webkit-inline-box;
            font-size: 0.67rem;
            &::after {
                content: "Copy Me!";
                display: block;
                background-color: #0a0a0a;
                color: #fff;
                position: absolute;
                top: 2.1rem;
                left: 0;
                z-index: 150;
                margin: 0 auto;
                padding: 0.25rem 0.4rem;
                border-radius: 2px;
                text-align: center;
                box-shadow: 0 2px 25px rgba(0, 0, 0, 0.4) !important;
                transition: .2s linear all;
                opacity: 0;
                pointer-events: none;
                font-size: 0.5rem;
            }
            @media (min-width: 850px) {
                margin: 0 auto;
                margin-top: unset;
                &::after {
                    top: 0.28rem;
                    left: -0.8rem;
                }
            }
            svg {
                height: 0.5rem;
                width: 0.4rem;
                top: 1px;
                right: 4px;
                position: relative;
            }
            &:hover {
                background-color: #f7f7f7;
                &::after {
                    opacity: 1;
                }
            }
            &:active, &:focus {
                background-color: #f0f0f0;
            }
        }
        ${DemoBtn} {
            background-color: #fff;
            margin-bottom: 5px;
            margin-left: 10px;
            padding: 0.3rem 0.6rem;
            border-radius: 2px;
            color: ${variable.SiteColor};
            border: 1px solid;
            transition: 300ms ease-in-out;
            display: -webkit-inline-box;
            font-size: 0.67rem;
            @media (min-width: 850px) {
                margin: 0 auto;
                margin-top: 10px;
            }
            /*@media (max-width: 450px) {
                margin-left: unset;
            }*/
            &:hover {
                background-color: ${variable.SiteColor};
                color: #fff;
            }
            &:active, &:focus {
                opacity: 0.7;
            }
            &[alt="disabled"] {
                border-color: grey;
                color: grey;
                &:hover {
                    background-color: grey;
                    color: #fff;
                }
            }
        }
        ${SupportBtn} {
            background-color: transparent;
            margin-left: 5px;
            padding: 0.4rem 0.6rem;
            border-radius: 2px;
            color: #da002f;
            transition: 300ms ease-in-out;
            display: -webkit-inline-box;
            font-size: 0.67rem;
            @media (min-width: 850px) {
                margin: 0 auto;
                margin-top: 10px;
            }
            @media (max-width: 250px) {
                margin-left: unset;
            }
            &:hover {
                background-color: #ad0026;
                color: #fff;
            }
            &:active, &:focus {
                opacity: 0.8;
            }
        }
    }
`

const GlobalStyle = createGlobalStyle`
[mode="dark"] {
    ${Hero} {
        border-color: #222327;
        ${Container} {
            ${Header} {
                color: #eee;
            }
            ${Paragraph} {
                p {

                }
                a {
                    color: #fff;
                }
            }
            ${DetailsContainer} {
                ${Github} {
                    &::after {
                        content: "|";
                        color: #222327;
                        position: relative;
                        top: 2px;
                        left: 5px;
                    }
                }
                ${Gitlab} {
                    &::after {
                        content: "|";
                        color: #222327;
                        position: relative;
                        top: 2px;
                        left: 5px;
                    }
                }
                ${Npm} {
                    &::after {
                        content: "|";
                        color: #222327;
                        position: relative;
                        top: 2px;
                        left: 5px;
                    }
                }
                ${Discord} {
                    &::after {
                        content: "|";
                        color: #222327;
                        position: relative;
                        top: 2px;
                        left: 5px;
                    }
                }
                ${TagsContainer} {
                    ${ATag} {
                        background-color: #2f3136;
                        border-color: #2f3136;
                        color: rgba(255, 255, 255, 0.85);
                    }
                }
            }
            ${SoftwaresContainer} {
                ${Softwaree} {
                    background-color: #2f3136;
                    border-color: #2f3136;
                    color: rgba(255, 255, 255, 0.85);
                }
            }
            ${StatusContainer} {
                ${AStatus} {
                    div {
                        background-color: #36393f;
                        &.unknown {
                            border-color: #00a2ff;
                            color: #fff;
                            background-color: #00a2ff;
                        }
                        &[class*="Updated"] {
                            border-color: #00b167;
                            color: #fff;
                            background-color: #00b167;
                        }
                        &[class*="Deprecated"] {
                            border-color: #da002f;
                            color: #fff;
                            background-color: #da002f;
                        }
                    }
                }
            }
        }
        ${Options} {
            ${SupportBtn} {
                background-color: #da002f;
                color: #fff;
                &:hover {
                    background-color: #ad0026;
                    color: #fff;
                }
            }
        }
    }
}
`