import React from 'react'
import { Link } from 'gatsby'
//import style from 'src/styles/themes-tags.module.scss'
import Missing from "src/images/missing_image_2.png"
import LazyLoad from "react-lazyload"
import Stars from "src/images/stars.svg"
import Loading from 'src/images/Loading.gif'
import styled from 'styled-components';
import * as variable from 'src/styles/variables'
import { rgba, darken } from 'polished'
import { createGlobalStyle } from 'styled-components'

const themeCard = ({title, thumbnail, slug, status, tags, excerpt, author, featured, demo, mode}) => (
    <Cards>
        <GlobalStyle />
        { thumbnail ?
        <ImageContainer alt={featured && "featured"}>
            <ThumbnailLink to={"themes" + slug}>
                <LazyLoad once={true} height="100%"
                        placeholder={<Thumbnail to={"themes" + slug} alt={title} src={Loading} style={{backgroundImage :  `url(${Missing})` }}/>}>
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
            href={'https://betterdocs.us/preview/' + mode + '.html?theme=' + demo + "?no-cache=1"}
            target="blank"
            title="Demo Temporarily Disabled">Quick Demo</DisabledBtn>
            }
        </Options>
        </ImageContainer>
        :
        <ImageContainer to="themes/upload-a-theme">
        <Thumbnail alt={title} src={Missing} style={{backgroundImage :  `url(${Missing})` }}/>
        </ImageContainer>
        }
        <div>
            {author &&
                <Author
                to={"/profile/" + author}
                >{author} /</Author>
            }
        </div>
        <TitleContainer>
            <Title 
            to={"themes" + slug}>
            {title}
            </Title>
        </TitleContainer>
        {tags ?
        <div>
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
        </div>
        :
        <AltDescription>
            <Text>{excerpt}</Text>
        </AltDescription>
        }
    </Cards>
)

export default themeCard

const ThumbnailLink = styled(Link)` 
`
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
    margin-bottom: unset;
    @media ${variable.MidPoint} {
        margin-bottom: 25px;
    }
    ${Tag} {
        font-weight: normal;
        color: rgba(0, 0, 0, 0.4) !important;
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
`

const AltDescription = styled.div`
    ${Text} {
        margin-bottom: unset;
        line-height: 0.8rem;
        font-size: 0.6rem;
        color: rgba(0, 0, 0, 0.6);
        @media ${variable.MidPoint} {
            margin-bottom: 1.3rem;
        }
    }
`

const Description = styled.div`
    ${Text} {
        margin-bottom: unset;
        font-size: 0.6rem;
        color: rgba(0, 0, 0, 0.6);
    }
`

const TitleContainer = styled.div`
    margin-top: -0.2rem;
    margin-bottom: 0.1rem;
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
`

const Author = styled(Link)`
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
`

const Options = styled.div`
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
        background-color: grey;
        cursor: not-allowed;
        &:hover {
            background-color: grey;
        }
    }
`

const FeaturedIcon = styled(Link)`
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
`

const ImageContainer = styled.div`
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 10px;
    padding-bottom: 56.25%;
    overflow: hidden;
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
`

const Cards = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 16rem;
    padding: 10px;
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
        ${ImageContainer} {
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
            ${ImageContainer} {
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
    }
`

const GlobalStyle = createGlobalStyle`
[mode="dark"] {
    ${Cards} {
        background-color: #18191c;
        border-color: #18191c;
        &:last-child {
        margin-bottom: unset;
        }
        &:hover, &:focus, &:active {
            background-color: #131417;
            box-shadow: 0px 3px 7px 0px rgba(0,0,0,0.28), 0px 0px 1px 0px #000000;
            border: 1px solid transparent;
            ${ImageContainer} {
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
        ${ImageContainer} {
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
        ${TitleContainer} {
            ${Title} {
                color: rgba(255, 255, 255, 0.88);
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