import React from "react"
//import style from '../styles/themes-tags.module.scss'
import styled from 'styled-components';
import * as variable from 'src/styles/variables'
//import { rgba, darken } from 'polished'
import { createGlobalStyle } from 'styled-components'
import 'src/styles/tooltips.css'
import thumbsUp from 'src/images/thumbs-up.svg'
import clapping from 'src/images/clapping-hands.svg'
import heart from 'src/images/heart.svg'
import rocket from 'src/images/rocket.svg'
import eyes from 'src/images/eyes.svg'
import laughing from 'src/images/laughing.svg'
import confused from 'src/images/confused.svg'
import ta from 'time-ago'

// Pass image as css instead of a dom element (img) style={{backgroundImage :  `url(${node.frontmatter.thumbnail})` }}

const Comments = ({ username, body, avatar, key, userUrl, reactions, commentLink, lastEditDate, createdAt }) => {

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
                    {reactions.map(react => (
                        <>
                        {react.users.totalCount > 0 &&
                            <Reaction href={commentLink} target="blank" key={react.content} className={react.content} title={react.users.totelCount > 1 ? react.users.totelCount + " Users's have reacted with " + react.content : "1 User has reacted with " + react.content}>
                                <ReactImage></ReactImage>
                                {react.users.totalCount}
                            </Reaction>
                        }
                        </>
                    ))}
                    </Reactions>
                </BodyContainer>
                <Options>
                    <View title="See comment at Github" href={commentLink} target="blank">Jump to Comment</View>
                    <Seperator>∙</Seperator>
                    <TimeAgo>{ta.ago(createdAt)}</TimeAgo>
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
const Reaction = styled.a`
`
const BodyContainer = styled.div`
`
const Options = styled.div`
`
const Seperator = styled.p`
`
const View = styled.a`
`
const TimeAgo = styled.p`
`
const ReactImage = styled.div`
`
const Card = styled.div`
display: flex;
margin-bottom: 0.5rem;
    a:not([class*="Reaction-"]):not([class*="View"]):not(.icon):not(.anchor):not([class*="Btn"]):not(.imgContainer):not([class*="FeaturedIcon"]):not([class*="ImageContainer"]):not([class*="ThumbnailLink"]) {
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
            flex-direction: column;
            ${Author} {
                margin-right: 0.17rem;
            }
            ${Body} {
                color: #636363;
                font-size: 0.85rem;
            }
            ${Reactions} {
                display: flex;
                flex-wrap: wrap;
                ${Reaction} {
                    background-color: #f7f7f7;
                    margin-top: 0.19rem;
                    box-shadow: 0 1px 3px 0 rgba(0,0,0,.2);
                    border-radius: 3px;
                    width: 1.4rem;
                    height: 0.9rem;
                    font-size: 0.5rem;
                    margin-right: 0.25rem;
                    line-height: 1rem;
                    text-align: center;
                    color: #8d949e;
                    display: -webkit-box;
                    text-indent: 10px;
                    transition: 250ms ease-in-out all;
                    &:last-child {
                        margin-right: unset;
                    }
                    &:hover {
                        box-shadow: 0 3px 4px 0 rgba(0,0,0,.2);
                        background-color: #fff;
                    }
                    &:active, &:focus {
                        box-shadow: 0 1px 3px 1px rgba(60,64,67,0.15), 0 1px 2px 0 rgba(60,64,67,0.3);
                        background-color: ${variable.SiteColor};
                        color: #fff;
                        outline: unset;
                    }
                    ${ReactImage} {

                    }
                    &[class*="THUMBS_UP"] {
                        ${ReactImage} {
                            width: 0.7rem;
                            position: relative;
                            left: 2px;
                            &::after {
                                content: "";
                                background: linear-gradient(360deg,rgb(4, 185, 127) 35%,rgb(18, 255, 134) 100%);
                                display: block;
                                height: 0.7rem;
                                width: 0.7rem;
                                border-radius: 50%;
                                position: absolute;
                                top: 3px;
                            }
                            &::before {
                                content: "";
                                background-image: url(${thumbsUp});
                                background-position: center;
                                background-size: 0.4rem;
                                background-repeat: no-repeat;
                                display: block;
                                width: 0.7rem;
                                height: 0.7rem;
                                border-radius: 50%;
                                z-index: 1;
                                top: 3px;
                                position: relative;
                            }
                        }
                    }
                    &[class*="THUMBS_DOWN"] {
                        ${ReactImage} {
                            width: 0.7rem;
                            position: relative;
                            left: 2px;
                            &::after {
                                content: "";
                                background: linear-gradient(360deg,rgb(156, 156, 156) 35%,rgb(239, 239, 239) 100%);
                                display: block;
                                height: 0.7rem;
                                width: 0.7rem;
                                border-radius: 50%;
                                position: absolute;
                                top: 3px;
                            }
                            &::before {
                                content: "";
                                background-image: url(${thumbsUp});
                                background-position: center;
                                background-size: 0.4rem;
                                background-repeat: no-repeat;
                                display: block;
                                width: 0.7rem;
                                height: 0.7rem;
                                border-radius: 50%;
                                z-index: 1;
                                top: 4px;
                                position: relative;
                                transform: rotate(180deg);
                            }
                        }
                    }
                    &[class*="LAUGH"] {
                        ${ReactImage} {
                            width: 0.7rem;
                            position: relative;
                            left: 2px;
                            &::after {
                                content: "";
                                background: linear-gradient(360deg,rgba(20,87,236,1) 35%,rgba(51,165,252,1) 100%);
                                display: block;
                                height: 0.7rem;
                                width: 0.7rem;
                                border-radius: 50%;
                                position: absolute;
                                top: 3px;
                            }
                            &::before {
                                content: "";
                                background-image: url(${laughing});
                                background-position: center;
                                background-size: 0.4rem;
                                background-repeat: no-repeat;
                                display: block;
                                width: 0.7rem;
                                height: 0.7rem;
                                border-radius: 50%;
                                z-index: 1;
                                top: 3px;
                                position: relative;
                            }
                        }
                    }
                    &[class*="HOORAY"] {
                        ${ReactImage} {
                            width: 0.7rem;
                            position: relative;
                            left: 2px;
                            &::after {
                                content: "";
                                background: linear-gradient(360deg,rgba(20,87,236,1) 35%,rgba(51,165,252,1) 100%);
                                display: block;
                                height: 0.7rem;
                                width: 0.7rem;
                                border-radius: 50%;
                                position: absolute;
                                top: 3px;
                            }
                            &::before {
                                content: "";
                                background-image: url(${clapping});
                                background-position: center;
                                background-size: 0.47rem;
                                background-repeat: no-repeat;
                                display: block;
                                width: 0.7rem;
                                height: 0.7rem;
                                border-radius: 50%;
                                z-index: 1;
                                top: 3.7px;
                                position: relative;
                            }
                        }
                    }
                    &[class*="CONFUSED"] {
                        ${ReactImage} {
                            width: 0.7rem;
                            position: relative;
                            left: 2px;
                            &::after {
                                content: "";
                                background: linear-gradient(360deg,rgba(20,87,236,1) 35%,rgba(51,165,252,1) 100%);
                                display: block;
                                height: 0.7rem;
                                width: 0.7rem;
                                border-radius: 50%;
                                position: absolute;
                                top: 3px;
                            }
                            &::before {
                                content: "";
                                background-image: url(${confused});
                                background-position: center;
                                background-size: 0.4rem;
                                background-repeat: no-repeat;
                                display: block;
                                width: 0.7rem;
                                height: 0.7rem;
                                border-radius: 50%;
                                z-index: 1;
                                top: 3px;
                                position: relative;
                            }
                        }
                    }
                    &[class*="HEART"] {
                        ${ReactImage} {
                            width: 0.7rem;
                            position: relative;
                            left: 2px;
                            &::after {
                                content: "";
                                background: linear-gradient(360deg,#e11731 35%,#fb627e 100%);
                                display: block;
                                height: 0.7rem;
                                width: 0.7rem;
                                border-radius: 50%;
                                position: absolute;
                                top: 3px;
                            }
                            &::before {
                                content: "";
                                background-image: url(${heart});
                                background-position: center;
                                background-size: 0.37rem;
                                background-repeat: no-repeat;
                                display: block;
                                width: 0.7rem;
                                height: 0.7rem;
                                border-radius: 50%;
                                z-index: 1;
                                top: 3.7px;
                                position: relative;
                            }
                        }
                    }
                    &[class*="ROCKET"] {
                        ${ReactImage} {
                            width: 0.7rem;
                            position: relative;
                            left: 2px;
                            &::after {
                                content: "";
                                background: linear-gradient(360deg,rgba(20,87,236,1) 35%,rgba(51,165,252,1) 100%);
                                display: block;
                                height: 0.7rem;
                                width: 0.7rem;
                                border-radius: 50%;
                                position: absolute;
                                top: 3px;
                            }
                            &::before {
                                content: "";
                                background-image: url(${rocket});
                                background-position: center;
                                background-size: 0.4rem;
                                background-repeat: no-repeat;
                                transform: rotate(100deg);
                                display: block;
                                width: 0.7rem;
                                height: 0.7rem;
                                border-radius: 50%;
                                z-index: 1;
                                top: 3px;
                                position: relative;
                            }
                        }
                    }
                    &[class*="EYES"] {
                        ${ReactImage} {
                            width: 0.7rem;
                            position: relative;
                            left: 2px;
                            &::after {
                                content: "";
                                background: linear-gradient(360deg,rgba(20,87,236,1) 35%,rgba(51,165,252,1) 100%);
                                display: block;
                                height: 0.7rem;
                                width: 0.7rem;
                                border-radius: 50%;
                                position: absolute;
                                top: 3px;
                            }
                            &::before {
                                content: "";
                                background-image: url(${eyes});
                                background-position: center;
                                background-size: 0.47rem;
                                background-repeat: no-repeat;
                                display: block;
                                width: 0.7rem;
                                height: 0.7rem;
                                border-radius: 50%;
                                z-index: 1;
                                top: 3.5px;
                                position: relative;
                            }
                        }
                    }
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
            flex-wrap: wrap;
            ${View} {
                font-size: 0.55rem;
                color: #868686;
                margin-right: 0.2rem;
                word-break: keep-all;
                transition: 210ms all linear;
                margin-bottom: unset;
                &:hover {
                    color: #000;
                }
            }
            ${Seperator} {
                margin-right: 0.2rem;
                color: #868686;
                font-weight: bold;
                margin-bottom: unset;
            }
            ${TimeAgo} {
                font-size: 0.55rem;
                color: #868686;
                word-break: keep-all;
                margin-bottom: unset;
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
