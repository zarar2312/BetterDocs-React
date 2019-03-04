import React from 'react'
import { Link } from 'gatsby'
import kebabCase from "lodash/kebabCase"
import 'src/styles/tooltips.css'
import * as variable from 'src/styles/variables'
import { rgba, darken } from 'polished'
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'

const pluginsHero = ({status,date,SoftwaresGrouped,github,gitlab,npm,areaHeader}) => (
    <Area>
        <GlobalStyle />
        <CardHeader>{areaHeader}</CardHeader>
        <AreaCard>
            <TableInfo>
            <Row>
                {date &&
                <Data>
                    Page Last Updated
                </Data>
                }
                {date &&
                <Data>
                    {date}
                </Data>
                }
            </Row>
            <Row>
                <Data>
                Status
                </Data>
                {status === "Updated" &&
                <Data alt="Updated">
                {status}
                </Data>
                }
                {status === "Deprecated" &&
                <Data alt="Deprecated">
                Deprecated
                </Data>
                }
                {status === null &&
                <Data alt="Unknown">
                Unknown
                </Data>
                }
            </Row>
            {SoftwaresGrouped &&
            <Row>
                <Data>
                Supported Discord Mods
                </Data>
                <Data>
                <SoftwaresContainer>
                    {SoftwaresGrouped.map(software => (
                        <Softwaree to={`/plugins/softwares/${kebabCase(software.fieldValue)}/`} key={software.fieldValue}>
                            {software.fieldValue}
                        </Softwaree>
                    ))}
                </SoftwaresContainer>
                </Data>
            </Row>
            }
            {github &&
            <Row>
                <Data>
                Github
                </Data>
                <Data>
                <a href={github} target="_blank">Source</a>
                </Data>
            </Row>
            }
            {gitlab &&
            <Row>
                <Data>
                Gitlab
                </Data>
                <Data>
                <a href={gitlab} target="_blank">Source</a>
                </Data>
            </Row>
            }
            {npm &&
            <Row>
                <Data>
                NPM
                </Data>
                <Data>
                <a href={npm} target="_blank">Source</a>
                </Data>
            </Row>
            }
            </TableInfo>
        </AreaCard>
    </Area>
)

export default pluginsHero

const CardHeader = styled.h1`
`
const AreaCard = styled.div`
`
const SubText = styled.p`
`
const TableInfo = styled.table`
`
const Row = styled.tr`
`
const Data = styled.td`
`
const SoftwaresContainer = styled.div`
`
const Softwaree = styled(Link)`
`

const Area = styled.div`
    margin-bottom: 1.25rem;
    ${CardHeader} {
        font-size: 1.55rem;
        margin-bottom: 0.8rem;
        word-break: keep-all;
    }
    ${AreaCard} {
    flex-direction: column;
    word-break: break-word;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 2px 2px 40px -12px #999;
    padding: 0.8rem 1.1rem;
    border: 1px solid #ececec;
        ${SubText} {
        font-weight: bold;
        margin: unset;
        font-size: 0.58rem;
        line-height: 0.9rem;
        color: #969696;
        }
        ${TableInfo} {
        border-collapse: collapse;
        width: 100%;
        margin: unset;
        font-size: 0.7rem;
        ${Row} {
            border-bottom: 1px solid #cacaca;
            ${Data} {
            text-align: left;
            padding: 10px 8px;
            margin-bottom: 2px;
            &:nth-child(2) {
                text-align: right;
            }
            &:nth-child(1) {
                font-weight: bold;
            }
            &[alt="Updated"] {
                color: #00b167;
            }
            &[alt="Deprecated"] {
                color: #c33030;
            }
            &[alt="Unknown"] {
                color: #005180;
            }
                ${SoftwaresContainer} {
                    display: flex;
                    justify-content: flex-end;
                    flex-wrap: wrap;
                    ${Softwaree} {
                    margin-left: 7px;
                    background-color: #fff;
                    padding: 0.38rem 0.56rem;
                    border-radius: 25px;
                    color: #5f6368;
                    font-size: 0.54rem;
                    transition: 300ms ease-in-out all;
                    border: 1px solid #eff2f6;
                    position: relative;
                    line-height: initial;
                    margin-top: 0.1rem;
                        &:hover {
                        background-color: #dddddd;
                        border-bottom-left-radius: 0px;
                        box-shadow: 0 10px 90px rgba(0, 0, 0, 0.08);
                            &::after {
                                display: none !important;
                            }
                        }
                        &:active, &:focus {
                            background-color: ${rgba(variable.SiteColor, 0.1)};
                            box-shadow: rgba(60, 64, 67, 0.15) 0px 1px 3px 1px, rgba(60, 64, 67, 0.3) 0px 1px 2px 0px;
                            border-bottom-left-radius: 0px;
                            color: ${variable.SiteColor};
                            outline: unset;
                            border-color: transparent;
                        }
                        &::after {
                            display: none !important;
                        }
                    }
                }
            }
        }
    }
}
`

const GlobalStyle = createGlobalStyle`
[mode="dark"] {
    ${Area} {
        ${SubText} {
            color: #e4e4e4;
        }
        ${CardHeader} {
            color: #fff;
        }
        ${AreaCard} {
            background-color: rgba(0,0,0,0.2);
            box-shadow: 2px 2px 40px -12px #000;
            border-color: rgba(0,0,0,0.25);
            ${TableInfo} {
                ${Row} {
                    border-bottom: 1px solid #cacaca;
                    ${Data} {
                        &:nth-child(2) {
                            color: #e4e4e4;
                            a {
                                color: #fff;
                            }
                        }
                        &:nth-child(1) {
                            color: #fff;
                        }
                    }
                }
            }
        }
    }
}
`