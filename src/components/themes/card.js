import React from 'react'
import { Link } from 'gatsby'
//import style from 'src/styles/themes.module.scss'
import Missing from "src/images/missing_image_2.png"
import LazyLoad from "react-lazyload"
import Stars from "src/images/stars.svg"
import Loading from 'src/images/Loading.gif'
import styled from 'styled-components';
import * as variable from 'src/styles/variables'
import { rgba, darken } from 'polished'
import { createGlobalStyle } from 'styled-components'

const themeCard = ({title, thumbnail, slug, status, tags, excerpt, author, featured, demo, mode, snippet}) => (
    <Cards>
        <GlobalStyle />
        { thumbnail ?
        <ImageContainer alt={featured && "featured"}>
        <ThumbnailLink to={"theme" + slug}>
            <LazyLoad once={true} height="100%"
                    placeholder={<Thumbnail to={"theme" + slug} alt={title} src={Loading} style={{backgroundImage :  `url(${Missing})` }}/>}>
                <Thumbnail alt={title} src={thumbnail}/>
            </LazyLoad>
        </ThumbnailLink>
        
        { featured &&
            <FeaturedIcon 
            to="/themes/featured/"
            data-balloon="Featured" data-balloon-pos="left"
            >
                <Star src={Stars} alt="Featured Theme icon"></Star>
            </FeaturedIcon>
        }
        <Options>
            <Btn
            href={thumbnail}
            target="blank"
            >Image Source</Btn>
            {demo &&
            <DisabledBtn
            href={'https://discordsource.com/preview/' + mode + '.html?theme=' + demo + "?no-cache=1"}
            target="blank"
            title="Demo Temporarily Disabled">Quick Demo</DisabledBtn>
            }
        </Options>
        </ImageContainer>
        :
        <MissingImageContainer to="themes/upload-a-theme">
        <Thumbnail alt={title} src={Missing} style={{backgroundImage :  `url(${Missing})` }}/>
        </MissingImageContainer>
        }
        <SmallDetails>
            {author &&
                <AuthorContainer>
                    <Author
                    to={"/profile/" + author}
                    >{author} /</Author>
                </AuthorContainer>
            }
            {status ?
            <StatusContainer>
                {snippet === true &&
                <LinkStatus to="/themes/snippets">
                    <Status alt="Snippet">
                        Snippet
                    </Status>
                </LinkStatus>
                }
                <Status alt={status}>
                    {status}
                </Status>
            </StatusContainer>
            :
            <StatusContainer>
                {snippet === true &&
                <LinkStatus to="/themes/snippets">
                    <Status alt="Snippet">
                        Snippet
                    </Status>
                </LinkStatus>
                }
                <Status alt="Unknown">
                    Unknown
                </Status>
            </StatusContainer>
            }
        </SmallDetails>
        <TitleContainer>
            <Title 
            to={"theme" + slug}>
            {title}
            </Title>
        </TitleContainer>
        {tags ?
        <>
        <Description>
            <Text>{excerpt}</Text>
        </Description>
        <Tags>
            {tags.map(tag => (
            <Tag to={`/themes/tag/${tag.toString().toLowerCase()}/`} key={tag}>
                #{tag.toString().toLowerCase()}
            </Tag>
            ))}
        </Tags>
        </>
        :
        <AltDescription>
            <Text>{excerpt}</Text>
        </AltDescription>
        }
    </Cards>
)

export default themeCard

const Btn = styled.a`
`
const DisabledBtn= styled.div`
`
const Star = styled.img`
`
const Thumbnail = styled.img`
`
const Title = styled(Link)`
`
const Text = styled.p`
`
const Tag = styled(Link)`
`
const Tags = styled.div`
`
const AltDescription = styled.div`
`
const Description = styled.div`
`
const TitleContainer = styled.div`
`
const Author = styled(Link)`
`
const Options = styled.div`
`
const FeaturedIcon = styled(Link)`
`
const ImageContainer = styled.div`
`
const MissingImageContainer = styled(Link)`
`
const ThumbnailLink = styled(Link)` 
`
const LinkStatus = styled(Link)`
`
const SmallDetails = styled.div`
`
const Status = styled.div`
`
const AuthorContainer = styled.div`
`
const StatusContainer = styled.div`
`

const Cards = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 16rem;
    /*padding: 10px;*/
    padding-bottom: 10px;
    margin-bottom: 30px;
    border-radius: 2px;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
    border-radius: 4px;
    background-color: #fff;
    border: 1px solid #ede7f3;
    &:last-child {
    margin-bottom: unset;
    }
    &:hover, &:focus, &:active {
        background-color: rgba(0, 0, 0, 0.07);
        box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.28), 0px 0px 1px 0px #d6d6d6;
        border: 1px solid transparent;
        ${ImageContainer}, ${MissingImageContainer} {
            box-shadow: ${rgba(variable.SiteColor, 0.5)} 0px 8px 20px;
            transform: translateY(-3px);
            &::before {
                content: "";
                pointer-events: all;
                opacity: 1;
            }
            ${Options} {
                opacity: 1;
                pointer-events: all;
            }
            ${FeaturedIcon} {
            }
        }
        ${TitleContainer} {
            ${Title} {
                color: ${variable.SiteColor} !important;
                border-bottom: 3px solid ${rgba(variable.SiteColor, 0.2)};
                &:hover {
                    border-bottom: 3px solid transparent;
                }
            }
        }
    }
    &:focus, &:active {
        outline: unset;
        border: 1px solid transparent;
        ${TitleContainer} {
            ${Title} {
                color: ${variable.SiteColor} !important;
            }
        }
    }
    ${ImageContainer}, ${MissingImageContainer} {
        transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
        position: relative;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 10px;
        padding-bottom: 56.25%;
        overflow: hidden;
        margin-left: -1px;
        margin-right: -1px;
        margin-top: -1px;
        border-radius: 0;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        &::before {
            content: "";
            display: block;
            background: rgba(0, 0, 0, 0.6);
            position: absolute;
            width: 100%;
            height: 27%;
            bottom: 0;
            opacity: 0;
            pointer-events: none;
            transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
            z-index: 1;
            box-shadow: 0px -8px 20px 5px rgba(0, 0, 0, 0.61);
        }
        &[alt="featured"] {
            ${Thumbnail} {
                border: 1px solid #ffb100;
            }
        }
        ${Thumbnail} {
            background-color: #000;
            height: 100%;
            width: 100%;
            margin: unset;
            margin: 0 auto;
            display: -webkit-box;
            box-shadow: 0 4px 10px rgba(102,51,153,0.1);
            background-size: cover;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
        }
        @media ${variable.MidPoint} {
            /*box-shadow: unset;*/
            padding-bottom: unset;
            border-radius: 4px;
            ${Thumbnail} {
                height: 9rem;
                width: 100%;
                margin: unset;
                position: unset;
                top: unset;
                bottom: unset;
                left: unset;
                right: unset;
            }
        }
    }
    ${FeaturedIcon} {
        display: -webkit-box;
        position: absolute !important;
        top: 0px;
        background-color: #ffb100;
        z-index: 2;
        width: 1.2rem;
        right: 0;
        height: 1.2rem;
        padding: 4px;
        border-bottom-left-radius: 2px;
        transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
        border-bottom: unset;
        box-shadow: unset;
        &:hover {
            background-color: #d89700;
            &::after {
                opacity: 1; 
            }
        }
        ${Star} {
            display: -webkit-box;
            width: 100%;
            height: 100%;
            margin: unset;
        }
    }
    ${Options} {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 30%;
        z-index: 1;
        flex-direction: row;
        justify-content: center;
        transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
        display: flex;
        opacity: 0;
        /*pointer-events: none;*/
        ${Btn} {
            margin: 0 auto;
            text-align: center;
            display: -webkit-inline-box;
            background-color: ${variable.SiteColor};
            border-radius: 25px;
            padding: .3rem .6rem;
            font-weight: 400;
            color: #fff;
            font-size: .6rem;
            transition: 250ms linear background-color;
            align-self: center;
            &:hover {
                background-color: ${darken(0.1, variable.SiteColor)};
            }
        }
        ${DisabledBtn} {
            background-color: grey;
            cursor: not-allowed;
            margin: 0 auto;
            text-align: center;
            display: -webkit-inline-box;
            background-color: grey;
            border-radius: 25px;
            padding: .3rem .6rem;
            font-weight: 400;
            color: #fff;
            font-size: .6rem;
            transition: 250ms linear background-color;
            align-self: center;
            &:hover {
                background-color: grey;
            }
        }
    }
    ${SmallDetails} {
        display: flex;
        padding: 0 10px;
        ${StatusContainer} {
            flex: 1;
            display: flex;
            justify-content: flex-end;
            ${Status} {
                font-size: 0.4rem;
                padding: 0.15rem 0.3rem;
                position: relative;
                top: 5px;
                transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
                line-height: unset !important;
                border: 1px solid;
                border-radius: 25px;
                text-align: center;
                display: none;
                color: #fff;
                word-break: keep-all;
                &[alt="Snippet"] {
                    background-color: #f4f4f4;
                    border-color: #e4e4e4;
                    display: table;
                    margin-right: 0.2rem;
                    color: hsla(0,0%,0%,0.8);
                    &:hover {
                        background-color: #e4e4e4;
                    }
                }
                &[alt="Updated"] {
                    background-color: #00b167;
                    border-color: #00b167;
                    display: table;
                }
                &[alt="Deprecated"] {
                    background-color: #c33030;
                    border-color: #c33030;
                    display: table;
                }
                &[alt="Unknown"] {
                    background-color: #005180;
                    border-color: #005180;
                    display: table;
                }
            }
        }
        ${AuthorContainer} {
            flex: 3;
            ${Author} {
                color: rgba(0, 0, 0, 0.8) !important;
                font-size: 0.45rem;
                position: relative;
                top: -3px;
                border-bottom: 1px solid transparent;
                display: -webkit-inline-box;
                transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
                line-height: unset !important;
                z-index: 0;
                &::after {
                    height: 0 !important;
                }
            }
        }
    }
    ${TitleContainer} {
        margin-top: -0.2rem;
        margin-bottom: 0.1rem;
        padding: 0 10px;
        ${Title} {
            font-weight: bold;
            color: rgba(0, 0, 0, 0.88);
            font-size: 0.8rem;
            border-bottom: 3px solid transparent;
            &::after {
                height: 0 !important;
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
    }
    ${Description} {
        padding: 0 10px;
        ${Text} {
            margin-bottom: unset;
            font-size: 0.6rem;
            color: rgba(0, 0, 0, 0.6);
            word-break: keep-all;
        }
    }
    ${AltDescription} {
        padding: 0 10px;
        ${Text} {
            margin-bottom: unset;
            line-height: 0.8rem;
            font-size: 0.6rem;
            color: rgba(0, 0, 0, 0.6);
            word-break: keep-all;
            @media ${variable.MidPoint} {
                margin-bottom: 1.3rem;
            }
        }
    }
    ${Tags} {
        padding: 0 10px;
        margin-bottom: unset;
        @media ${variable.MidPoint} {
            margin-bottom: 25px;
        }
        ${Tag} {
        font-weight: normal;
        color: rgba(0, 0, 0, 0.4) !important;
        box-shadow: unset;
        border: unset;
        margin-right: 5px;
        font-size: 0.5rem;
            &:last-child {
                margin-right: unset;
            }
            &::after {
                height: 0 !important;
            }
        }
    }
    @media ${variable.MidPoint} {
        padding: unset;
        margin-bottom: unset;
        border-radius: unset;
        background-color: unset;
        box-shadow: unset;
        border: unset;
        &:hover, &:focus, &:active {
            background-color: transparent;
            box-shadow: unset;
            border: unset;
            ${ImageContainer}, ${MissingImageContainer} {
                &::before {
                    content: "";
                    pointer-events: all;
                    opacity: 1;
                }
                ${Options} {
                    opacity: 1;
                    pointer-events: all;
                }
            }
        }
        &:focus, &:active {
            outline: unset;
            border: unset;
        }
        ${SmallDetails} {
            padding: unset;
        }
        ${AuthorContainer} {
            padding: unset;
        }
        ${Tags} {
            padding: unset;
        }
        ${TitleContainer} {
            padding: unset;
        }
        ${Description} {
            padding: unset; 
        }
        ${AltDescription} {
            padding: unset;    
        }
    }
`

const GlobalStyle = createGlobalStyle`
[mode="dark"] {
    ${Cards} {
        background-color: #222327;
        border-color: #222327;
        &:last-child {
        margin-bottom: unset;
        }
        &:hover, &:focus, &:active {
            background-color: #131417;
            box-shadow: 0px 3px 7px 0px rgba(0,0,0,0.28), 0px 0px 1px 0px #000000;
            border: 1px solid transparent;
            ${ImageContainer}, ${MissingImageContainer} {
                box-shadow: ${rgba(variable.SiteColor, 0.5)} 0px 8px 20px;
                transform: translateY(-3px);
                &::before {
                    content: "";
                    pointer-events: all;
                    opacity: 1;
                }
                ${Options} {
                    opacity: 1;
                    pointer-events: all;
                }
                ${FeaturedIcon} {
                }
            }
            ${TitleContainer} {
                ${Title} {
                    color: ${variable.SiteColor} !important;
                    border-bottom: 3px solid ${rgba(variable.SiteColor, 0.2)};
                    &:hover {
                        border-bottom: 3px solid transparent;
                    }
                }
            }
        }
        &:focus, &:active {
            outline: unset;
            border: 1px solid transparent;
            ${TitleContainer} {
                ${Title} {
                    color: ${variable.SiteColor} !important;
                }
            }
        }
        @media ${variable.MidPoint} {
            background-color: unset;
            border: unset;
            &:hover {
                border: unset;
                box-shadow: unset;
                background-color: unset;
            }
        }
        ${ImageContainer}, ${MissingImageContainer} {
            box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 10px;
            &::before {
                content: "";
                display: block;
                background: rgba(0, 0, 0, 0.6);
                position: absolute;
                width: 100%;
                height: 27%;
                bottom: 0;
                opacity: 0;
                pointer-events: none;
                transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
                z-index: 1;
                box-shadow: 0px -8px 20px 5px rgba(0, 0, 0, 0.61);
            }
            &[alt="featured"] {
                ${Thumbnail} {
                    border: 1px solid #ffb100;
                }
            }
            ${Thumbnail} {
                background-color: #000;
                height: 100%;
                width: 100%;
                margin: unset;
                margin: 0 auto;
                display: -webkit-box;
                box-shadow: 0 4px 10px rgba(102,51,153,0.1);
                border-radius: 2px;
                background-size: cover;
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
            }
            @media ${variable.MidPoint} {
                /*box-shadow: unset;*/
                padding-bottom: unset;
                ${Thumbnail} {
                    height: 9rem;
                    width: 100%;
                    margin: unset;
                    position: unset;
                    top: unset;
                    bottom: unset;
                    left: unset;
                    right: unset;
                }
            }
        }
        ${SmallDetails} {
            ${StatusContainer} {
                ${Status} {
                    &[alt="Snippet"] {
                        background-color: #33363c;
                        border-color: #2a2b2f;
                        color: rgba(255,255,255,0.8);
                        &:hover {
                            background-color: #2a2b2f;
                            color: #fff;
                        }
                    }
                }
            }
            ${AuthorContainer} {
                ${Author} {
                    color: rgba(255, 255, 255, 0.8) !important;
                    font-size: 0.45rem;
                    position: relative;
                    top: -3px;
                    border-bottom: 1px solid transparent;
                    display: -webkit-inline-box;
                    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
                    line-height: unset !important;
                    z-index: 0;
                    &::after {
                        height: 0 !important;
                    }
                }
            }
        }
        ${TitleContainer} {
            ${Title} {
                color: rgba(255, 255, 255, 0.88) !important;
                &::after {
                    height: 0 !important;
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
        }
        ${Description} {
            ${Text} {
                color: rgba(255, 255, 255, 0.6);
            }
        }
        ${AltDescription} {
            ${Text} {
                color: rgba(255, 255, 255, 0.6);
            }
        }
        ${Tags} {
            margin-bottom: unset;
            @media ${variable.MidPoint} {
                margin-bottom: 25px;
            }
            ${Tag} {
            font-weight: normal;
            color: rgba(255, 255, 255, 0.4) !important;
            box-shadow: unset;
            border: unset;
            margin-left: 5px;
            font-size: 0.5rem;
                &:first-child {
                    margin-left: unset;
                }
                &::after {
                    height: 0 !important;
                }
            }
        }
    }
}
`
