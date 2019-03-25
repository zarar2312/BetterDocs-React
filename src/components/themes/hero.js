import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';
import * as variable from 'src/styles/variables'
import { rgba, darken } from 'polished'

const ThemePageHero = ({title, thumbnail}) => (
    <Container
    alt={title}
    style={{backgroundImage: `url(${thumbnail})`}}>
    <Background/>
    <DetailsContainer>
        <TitleContainer>
            {title && 
                <Title>{title}</Title>
            }
        </TitleContainer>
        {thumbnail &&
            <ImageDetails>
                <span>Image</span> <a href={thumbnail} target="blank">Source</a>
            </ImageDetails>
        }
    </DetailsContainer>
    </Container>
)

export default ThemePageHero
const Background = styled.div`
`
const Breadcrumbs = styled.div`
`
const Breadcrumb = styled(Link)`
`
const BreadcrumbSeperator = styled.span`
`
const RightDetails = styled.div`
`
const DetailsContainer = styled.div`
`
const TitleContainer = styled.div`
`
const Title = styled.h2`
`
const StatusContainer = styled.div`
`
const Status = styled.div`
`
const SubDetails = styled.div`
`
const SubContainer = styled.div`
`
const Text = styled.div`
`
const TagsContainer= styled.div`
`
const Wrapper = styled.div`
`
const Taggg = styled(Link)`
`
const DownloadBtn = styled.a`
`
const SupportBtn= styled.a`
`
const DemoBtn = styled.a`
`
const ImageDetails = styled.div`
`
const Container = styled.div`
    order: 1;
    background-color: ${variable.SiteColor};
    display: flex;
    color: #ffffff;
    text-align: center;
    position: relative;
    flex-direction: column;
    z-index: 99;
    padding: 2rem 0rem 5rem 0rem;
    height: calc(100vh - 50vh);
    background-size: cover;
    background-position: center;
    transition: 300ms linear height 500ms;
    @media ${variable.MidPoint} {
        padding: 4rem 0rem 5rem 0rem;
        background-position: unset;
    }
    &:hover {
        height: calc(100vh - 35vh);
    }
    &::before {
        content: "";
        background-size: 38%;
        position: fixed;
        width: 100%;
        height: 100%;
        border-radius: unset;
        transform: unset;
        box-shadow: unset;
        top: unset;
        bottom: unset;
        left: 0;
        top: 0;
        pointer-events: none;
    }
    ${Background} {
        position: absolute;
        top: 0;
        width: 100%;
        overflow: hidden;
        height: 100%;
        box-shadow: inset 0px -35px 100px 25px rgba(10,10,10,0.85);
    }
    ${Breadcrumbs} {
        display: flex;
        z-index: 5;
        flex: 0;
        padding: 0 1rem 0 2rem;
        ${Breadcrumb} {
            color: #656e86;
            font-size: 0.7rem;
            align-self: center;
            &:hover {
                color: ${variable.SiteColor};
            }
        }
        ${BreadcrumbSeperator} {
            color: #312d3c;
            font-weight: 700;
            margin: 0 5px;
            align-self: center;
        }
    }
    &[alt="Upload a Theme"] {
        .softwareContainer, .detailsContainer {
            display: none !important;
        }
    }
    ${DetailsContainer} {
        display: flex;
        flex-direction: column;
        z-index: 1;
        flex: 1;
        position: absolute;
        bottom: 0.4rem;
        left: 0.5rem;
        ${ImageDetails} {
            display: -webkit-box;
            margin-top: -0.2rem;
            span {
                color: #fff;
                opacity: 0.6;
                font-size: 0.5rem;
            }
            a {
                color: ${variable.SiteColor};
                opacity: 0.6;
                font-size: 0.5rem;
                &:hover {
                    opacity: 1;
                }
            }
        }
        ${TitleContainer} {
            ${Title} {
                font-size: 1.4rem;
                color: #fff;
                font-weight: bold;
                margin: unset;
                text-align: left;
            }
            ${StatusContainer} {
                margin-top: 5px;
                margin-bottom: 1rem;
                @media ${variable.MidPoint} {
                    margin-bottom: 3rem;
                }
                &[alt="Deprecated"] {
                    display: initial;
                }
                &[alt="Undefined"] {
                    display: none;
                }
                &[alt="null"] {
                    display: none;
                }
                &[alt="Updated"] {
                    display: initial;
                }
                ${Status} {
                    color: #4e4e4e;
                    display: -webkit-box;
                    div {
                        background-color: #36393f;
                        border-radius: 25px;
                        color: #fff;
                        padding: 0.2rem 0.45rem;
                        /* position: relative; */
                        /* top: 0px; */
                        font-size: 0.45em;
                        display: -webkit-inline-box;
                        font-weight: bold;
                        border: 1px solid #36393f;
                        &.unknown {
                            border-color: #00a2ff;
                            color: #fff;
                            background-color: #00a2ff;
                        }
                        &[class*="Updated"] {
                            border-color: #00b167;
                            color: #fff;
                            background-color: #00b167;
                        }
                        &[class*="Deprecated"] {
                            border-color: #eb0505;
                            color: #fff;
                            background-color: #eb0505;
                        }
                    }
                }
            }
            ${SubDetails} {
                display: flex;
                margin-bottom: 1rem;
                @media ${variable.MidPoint} {
                    margin-bottom: 3rem;
                }
                ${SubContainer} {
                    display: flex;
                    flex-wrap: wrap;
                    flex: 1;
                    margin-left: -35px;
                    @media ${variable.MidPoint} {
                        margin-left: unset;
                        ${Text}:first-child {
                            margin-left: unset;
                        }
                    }
                    ${Text} {
                        color: #999;
                        font-size: 0.6em;
                        margin: unset;
                        align-self: center;
                        margin-left: 40px;
                        display: flex;
                        flex-direction: column;
                        margin-bottom: 10px;
                        span {
                            margin-bottom: 2px;
                        }
                        p {
                            margin: unset;
                            color: #fff;
                            font-weight: bold;
                        }
                        a {
                            display: inline-block;
                            transition: color 250ms, text-shadow 250ms;
                            color: #fff;
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
                                color: #fff;
                                opacity: 1;
                                background-color: transparent;
                                &::after {
                                    height: 110%;
                                    width: 110%;
                                }
                            }
                            svg {
                                height: 0.6rem;
                                width: 0.6rem;
                                opacity: 1;
                                transition: 800ms ease-in-out;
                                position: relative;
                                margin-right: 4px;
                                top: 2px;
                                fill: #fff;
                                &[id="gitlab"] {
                                    height: 0.6rem;
                                    width: 0.6rem;
                                }
                            }
                        }
                    }
                }
            }
            ${TagsContainer} {
                display: flex;
                ${Wrapper} {
                    display: flex;
                    flex-wrap: wrap;
                    ${Taggg} {
                        padding: 0.1rem 0.7rem;
                        margin: 0 3px;
                        margin-bottom: 10px;
                        border-radius: 25px;
                        color: #5f6368;
                        transition: 400ms border-bottom-left-radius linear, 400ms background-color linear, 600ms box-shadow linear;
                        display: -webkit-inline-box;
                        text-transform: uppercase;
                        font-weight: bold;
                        font-size: .66rem;
                        white-space: nowrap;
                        border: 3px solid #28242f;
                        /*&:first-child {
                            margin-left: unset;
                        }*/
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
                            border-color: #fff;
                            color: ${variable.SiteColor};
                        }
                        &:active, &:focus {
                            background-color: ${rgba(variable.SiteColor, 0.1)};
                            box-shadow: 0 1px 3px 1px rgba(60,64,67,0.15), 0 1px 2px 0 rgba(60,64,67,0.3);
                            outline: unset;
                            border-color: transparent;
                            border-bottom-left-radius: 0px;
                            color: ${variable.SiteColor};
                        }
                    }
                }
            }
        }
        ${RightDetails} {
            flex: 1 1;
            text-align: left;
            max-width: calc(100% - 25px);
            margin-top: 30px;
            flex-direction: row;
            position: relative;
            position: absolute;
            right: 0;
            @media (min-width: 450px) {
                max-width: calc(100% - 75px);
            }
            @media ${variable.MidPoint} {
                flex-direction: column;
                margin-top: unset;
                text-align: unset;
                max-width: unset;
                margin: unset;
                display: flex;
            }
            @media (max-width: 250px) {
                flex-direction: column;
                display: block;
            }
            ${DownloadBtn} {
                background-color: ${variable.SiteColor};
                padding: 0.6em 0.7rem;
                border-radius: 2px;
                color: #fff;
                margin-bottom: 5px;
                transition: 300ms ease-in-out;
                display: -webkit-inline-box;
                font-size: 0.67rem;
                margin: 5px;
                padding-left: 12px;
                @media ${variable.MidPoint} {
                    margin: 0 auto;
                    margin-top: unset;
                }
                &:hover {
                    background-color: ${rgba(variable.SiteColor,0.85)};
                }
                &:active, &:focus {
                    background-color: ${rgba(variable.SiteColor,0.65)};
                }
                svg {
                    height: 0.6rem;
                    width: 0.6rem;
                    margin-right: 7px;
                    position: relative;
                    top: 2px;
                }
            }
            ${SupportBtn} {
                background-color: #da002f;
                margin-bottom: 5px;
                padding: 0.4rem 0.6rem;
                border-radius: 2px;
                color: #fff;
                transition: 300ms ease-in-out;
                display: -webkit-inline-box;
                font-size: 0.67rem;
                margin: 5px;
                @media ${variable.MidPoint} {
                    margin: 0 auto;
                    margin-top: 10px;
                }
                @media (max-width: 250px) {
                    margin-left: unset;
                }
                &:hover {
                    background-color: #ad0026;
                    color: #fff;
                }
                &:active, &:focus {
                    opacity: 0.8;
                }
            }
            ${DemoBtn} {
                background-color: #fff;
                margin-bottom: 5px;
                padding: 0.3rem 0.6rem;
                border-radius: 2px;
                color: ${variable.SiteColor};
                border: 1px solid;
                transition: 300ms ease-in-out;
                display: -webkit-inline-box;
                font-size: 0.67rem;
                margin: 5px;
                @media ${variable.MidPoint} {
                    margin: 0 auto;
                    margin-top: 10px;
                }
                &:hover {
                    color: ${darken(0.1,variable.SiteColor)};
                    border: 1px solid ${variable.SiteColor};
                }
                &:active, &:focus {
                    background-color: ${variable.SiteColor};
                    border: 1px solid ${variable.SiteColor};
                    color: #fff;
                    opacity: 1;
                }
                &[alt="disabled"] {
                    border-color: grey;
                    color: #fff;
                    background-color: grey;
                    &:hover {
                        background-color: grey;
                        color: #eee;
                    }
                    &:active, &:focus {
                        opacity: 0.8;
                        background-color: grey;
                        color: #fff;
                    }
                }
            }
        }
    }
`