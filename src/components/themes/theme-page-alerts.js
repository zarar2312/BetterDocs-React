import React from 'react'
import kebabCase from "lodash/kebabCase"
import 'src/styles/tooltips.css'
import * as variable from 'src/styles/variables'
import { rgba } from 'polished'
import styled from 'styled-components';

const ThemePageAlerts = ({title, slug, status}) => (
    <>
    {status === "Deprecated" &&
        <Alert target="blank" href={`https://github.com/MrRobotjs/BetterDocs-React/edit/master/src/plugins/${kebabCase(slug)}.md`} alt="Warning">
          <p><b>Warning:</b> This plugin is currently Deprecated. Only use for development purposes. If this is a mistake please make a PR by clicking me.</p>
        </Alert>
    }
    {status === null &&
        <Alert target="blank" href={`https://github.com/MrRobotjs/BetterDocs-React/edit/master/src/plugins/${kebabCase(slug)}.md`} alt="Info">
          <p><b>Info:</b> The plugin "{title}" status is currently <b>Unknown</b>. Please be careful, this may or may not break your discord client. If this is a mistake please make a PR by clicking me.</p>
        </Alert>
    }
    </>
)

export default ThemePageAlerts

const Alert = styled.a`
    font-size: 0.6em;
    display: flex;
    animation: opacity 1s forwards;
    animation-fill-mode: forwards;
    animation-delay: 7s; 
    z-index: 100;
    -webkit-font-smoothing:antialiased;
    -webkit-backface-visibility:hidden;
    display: none;
    &[alt="Warning"] {
        height: unset;
        width: unset;
        position: fixed;
        bottom: 60px;
        right: unset;
        display: block;
        @media (min-width: 850px) {
            width: calc(100% - 36rem);
            position: fixed;
            bottom: 25px;
            right: 0px;
        }
        p {
            border-left: 2px #a70a0a solid;
            b {
                color: #a70a0a;
            }
            &::before {
                content: "";
                background: rgba(168, 9, 9, 0.04);
            }
        }
    }
    &[alt="Info"] {
        height: unset;
        width: unset;
        position: fixed;
        bottom: 60px;
        right: unset;
        display: block;
        @media (min-width: 850px) {
            width: calc(100% - 36rem);
            position: fixed;
            bottom: 25px;
            right: 0px;
        }
        p {
            border-left: 2px #a70a0a solid;
            b {
                color: #a70a0a;
            }
            &::before {
                content: "";
                background: rgba(168, 9, 9, 0.04);
            }
        }
    }
    &:hover {
        animation: unset;
        p {
            animation: unset;
            &::before {
                content: "";
                animation: unset;
            }
        }
    }
    p {
        margin: 0 auto;
        background-color: #fff;
        padding: 9px 19px 9px 11px;
        width: calc(100% - 25px);
        font-size: 0.9em;
        color: #313131;
        border: 1px solid #eaeaea;
        line-height: 1.5em;
        position: relative;
        box-shadow: 0 10px 90px rgba(0, 0, 0, 0.1);
        animation: shadow 1.5s forwards;
        animation-delay: 6.5s;
        @media (min-width: 450px) {
            max-width: calc(100% - 75px);
        }
        @media (min-width: 850px) {
            max-width: calc(100% - 105px);
            font-size: 1em;
        }
        a {
            border-bottom: 1px solid ${rgba(variable.SiteColor, 0.3)};
            box-shadow: inset 0 -2px 0px 0px ${rgba(variable.SiteColor, 0.4)};
            color: rgba(0, 0, 0, 0.88);
            font-weight: bold;
            transition: .1s linear background-color, .1s linear box-shadow, .1s linear border-bottom;
        }
        a:hover {
            background-color: ${rgba(variable.SiteColor, 0.3)};
            border-bottom: 1px solid transparent;
            box-shadow: inset 0 -2px 0px 0px transparent;
        }
        b {
            color: #000;
        }
        &::before {
            content: "";
            background: rgba(0,0,0, 0.04);
            display: -webkit-box;
            position: absolute;
            top: 0px;
            z-index: 0;
            width: 100%;
            height: 100%;
            left: 0px;
            animation: wcollapse 7s forwards linear; 
        }
    }
    @keyframes opacity {
        0% {
            opacity: 1;
        }
        99% {
            opacity: 0;
        }
        100% {
            opacity: 0;
            pointer-events: none;
        }
    }
    @keyframes shadow {
        from {
            box-shadow: 0 10px 90px rgba(0, 0, 0, 0.08);
        }
        to {
            box-shadow: 0px 0px transparent;
        }
    }
    @keyframes wcollapse {
        from {
            width: 100%;
        }
        to {
            width: 0;
        }
    }
`