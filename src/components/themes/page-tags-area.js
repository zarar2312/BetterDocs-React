import React from 'react'
import { Link } from 'gatsby'
import 'src/styles/tooltips.css'
import * as variable from 'src/styles/variables'
import { rgba } from 'polished'
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'

const pluginTags = ({areaHeader, tagsGrouped}) => (
    <Area>
        <GlobalStyle />
        <CardHeader>{areaHeader}</CardHeader>
        <TagsContainer>
            {tagsGrouped.map(tag => (
            <Tag to={`/themes/tag/${tag.fieldValue.toString().toLowerCase()}/`} key={tag.fieldValue}>
            {tag.fieldValue.toString().toLowerCase()} <span>{tag.totalCount}</span>
            </Tag>
            ))}
        </TagsContainer>
    </Area>
)

export default pluginTags

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
            padding: 0.22rem 0.5rem;
            border-radius: 25px;
            color: #5f6368;
            font-size: 0.95em;
            transition: 300ms ease-in-out all !important;
            border: 1px solid #eaeaea;
            line-height: initial;
            &:first-child {
                margin-left: unset;
            }
            span {
                display: none;
            }
            &:hover {
                border-bottom-left-radius: 0px;
                box-shadow: 2px 2px 40px -12px #999;
                color: #000 !important;
                background-color: #fff !important;
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
        ${TagsContainer} {
            ${Tag} {
                background-color: rgba(0,0,0,0.1);
                border-color: rgba(0,0,0,0.15);
                color: #fff !important;
                &:hover {
                    background-color: rgba(0,0,0,0.2) !important;
                }
            }
        }
    }
}
`