import React from 'react'
import 'src/styles/tooltips.css'
import styled from 'styled-components';
import { Link } from 'gatsby'
import LazyLoad from "react-lazyload"
import Loading from 'src/images/Loading.gif'
import * as variable from 'src/styles/variables'

const FeaturedThemeCard = ({title, slug, author, thumbnail}) => (
    <Card to={"theme" + slug}>
        <ImageContainer>
            <LazyLoad once={true} height="100%"
                placeholder={<img src={Loading} alt="Loading"
            />}>
                <img src={thumbnail} alt=
                {author ? 
                title + " Preview made by " + author
                :
                title
                }/>
            </LazyLoad>
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
    @media ${variable.MidPoint} {
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
    transition: 700ms ease-in-out;
    margin: 0 auto;
    margin-bottom: 1rem;
    width: 100%;
    @media ${variable.MidPoint} {
        display: inline;
        flex-basis: 24%;
        margin: unset;
        margin-left: 2rem;
        width: unset;
    }
    &:first-child {
        margin-left: -10rem;
    }
    ${ImageContainer} {
            img {
                transition: 300ms ease-in-out, box-shadow 200ms ease-in-out;
                box-shadow: 0px 0px 0px 0px transparent;
            }
        }
    &:hover {
        ${ImageContainer} {
            img {
                transform: matrix3d(0.94, 0, 0.34, 0.0002, 0, 1, 0, 0, -0.34, 0, 0.94, 0, 1, 0, 10, 1) translateX(30px) scale(1);
                box-shadow: -15px 17px 30px -3px rgba(0, 0, 0, 0.3);
            }
        }
    }
    &:nth-child(odd) {
        &:hover {
            ${ImageContainer} {
                img {
                    transform: matrix3d(0.94, 0, 0.34, -0.0002, 0, 1, 0, 0, -0.34, 0, 0.94, 0, 1, 0, 10, 1) translateX(-10px) scale(1);
                    box-shadow: 15px 17px 30px -3px rgba(0, 0, 0, 0.3);
                }
            }
        }
    }
    &:active, &:focus {
        opacity: 0.7;
    }
`