import React from 'react'
//import style from 'src/styles/download.module.scss'
import 'src/styles/tooltips.css'
//import Tooltip from 'src/components/download/tooltip'
import styled from 'styled-components';
//import * as variable from 'src/styles/variables'
import { Link } from 'gatsby'

const FeaturedThemeCard = ({title, slug, author, thumbnail}) => (
    <Card to={"themes" + slug}>
        <ImageContainer>
            <img src={thumbnail} alt=
            {author ? 
            title + " Preview made by " + author
            :
            title
            }
            />
        </ImageContainer>
    </Card>
)

export default FeaturedThemeCard;

const ImageContainer = styled.div`
    display: block;
    width: 6.5rem;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
    padding-bottom: 56.25%;
    position: relative;
    background-color: transparent;
    @media (min-width: 500px) {
        width: 10.7rem;
    }
    @media (min-width: 850px) {
        width: 18.7rem;
        padding-bottom: unset;
        height: 10.5rem;
    }
    img {
        height: 100%;
        width: 100%;
        border-radius: 7px;
        margin: unset;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        transition: 250ms ease-in-out transform;
        transform: scale(0.97);
    }
`

const Card = styled(Link)`
    display: inline-block;
    background-color: #202225;
    background-color: transparent;
    border: 1px solid transparent;
    transition-duration: 800ms;
    margin: 0 auto;
    margin-bottom: 1rem;
    width: 100%;
    @media (min-width: 850px) {
        display: inline;
        flex-basis: 24%;
        margin: unset;
        margin-left: 2rem;
        width: unset;
    }
    &:first-child {
        margin-left: -10rem;
    }
    &:hover {
        ${ImageContainer} {
            img {
                transform: scale(1);
            }
        }
    }
    &:active, &:focus {
        opacity: 0.7;
    }
`