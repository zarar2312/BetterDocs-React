import React from 'react'
import { Link } from 'gatsby'
//import style from 'src/styles/themes.module.scss'
import Missing from "src/images/missing_image_2.png"
import LazyLoad from "react-lazyload"
import Loading from 'src/images/Loading.gif'
import styled from 'styled-components';
import * as variable from 'src/styles/variables'
import { rgba } from 'polished'
import { createGlobalStyle } from 'styled-components'

const themeFeaturedCard = ({title, thumbnail, author, slug}) => (
    <Card
        to={"/theme" + slug}>
        <GlobalStyle />
        <ThumbnailContainer>
            {thumbnail ?
            <LazyLoad once={true} height="100%"
              placeholder={<Thumbnail alt={title} title="Loading Thumbnail" src={Loading} style={{backgroundImage :  `url(${Missing})` }}/>}>
            <Thumbnail alt={title + " Preview by " + author} src={thumbnail}/>
            </LazyLoad>
            :
            <Thumbnail alt={title} title="Missing Thumbnail" src={Missing} style={{backgroundImage :  `url(${Missing})` }}/>
            }
        </ThumbnailContainer>
        <Title>{title}</Title>
    </Card>
)

export default themeFeaturedCard

const Title = styled.div`

`
const Thumbnail = styled.img`

`
const ThumbnailContainer = styled.div`

`

const Card = styled(Link)`
    margin-left: 50px;
    flex: 0 0 auto;
    &:first-child {
        margin-left: unset;
    }
    @media ${variable.MidPoint} {
        &:first-child {
            margin-left: 50px;
        }
    }
    &:hover {
        ${ThumbnailContainer} {
            transform: translateY(-3px);
            box-shadow: ${rgba(variable.SiteColor, 0.5)} 0px 8px 20px;
        }
        ${Title} {
            color: ${variable.SiteColor};
            border-bottom: 3px solid ${rgba(variable.SiteColor, 0.3)};
        }
    }
    &:last-child {
        ${ThumbnailContainer} {
            box-shadow: none;
            border-width: 1px;
            border-style: solid;
            border-color: rgb(245, 243, 247);
            background-color: rgba(245, 243, 247, 0.25);
            border-image: initial;
            transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-right: 25px;
            height: 10rem;
            padding-bottom: unset;
            ${Thumbnail} {
                width: 3em;
                height: 3em;
                margin: 0 auto;
                display: block;
                position: initial;
                
            }
            ${Title} {
                color: ${variable.SiteColor};
                margin: 1rem auto;
            }
        }
        &:hover {
            ${ThumbnailContainer} {
                transform: translateY(-3px);
                box-shadow: ${rgba(variable.SiteColor, 0.5)} 0px 8px 20px;
            }
            ${Title} {
                border-bottom: 3px solid transparent;
            }
        }
    }
    ${ThumbnailContainer} {
        display: block;
        width: 16.7rem;
        box-shadow: rgba(102, 51, 153, 0.1) 0px 4px 10px;
        border-radius: 2px;
        transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
        padding-bottom: 56.25%;
        position: relative;
        ${Thumbnail} {
            height: 100%;
            width: 100%;
            border-radius: 2px;
            margin: unset;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
        }
    }
    ${Title} {
        color: #141414;
        font-weight: bold;
        border-bottom: 3px solid transparent;
        transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
        display: -webkit-inline-box;
        font-size: 0.65rem;
    }
`

const GlobalStyle = createGlobalStyle`
[mode="dark"] {
  ${Card} {
        ${Title} {
            color: #eee;
        }
    }
}
`