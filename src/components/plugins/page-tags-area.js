import React from 'react'
import { Link } from 'gatsby'
import 'src/styles/tooltips.css'
import * as variable from 'src/styles/variables'
import { rgba, darken } from 'polished'
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'
import kebabCase from "lodash/kebabCase"

const pluginsHero = ({areaHeader, tagsGrouped}) => (
    <Area>
        <GlobalStyle />
        <CardHeader>{areaHeader}</CardHeader>
        <TagsContainer>
            {tagsGrouped.map(tag => (
            <Tag to={`/plugins/tag/${kebabCase(tag.fieldValue)}/`} key={tag.fieldValue}>
            {tag.fieldValue} <span>{tag.totalCount}</span>
            </Tag>
            ))}
        </TagsContainer>
    </Area>
)

export default pluginsHero

const CardHeader = styled.h1`
`
const TagsContainer = styled.div`
`
const Tag = styled(Link)`
`
const Area = styled.div`
margin-bottom: 1.25rem;
${CardHeader} {
    font-size: 1.55rem;
    margin-bottom: 0.8rem;
    word-break: keep-all;
}
${TagsContainer} {
    display: -webkit-box;
        ${Tag} {
            margin-left: 7px;
            background-color: #fff;
            padding: 0.3rem 0.6rem;
            border-radius: 25px;
            color: #5f6368;
            font-size: 0.95em;
            transition: 300ms ease-in-out all;
            border: 1px solid #eff2f6;
            line-height: initial;
            &:first-child {
                margin-left: unset;
            }
            span {
                background-color: #eeeeee;
                color: #5f6368;
                border-radius: 50%;
                width: 16px;
                height: 16px;
                line-height: 16px;
                text-align: center;
                font-size: 0.8em;
                margin-left: 6px;
                display: none;
            }
            &:hover {
                border-bottom-left-radius: 0px;
                -webkit-box-shadow: 0 10px 90px rgba(0, 0, 0, 0.08);
                box-shadow: 0 10px 90px rgba(0, 0, 0, 0.08);
                &::after {
                    display: none !important;
                }
            }
            &:active, &:focus {
                background-color: ${rgba(variable.SiteColor, 0.1)};
                box-shadow: 0 1px 3px 1px rgba(60,64,67,0.15), 0 1px 2px 0 rgba(60,64,67,0.3);
                outline: unset;
                border-color: transparent;
                border-bottom-left-radius: 0px;
                color: ${variable.SiteColor};
            }
            &::after {
                display: none !important;
            }
        }
    }
`

const GlobalStyle = createGlobalStyle`
[mode="dark"] {
    ${Area} {
        ${CardHeader} {
            color: #fff;
        }
    }
}
`