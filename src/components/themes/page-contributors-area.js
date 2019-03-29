import React from 'react'
import { Link } from 'gatsby'
import 'src/styles/tooltips.css'
import * as variable from 'src/styles/variables'
import { rgba } from 'polished'
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'
import kebabCase from "lodash/kebabCase"
/* eslint-disable */
const themeContributors = ({author, maintainer, title, areaHeader, slug, contributor}) => (
    <Area>
        <GlobalStyle />
        <CardHeader>{areaHeader}</CardHeader>
        <AreaCard>
            <SubText>A list of people that have contributed to this theme in one way or another. If you think there is a mistake with this list please make a report <a target="_blank" rel="noopener noreferrer" href={"https://github.com/MrRobotjs/BetterDocs-React/issues/new?title=" + title + " - Theme - [Contributor Report]&labels=report" }>here</a>.</SubText>
            <TableInfo>
                    <RowBody>
                    <Row>
                        <Data>
                        Author
                        </Data>
                        <Data>
                        <Link to={"profile/" + author }>{author}</Link>
                        </Data>
                    </Row>
                    {maintainer &&
                    <Row>
                        <Data>Current Maintainer</Data>
                        <Data>{maintainer}</Data>
                    </Row>
                    }
                    {contributor == !null &&
                    <>
                    {contributor.map(contributor_name => (
                    <Row>
                        <Data>Contributor</Data>
                        <Data>{contributor_name.fieldValue}</Data>
                    </Row>
                    ))}
                    </>
                    }
                    <Row>
                        <Data>Contributor</Data>
                        <Data><a href={`https://github.com/MrRobotjs/BetterDocs-React/edit/master/src/themes/${kebabCase(slug)}.md`} target="_blank" rel="noopener noreferrer">Add</a></Data>
                    </Row>
                </RowBody>
            </TableInfo>
        </AreaCard>
    </Area>
)

export default themeContributors

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
const RowBody = styled.tbody`
`
const Data = styled.td`
`
const SoftwaresContainer = styled.div`
`
const Softwaree = styled(Link)`
`

const Area = styled.div`
    margin-bottom: 1.25rem;
    @media ${variable.MidPoint} {
        flex: 1;
    }
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
                            opacity: 1;
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
                            height: 0;
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
        a {
            color: #fff !important;
        }
        ${SubText} {
            color: #e4e4e4;
        }
        ${CardHeader} {
            color: #fff;
        }
        ${AreaCard} {
            background-color: rgba(0,0,0,0.2);
            border-color: rgba(0,0,0,0.25);
            box-shadow: 2px 2px 40px -12px #000;
            ${TableInfo} {
                ${Row} {
                    border-color: #000;
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
