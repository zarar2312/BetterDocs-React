import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';
import * as variable from 'src/styles/variables'
import { rgba } from "polished"
import { createGlobalStyle } from 'styled-components'

const TagsPage = ({tagsArray}) => {
  return (
    <Container>
    <GlobalStyle />
        <Tags><span>Tags:</span>
            <Tagg to="/themes/snippets/">
                snippets
            </Tagg>
            {tagsArray.map(tag => (
                <Tagg to={`/themes/tag/${tag.fieldValue.toString().toLowerCase()}/`} key={tag.fieldValue}>
                    {tag.fieldValue.toString().toLowerCase()}
                </Tagg>
            ))}
        </Tags>
    </Container>
  )
}

export default TagsPage

const Tags = styled.div`
`
const Tagg = styled(Link)`
`
const Container = styled.div`
    width: calc(100% - 75px);
    margin: 20px auto;
    ${Tags} {
        display: flex;
        flex-wrap: wrap;
        color: #8c8c8c;
        font-size: 0.5rem;
        margin-right: 5px;
        span {
            position: relative;
            top: 6px;
        }
        ${Tagg} {
            font-size: 0.5rem;
            background-color: #fff;
            color: #8c8c8c;
            border: 1px solid #eee;
            border-radius: 25px;
            padding: 6px 11px;
            display: flex;
            margin-left: 4px;
            margin-bottom: 7px;
            transition: 350ms ease-in-out;
            &:hover {
                border-bottom-left-radius: 0px;
                -webkit-box-shadow: 0 10px 90px rgba(0, 0, 0, 0.08);
                box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08), 0 2px 6px 2px rgba(0, 0, 0, 0.03);
            }
            &:active, &:focus {
                box-shadow: 0 1px 2px 0 ${rgba(variable.SiteColor, 0.45)}, 0 2px 6px 2px ${rgba(variable.SiteColor, 0.3)};
                color: ${variable.SiteColor};
            }
        }
    }
`

const GlobalStyle = createGlobalStyle`
[mode="dark"] {
    ${Container} {
        ${Tags} {
            color: #fff;
            ${Tagg} {
                background-color: #222327;
                border-color: #222327;
                color: #ccc;
            }
        }
    }
}
`