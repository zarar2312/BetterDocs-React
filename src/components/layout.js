import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import AdSense from 'react-adsense';
import styled from 'styled-components';
import Header from './header'
import Footer from './footer'
import Announcement from './announcement';
import * as variable from '../styles/variables'
//<link rel="manifest" href="/site.webmanifest"/>
//var time = new Date().getHours();
//<html lang="en" class={0 <= time&&time < 7 && "dark"} id={17 <= time&&time < 24 && "dark"} /> 
import { createGlobalStyle } from 'styled-components'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            announcement
          }
        }
      }
    `}
    render={(data) => (
        <div>
          <GlobalStyle />
          <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'A Discord enhancement project. Free quality Themes, Plugins and Hacks for Discord and easy installation instructions for BetterDiscord and more!' },
            { name: 'keywords', content: 'Discord, BetterDiscord, EnhancedDiscord, TwitchCord, Discord Hacks, Hacks, Mods, Discord Themes, Themes, Discord Plugins, Plugins, Discord Bots, Bots, Discord Servers, Discord Style, Styles' },
          ]}
          >
            <meta name="msvalidate.01" content="2907AD22A611E606FD26FA8AA6CA2DB4" />
            <meta name="google-site-verification" content="M7sj3VxxFwXYhavVMDLr4XxYPje4GEAFcx9Au42ImSM" />
            <meta name="description" content="A Discord enhancement project. Free quality Themes, Plugins and Hacks for Discord and easy installation instructions for BetterDiscord and more!" />
            <meta property="og:site_name" content="Discord Source"/>
            <meta property="og:image" content="https://i.imgur.com/B0vcfRw.png"/>
            <meta property="og:title" content={data.site.siteMetadata.title}/>
            <meta property="og:description" content="A Discord enhancement project. Free quality Themes, Plugins and Hacks for Discord and easy installation instructions for BetterDiscord and more!"/>
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://discordsource.com" />
            <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png?v=YAmjbajrx8" />
            <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png?v=YAmjbajrx8" />
            <link rel="icon" type="image/png" sizes="192x192" href="/icons/android-chrome-192x192.png?v=YAmjbajrx8" />
            <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png?v=YAmjbajrx8" />
            <link rel="shortcut icon" href="/icons/favicon.ico?v=YAmjbajrx8" />
            <link rel="mask-icon" href="/icons/safari-pinned-tab.svg?v=YAmjbajrx8" color="#5bbad5" />
            <meta name="msapplication-TileImage" content="/icons/mstile-144x144.png?v=YAmjbajrx8" />
            <meta name="msapplication-TileColor" content="#262626" />
            <meta name="theme-color" content="#262626"/>

          </Helmet>
          <Header siteTitle={data.site.siteMetadata.title} />
          <Announcement />
          <div
            style={{
              margin: '0 auto',
              paddingTop: 0,
            }}
          >
            {children}
          </div>
          {variable.Ads === true &&
          <Ad>
            <AdSense.Google
              client='ca-pub-1998206533560539'
              slot='6545618600'
              style={{ display: 'block' }}
              format='auto'
              responsive='true'
            />
          </Ad>
          }
          <Footer />
        </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const Ad = styled.div`
  order: 3;
  display: block;
`

const GlobalStyle = createGlobalStyle`
:root {
  --siteColor: #7289DA;
  --siteColorOpacity3: rgba(114, 137, 218, 0.3);
}

* {
  box-sizing: inherit;
}
*:before {
  box-sizing: inherit;
}
*:after {
  box-sizing: inherit;
}

html {
  font-family: Roboto, sans-serif !important;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  /*font-size: calc(16px + (26 - 16) * ((100vw - 300px) / (1600 - 300)));*/
  /*font-size: calc(16px + (53 - 16) * ((100vw - 300px) / (5000 - 300)));*/
  font-size: 24px;
  /*line-height: calc(1.3rem + (1.5 - 1.2) * ((100vw - 300px)/(1600 - 300)));*/
  backface-visibility: hidden;
  /*background-color: #222327;*/
  box-sizing: border-box;
  overflow-y: scroll;
  &[mode="dark"] {
    background-color: #222327;
    .decorated {
      display: inline-block;
      transition: color 250ms, text-shadow 250ms;
      color: #fff;
      text-decoration: none;
      cursor: pointer;
      position: relative;
      z-index: 0;
      line-height: 1rem;
    }
    [class*="LightSwitch"] {
      filter: grayscale();
    }
  }
  body {
    margin: 0;
    color: hsla(0, 0%, 0%, 0.8);
    font-weight: normal;
    word-wrap: break-word;
    font-kerning: normal;
    -moz-font-feature-settings: "kern", "liga", "clig", "calt";
    -ms-font-feature-settings: "kern", "liga", "clig", "calt";
    -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
    font-feature-settings: "kern", "liga", "clig", "calt";
    .siteLogo {
      width: 3.75rem;
    }
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    main,
    menu,
    nav,
    section,
    summary {
      display: block;
    }
    audio,
    canvas,
    progress,
    video {
      display: inline-block;
    }
    audio:not([controls]) {
      display: none;
      height: 0;
    }
    progress {
      vertical-align: baseline;
    }
    [hidden],
    template {
      display: none;
    }
    abbr[title] {
      border-bottom: none;
      text-decoration: underline;
      text-decoration: underline dotted;
    }
    b,
    strong {
      font-weight: inherit;
      font-weight: bolder;
    }
    dfn {
      font-style: italic;
    }
    h1 {
      font-size: 2em;
      margin: .67em 0;
    }
    mark {
      background-color: #ff0;
      color: #000;
    }
    small {
      font-size: 80%;
    }
    sub,
    sup {
      font-size: 75%;
      line-height: 0;
      position: relative;
      vertical-align: baseline;
    }
    sub {
      bottom: -.25em;
    }
    sup {
      top: -.5em;
    }
    img {
      border-style: none;
    }
    svg:not(:root) {
      overflow: hidden;
    }
    code,
    kbd,
    pre,
    samp {
      font-family: monospace, monospace;
      font-size: 1em;
    }
    figure {
      margin: 1em 40px;
    }
    hr {
      box-sizing: content-box;
      height: 0;
      overflow: visible;
    }
    button,
    input,
    optgroup,
    select,
    textarea {
      font: inherit;
      margin: 0;
    }
    optgroup {
      font-weight: 700;
    }
    button,
    input {
      overflow: visible;
    }
    button,
    select {
      text-transform: none;
    }
    [type=reset],
    [type=submit],
    [type=button],
    button {
      -webkit-appearance: button;
      &::-moz-focus-inner {
        border-style: none;
        padding: 0;
      }
      &:-moz-focusring {
        outline: 1px dotted ButtonText;
      }
    }
    fieldset {
      border: 1px solid silver;
      margin: 0 2px;
      padding: .35em .625em .75em;
    }
    legend {
      box-sizing: border-box;
      color: inherit;
      display: table;
      max-width: 100%;
      padding: 0;
      white-space: normal;
    }
    textarea {
      overflow: auto;
    }
    [type=checkbox],
    [type=radio] {
      box-sizing: border-box;
      padding: 0;
    }
    [type=number]::-webkit-inner-spin-button,
    [type=number]::-webkit-outer-spin-button {
      height: auto;
    }
    [type=search] {
      -webkit-appearance: textfield;
      outline-offset: -2px;
    }
    [type=search]::-webkit-search-cancel-button,
    [type=search]::-webkit-search-decoration {
      -webkit-appearance: none;
    }
    ::-webkit-input-placeholder {
      color: inherit;
      opacity: .54;
    }
    ::-webkit-file-upload-button {
      -webkit-appearance: button;
      font: inherit;
    }
    img {
      max-width: 100%;
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
    }
    h1 {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
      color: inherit;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      font-weight: bold;
      text-rendering: optimizeLegibility;
      font-size: 2.25rem;
      line-height: 1.1;
    }
    h2 {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
      color: inherit;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      font-weight: bold;
      text-rendering: optimizeLegibility;
      font-size: 1.62671rem;
      line-height: 1.1;
    }
    h3 {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
      color: inherit;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      font-weight: bold;
      text-rendering: optimizeLegibility;
      font-size: 1.38316rem;
      line-height: 1.1;
    }
    h4 {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
      color: inherit;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      font-weight: bold;
      text-rendering: optimizeLegibility;
      font-size: 1rem;
      line-height: 1.1;
    }
    h5 {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
      color: inherit;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      font-weight: bold;
      text-rendering: optimizeLegibility;
      font-size: 0.85028rem;
      line-height: 1.1;
    }
    h6 {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
      color: inherit;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      font-weight: bold;
      text-rendering: optimizeLegibility;
      font-size: 0.78405rem;
      line-height: 1.1;
    }
    hgroup {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
    }
    ul {
      margin-left: 1.45rem;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
      list-style-position: outside;
      list-style-image: none;
      li {
        padding-left: 0;
      }
    }
    ol {
      margin-left: 1.45rem;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
      list-style-position: outside;
      list-style-image: none;
      li {
        padding-left: 0;
      }
    }
    dl {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
    }
    dd {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
    }
    p {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
    }
    figure {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
    }
    pre {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
      font-size: 0.85rem;
      line-height: 1.42;
      background: hsla(0, 0%, 0%, 0.04);
      border-radius: 3px;
      overflow: auto;
      word-wrap: normal;
      padding: 1.45rem;
    }
    table {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
      font-size: 1rem;
      line-height: 1.45rem;
      border-collapse: collapse;
      width: 100%;
    }
    fieldset {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
    }
    blockquote {
      margin-left: 1.45rem;
      margin-right: 1.45rem;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
    }
    form {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
    }
    noscript {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
    }
    iframe {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
    }
    hr {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: calc(1.45rem - 1px);
      background: hsla(0, 0%, 0%, 0.2);
      border: none;
      height: 1px;
    }
    address {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
    }
    b {
      font-weight: bold;
    }
    strong {
      font-weight: bold;
    }
    dt {
      font-weight: bold;
    }
    th {
      font-weight: bold;
    }
    li {
      margin-bottom: calc(1.45rem / 2);
      > ol {
        margin-left: 1.45rem;
        margin-bottom: calc(1.45rem / 2);
        margin-top: calc(1.45rem / 2);
      }
      > ul {
        margin-left: 1.45rem;
        margin-bottom: calc(1.45rem / 2);
        margin-top: calc(1.45rem / 2);
      }
      *:last-child {
        margin-bottom: 0;
      }
      > p {
        margin-bottom: calc(1.45rem / 2);
      }
    }
    blockquote *:last-child {
      margin-bottom: 0;
    }
    p *:last-child {
      margin-bottom: 0;
    }
    code {
      font-size: 0.85rem;
      line-height: 1.45rem;
    }
    kbd {
      font-size: 0.85rem;
      line-height: 1.45rem;
    }
    samp {
      font-size: 0.85rem;
      line-height: 1.45rem;
    }
    abbr {
      border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
      cursor: help;
    }
    acronym {
      border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
      cursor: help;
    }
    abbr[title] {
      border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
      cursor: help;
      text-decoration: none;
    }
    thead {
      text-align: left;
    }
    td,
    th {
      text-align: left;
      border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
      font-feature-settings: "tnum";
      -moz-font-feature-settings: "tnum";
      -ms-font-feature-settings: "tnum";
      -webkit-font-feature-settings: "tnum";
      padding-left: 0.96667rem;
      padding-right: 0.96667rem;
      padding-top: 0.725rem;
      padding-bottom: calc(0.725rem - 1px);
    }
    th:first-child,
    td:first-child {
      padding-left: 0;
    }
    th:last-child,
    td:last-child {
      padding-right: 0;
    }
    tt,
    code {
      background-color: hsla(0, 0%, 0%, 0.04);
      border-radius: 3px;
      font-family: "SFMono-Regular", Consolas, "Roboto Mono", "Droid Sans Mono",
        "Liberation Mono", Menlo, Courier, monospace;
      padding: 0;
      padding-top: 0.2em;
      padding-bottom: 0.2em;
    }
    pre code {
      background: none;
      line-height: 1.42;
    }
    code:before,
    code:after,
    tt:before,
    tt:after {
      letter-spacing: -0.2em;
      content: " ";
    }
    pre code:before,
    pre code:after,
    pre tt:before,
    pre tt:after {
      content: "";
    }
    a {
      background-color: transparent;
      text-decoration: none;
      &:active,
      &:hover {
        outline-width: 0;
      }
      &.decorated {
        display: inline-block;
        transition: color 250ms, text-shadow 250ms;
        color: #000;
        text-decoration: none;
        cursor: pointer;
        position: relative;
        z-index: 0;
        line-height: 1rem;
        :hover {
          color: #fff;
          opacity: 1;
          background-color: transparent;
        }
        :hover::after {
          height: 110%;
          width: 110%;
        }
        ::after {
          position: absolute;
          z-index: -1;
          bottom: -1px;
          left: 50%;
          transform: translateX(-50%);
          content: '';
          width: 100%;
          height: 3px;
          background-color: var(--siteColor);
          transition: all 250ms;
        }
      }
    }
    ::-webkit-scrollbar-button { 
      display: none; 
      height: 13px; 
      border-radius: 0px; 
    } 
    ::-webkit-scrollbar-thumb { 
      background-color: rgba(114, 137, 218, 0.7);
      transition: background-color .2s ease-in-out;
    } 
    ::-webkit-scrollbar-thumb:hover { 
      background-color: #7289DA; 
    } 
    ::-webkit-scrollbar-track { 
      background-color:rgba(114, 137, 218, 0.15);
    }
    ::-webkit-scrollbar { 
      width: 8px; 
    }
  }


  ::selection {
    background: rgba(114, 137, 218, 0.99); /* WebKit/Blink Browsers */
    color: #fff !important;
  }
  img::selection {
    background: var(--siteColor); /* WebKit/Blink Browsers */
    color: #fff !important;
  }
  ::-moz-selection {
    background: var(--siteColor); /* Gecko Browsers */
    color: #fff !important;
  }
}
/*
@media only screen and (min-width: 1600px) {
  html {
    font-size: calc(26px + (53 - 26) * ((100vw - 1600px) / (2900 - 1600)));
  }
}
@media only screen and (min-width: 2900px) {
  html {
    font-size: calc(46px + (66 - 46) * ((100vw - 2900) / (4200 - 2900)));
  }
}
@media only screen and (max-width: 480px) {
  html {
    font-size: 100%;
  }
}*/
`