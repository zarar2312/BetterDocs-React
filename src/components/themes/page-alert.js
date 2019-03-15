import React from 'react'
import 'src/styles/tooltips.css'
//import * as variable from 'src/styles/variables'
//import { rgba, darken } from 'polished'
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'

const themeAlerts = ({status, title, issue}) => (
    <>
    <GlobalStyle/>
        {status ?
            <StatusContainer alt ={status}>
                {status === "Updated" &&
                <>
                    <Status>This theme is compatible with the latest version of Discord</Status>
                    <StatusDescription>This theme is currently marked as <b>Updated</b> by the community which means this <i>should</i> work. If this theme is broken for the latest version of Discord please make a report <a target="_blank" rel="noopener noreferrer" href={ issue + "/new?title=" + title + " - BetterDocs - [Issue Report]&labels=report" }>here</a>.</StatusDescription>
                </>
                }
                {status === "Deprecated" &&
                <>
                    <Status>This theme is not compatible with the latest version of Discord</Status>
                    <StatusDescription>This theme is currently marked as <b>Deprecated</b> by the community which means this will break your Discord. If this theme is working again please let us know <a target="_blank" rel="noopener noreferrer" href={"https://github.com/MrRobotjs/BetterDocs-React/issues/new?title=" + title + " - [Status Report]&labels=report&body=This%20is%20ONLY%20to%20report%20that%20this%20plugin%20has%20been%20updated%20and%20working!" }>here</a> for the rest of the community!</StatusDescription>
                </>
                }
            </StatusContainer>
            :
            <StatusContainer alt="Unknown">
                <Status>This theme <i>should</i> (may not) be compatible with the latest version of Discord</Status>
                <StatusDescription>This theme is currently marked as <b>Unknown</b> which means that this theme may or may not work. If you would like to report an update for the rest of the community, you can do so <a target="_blank" rel="noopener noreferrer" href={"https://github.com/MrRobotjs/BetterDocs-React/issues/new?title=" + title + " - [Status Report]&labels=report&body=This%20is%20ONLY%20to%20report%20that%20this%20plugin%20is%20OR%20is%20not%20working!" }>here</a>.</StatusDescription>
            </StatusContainer>
        }
    </>
)

export default themeAlerts

const Status = styled.p`
`
const StatusDescription = styled.div`
`
const StatusContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 25px;
    margin-bottom: 1.25rem;
    box-shadow: 2px 2px 40px -12px #999;
    background-color: #fff;
    ${Status} {
        margin: unset;
        font-size: 0.9rem;
        font-weight: bold;
        border-top-left-radius: 25px;
        border-top-right-radius: 25px;
        padding: 0.6rem 0.9rem;
        word-break: keep-all;
    }
    ${StatusDescription} {
        font-size: 0.7rem;
        padding: 0.7rem 0.9rem;
        border-bottom-left-radius: 25px;
        border-bottom-right-radius: 25px;
        background-color: #fff;
        margin-top: -1px;
        word-break: keep-all;
        line-height: 0.98rem;
    }
    &[alt="Updated"] {
        /*display: none;*/
        ${Status} {
            color: #fff;
            background-color: #00b167;
            background: linear-gradient(90deg,#30c381,#089e46);
        }
        ${StatusDescription} {
            background: rgba(0, 177, 103, 0.08);
            b {
            color: #089e46;
            }
        }
    }
    &[alt="Deprecated"] {
        ${Status} {
            color: #fff;
            background-color: #c33030;
            background: linear-gradient(90deg,#c33030,#9e0808);
        }
        ${StatusDescription} {
            background: rgba(195, 48, 48, 0.08);
            b {
            color: #c33030;
            }
        }
    }
    &[alt="Unknown"] {
        ${Status} {
            color: #fff;
            background-color: #005180;
            background: linear-gradient(90deg,#30a1c3,#005180);
        }
        ${StatusDescription} {
            background: rgba(48, 161, 195, 0.08);
            b {
            color: #005180;
            }
        }
    }
`

const GlobalStyle = createGlobalStyle`
[mode="dark"] {
    ${StatusContainer} {
        box-shadow: 2px 2px 40px -12px #000;
        background-color: #36393f;
        ${StatusDescription} {
            color: #d6d6d6;
            a {
                color: #fff !important;
            }
        }
        &[alt="Updated"] {
            /*display: none;*/
            ${StatusDescription} {
                b {
                    color: #30c381;
                }
            }
        }
        &[alt="Deprecated"] {
            ${StatusDescription} {
                b {
                    color: #c33030;
                }
            }
        }
        &[alt="Unknown"] {
            ${StatusDescription} {
                b {
                    color: #30a1c3;
                }
            }
        }
    }
}
`