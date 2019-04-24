import React from "react"
//import style from '../styles/themes-tags.module.scss'
import styled from 'styled-components';
import * as variable from 'src/styles/variables'
//import { rgba, darken } from 'polished'
import { createGlobalStyle } from 'styled-components'
import 'src/styles/tooltips.css'

// Pass image as css instead of a dom element (img) style={{backgroundImage :  `url(${node.frontmatter.thumbnail})` }}

const Comments = ({ username, body, avatar, key, userUrl, reactions, commentLink, lastEditDate }) => {

  return (
    <>
    <GlobalStyle />
        <Card key={key}>
            <Container1>
                <ImageContainer>
                    <Img src={avatar} title={username + "'s avatar"}/>
                </ImageContainer>
            </Container1>
            <Container2>
                <BodyContainer>
                    <Body>
                        <Author href={userUrl} target="blank" title="See profile at Github">{username}</Author> {body} <Edited data-balloon={lastEditDate} data-balloon-pos="left">{lastEditDate && "(edited)" }</Edited>
                    </Body>
                    <Reactions>
                        <Reaction>
                            
                        </Reaction>
                    </Reactions>
                </BodyContainer>
                <Options>
                    <View title="See comment at Github" href={commentLink} target="blank">Jump to Comment</View>
                </Options>
            </Container2>
        </Card>
    </>
  )
}

export default Comments

const Container2 = styled.div`
`
const Container1 = styled.div`
`
const Edited = styled.span`
`
const Body = styled.div`
`
const ImageContainer = styled.div`
`
const Img = styled.img`
`
const Author = styled.a`
`
const Reactions = styled.div`
`
const Reaction = styled.div`
`
const BodyContainer = styled.div`
`
const Options = styled.div`
`
const View = styled.a`
`

const Card = styled.div`
display: flex;
margin-bottom: 0.5rem;
    a:not([class*="View"]):not(.icon):not(.anchor):not([class*="Btn"]):not(.imgContainer):not([class*="FeaturedIcon"]):not([class*="ImageContainer"]):not([class*="ThumbnailLink"]) {
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
            color: #fff !important;
            opacity: 1;
            background-color: transparent;
            &::after {
                height: 110% !important;
                width: 110% !important;
            }
        }
    }
    ${Container1} {
        display: flex;
        flex-direction: column;
        align-self: flex-start;
        margin-right: 0.5rem;
        ${ImageContainer} {
            margin: 0 auto;
            height: 1.3rem;
            width: 1.7rem;
            ${Img} {
                margin-bottom: unset;
                border-radius: 50%;
            }
        }
    }
    ${Container2} {
        flex-direction: column;
        display: flex;
        ${BodyContainer} {
            background-color: rgba(0, 0, 0, 0.06);
            padding: 0.3rem 0.5rem;
            border-radius: 12px;
            display: flex;
            position: relative;
            ${Author} {
                margin-right: 0.17rem;
            }
            ${Body} {
                color: #636363;
                font-size: 0.85rem;
            }
            ${Reactions} {
                display: flex;
                position: absolute;
                bottom: -25px;
                right: 0;
                ${Reaction} {
                    background-color: #eee;
                    border-radius: 50%;
                    padding: 0.5rem;
                }
            }
        }
        ${Edited} {
            font-size: 0.44rem;
            color: #9e9e9e;
        }
        ${Options} {
            display: flex;
            margin-top: 0.2rem;
            ${View} {
                font-size: 0.6rem;
                color: #868686;
                transition: 210ms all linear;
                &:hover {
                    color: #000;
                }
            }
        }
    }
`

const GlobalStyle = createGlobalStyle`
[mode="dark"] {
    ${Card} {
        ${Container2} {
            ${BodyContainer} {
                background-color: rgba(255, 255, 255, 0.05);
                ${Body} {
                    color: #bfbfbf;
                    a { 
                        color: #fff !important;
                    }
                }
            }
            ${Options} {
                a {
                    &:hover {
                        color: #fff !important;
                    }
                }
            }
        }
    }
}
`