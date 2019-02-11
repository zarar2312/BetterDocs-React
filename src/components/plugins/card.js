import React from 'react'
import { Link } from 'gatsby'
//import style from 'src/styles/plugins-card.module.scss'
import Missing from "src/images/missing_image_2.png"
import Mobile from "src/images/mobile_missing.png"
//import MissingSecond from 'src/images/missing_image.png'
import kebabCase from "lodash/kebabCase"
import LazyLoad from "react-lazyload"
import 'src/styles/tooltips.css'
import Loading from 'src/images/Loading.gif'
import * as variable from 'src/styles/variables'
import { rgba } from 'polished'
import styled from 'styled-components';
import bd from 'src/images/betterdiscord.png'
import { createGlobalStyle } from 'styled-components'

const pluginCard = ({title, thumbnail, slug, status, tags, excerpt, author, softwares}) => (
    <Card title={title}>
    <GlobalStyle />
        {status ?
            <Status title={"Status of " + title + ": " + status}>{status}</Status>
        :
            <Status title={"Status of " + title + ": Unknown"}>Unknown</Status>
        }
        {thumbnail ?
            <ImageContainer to={"plugins/" + slug}>
                <LazyLoad once={true} height="100%" placeholder={
                    <img alt={title} src={Loading} style={{backgroundImage :  `url(${Missing})` }}/>
                    }>
                    <img src={thumbnail} alt={title + "'s thumbnail"} title={title + "'s thumbnail"} />
                </LazyLoad>
            </ImageContainer>
        :
            <MissingContainer to={"plugins/" + slug}>
                <img src={Mobile} alt="Missing Plugin Thumbnail" title="Missing Plugin Thumbnail" />
            </MissingContainer>
        }
        <TitleContainer>
            <Title to={"plugins/" + slug}>{title}</Title>
        </TitleContainer>
        {author &&
            <Details>
                <AuthorContainer>
                    <Author title={"Made by " + author} to={"/profile/" + author}>{author + " /"}</Author>
                </AuthorContainer>
                {softwares &&
                <SoftwareList>
                    {softwares.map(softwaree => (
                        <SoftwareIcon title={"This plugin supports " + softwaree} to={`/plugins/softwares/${kebabCase(softwaree)}/`} alt={softwaree} key={softwaree}>
                        </SoftwareIcon>
                    ))}
                </SoftwareList>
                }
            </Details>
        }
        <DescriptionContainer>
            <DescriptionText>{excerpt}</DescriptionText>
        </DescriptionContainer>
        {tags &&
            <TagsContainer>
                {tags.map(tag => (
                    <Tagg to={`/plugins/tag/${kebabCase(tag)}/`} key={tag}>
                        #{tag}
                    </Tagg>
                ))}
            </TagsContainer>
        }
    </Card>
)

export default pluginCard

const ImageContainer = styled(Link)`
    padding: 10px;
    position: relative;
    padding: 15px 0;
    height: 6.9287rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    img {
        transition: 250ms ease-in-out;
        -webkit-filter: drop-shadow(rgba(0, 0, 0, 0.22) 0px 5px 6px);
        filter: drop-shadow(rgba(0, 0, 0, 0.22) 0px 5px 6px);
        max-height: 100%;
        margin: unset;
        position: unset;
        top: unset;
        bottom: unset;
        left: unset;
        right: unset;
        display: -webkit-box;
        border-radius: 2px;
        background-size: cover;
        margin: 0 auto;
        transform: translateZ(0);
    }
`

const MissingContainer = styled(Link)`
    position: relative;
    padding: 15px 0;
    height: 6.9287rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    img {
        transition: 250ms ease-in-out;
        -webkit-filter: drop-shadow(rgba(0, 0, 0, 0.22) 0px 5px 6px);
        filter: drop-shadow(rgba(0, 0, 0, 0.22) 0px 5px 6px);
        max-height: 100%;
        margin: unset;
        position: unset;
        top: unset;
        bottom: unset;
        left: unset;
        right: unset;
        display: -webkit-box;
        border-radius: 2px;
        background-size: cover;
        margin: 0 auto;
        border-radius: 50%;
        height: 4rem;
    }
`

const Title = styled(Link)`
    color: rgba(0, 0, 0, 0.88);
    padding: 0 15px;
    font-size: 0.7rem;
    font-weight: 700;
    text-align: center;
    line-height: unset !important;
    &::after {
        height: 0 !important;
    }
    &:hover {
        color: #fff !important;
        opacity: 1;
        background-color: transparent;
        &::after {
            height: 110%  !important;
            width: 101%;
        }
    }
`

const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
`

const Card = styled.div`
    flex-basis: 10rem;
    background-color: #fff;
    border: 1px solid #eee;
    margin-bottom: 15px;
    box-shadow: 2px 2px 5px rgba(0,0,0,.1);
    border: 1px solid #fff;
    position: relative;
    transition: 250ms ease-in-out;
    overflow: hidden;

    &:hover {
        box-shadow: 2px 2px 5px rgba(0,0,0,.25);
        background-color: #eee;
        border-color: #eee;
        ${ImageContainer}, ${MissingContainer} {
            img {
                transform: translateY(-3px);
                -webkit-filter: drop-shadow(${rgba(variable.SiteColor, 0.4)} 0px 6px 8px);
                filter: drop-shadow(${rgba(variable.SiteColor, 0.4)} 0px 8px 10px);
            }
        }
    }

    &:focus, &:active {
        border-color: ${variable.SiteColor};
    }

    @media (min-width: 850px) {
        &:hover {
            background-color: #fff;
            border-color: #fff;
        }
    }
`

const Status = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 2.5px;
    position: absolute;
    top: 0;
    z-index: 1;
    transition: 250ms ease-in-out;
    transform: translate3d(0, 0, 0);
    overflow: hidden;
    color: #fff;
    font-size: 0;
    text-align: center;
    &:hover {
        height: 16px;
        padding: 3px 0;
        font-size: 0.4rem;
    }
    &[title$="Outdated"] {
        background-color: #a70a0a;
    }
    &[title$="Updated"] {
        background-color: #00b167;
    }
    &[title$="Unknown"] {
        background-color: #00a2ff;
    }
`

const Details = styled.div`
    padding: 0 15px;
    padding-top: 7px;
    display: flex;
`

const AuthorContainer = styled.div`
    flex: 3;
    display: flex;
`

const Author = styled(Link)`
    color: #000;
    font-size: 0.45rem;
    line-height: unset !important;
    &::after {
        height: 0 !important;
    }
    &:hover {
        color: #fff !important;
        opacity: 1;
        background-color: transparent;
        &::after {
            height: 110% !important;
            width: 110%;
        }
    }
`

const SoftwareIcon = styled(Link)`
    line-height: 1 !important;
    align-self: center;
    opacity: 0.5;
    &::after {
        height: 0 !important;
    }
    &:hover {
        opacity: 1;
        &::before {
            color: #000 !important;
        }
    }
    &::before {
        content: "";
        display: block;
        font-size: 0.4rem;
        color: #000 !important;
        background-repeat: no-repeat;
    }
    &[alt="BandagedBD"] {
        &::before {
            background-image: url("https://i.imgur.com/VcfsLtZ.png");
            height: 0.53rem;
            width: 0.53rem;
            background-size: 100%;
            background-position: center;
            -webkit-filter: drop-shadow(rgba(0, 0, 0, 0.4) -1px 1px 1px);
            filter: drop-shadow(rgba(0, 0, 0, 0.4) -1px 1px 1px);
        }
    }
    &[alt="DiscordInjections"] {
        &::before {
            content: "DI"
        }
    }
    &[alt="EnhancedDiscord"] {
        &::before {
            background-image: url("https://i.imgur.com/0n7cFQq.png");
            height: 0.6rem;
            width: 0.7rem;
            background-size: 140%;
            background-position: center;
        }
    }
    &[alt="BetterDiscord"] {
        &::before {
            background-image: url(${bd});
            height: 0.5rem;
            width: 0.5rem;
            background-size: 100%;
            background-position: center;
        }
    }
    &[alt="PowerCord"] {
        &::before {
            background-image: url("https://i.imgur.com/N77LRlL.png");
            height: 0.5rem;
            width: 0.5rem;
            background-size: 100%;
            background-position: center;
        }
    }
`

const SoftwareList = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-around;
    align-self: center;
`

const DescriptionContainer = styled.div`
    padding: 15px;
    padding-top: 10px;
`

const DescriptionText = styled.p`
    color: #767676;
    font-size: 0.6rem;
    margin: unset;
`

const Tagg = styled(Link)`
`
const TagsContainer = styled.div`
    display: flex;
    padding: 15px;
    padding-top: unset;
    justify-content: space-between;
    flex-wrap: wrap;
    ${Tagg} {
        font-size: 0.5rem;
        color: rgba(0, 0, 0, 0.4) !important;
        display: inline-block;
        transition: color 250ms, text-shadow 250ms;
        text-decoration: none;
        cursor: pointer;
        position: relative;
        z-index: 0;
        line-height: 0.8rem;

        &:after {
        height: 0 !important;
        }

        &:hover {
            color: #fff !important;
            opacity: 1;
            background-color: transparent;
            &::after {
                height: 110% !important;
                width: 110%;
            }
        }
    }
`

const GlobalStyle = createGlobalStyle`
[mode="dark"] {
    ${Card} {
        background-color: #222327;
        border-color: #222327;
        box-shadow: 2px 2px 5px rgba(0,0,0,.1);
        &:hover, &:focus, &:active {
            background-color: #131417;
            border-color: #131417;
            box-shadow: 2px 2px 5px rgba(0,0,0,.25);
            ${ImageContainer}, ${MissingContainer} {
                img {
                    transform: translateY(-3px);
                    -webkit-filter: drop-shadow(${rgba(variable.SiteColor, 0.5)} 0px 6px 8px);
                    filter: drop-shadow(${rgba(variable.SiteColor, 0.5)} 0px 8px 10px);
                }
            }
        }
        ${TitleContainer} {
            ${Title} {
                color: #eee;
            }
        }
        ${Details} {
            ${AuthorContainer} {
                ${Author} {
                    color: rgba(255, 255, 255, 0.4) !important;
                }
            }
        }
        ${DescriptionContainer} {
            ${DescriptionText} {
                color: #b9bbbe;
            }
        }
        ${TagsContainer} {
            ${Tagg} {
                color: rgba(255, 255, 255, 0.4) !important;
            }
        }
    }
}
`