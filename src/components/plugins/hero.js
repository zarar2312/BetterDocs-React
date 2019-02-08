import React from 'react'
import { Link } from 'gatsby'
//import MissingSecond from 'src/images/missing_image.png'
import kebabCase from "lodash/kebabCase"
import 'src/styles/tooltips.css'
import * as variable from 'src/styles/variables'
import { rgba } from 'polished'
import styled from 'styled-components';
//import stylehero from 'src/styles/altHero.module.scss'

const pluginsHero = ({title,npm_i,download,auto,support,github_source_url,gitlab_source_url,npm_source_url,discord_server,tags,SoftwaresGrouped,tagsGrouped,author,status}) => (
    <Hero alt={title}>
        <Container>
        {title && 
            <Header>{title}</Header>
        }
        {author &&
            <Paragraph>
            <p>
            made by <Link to={"/profile/" + author} target="blank">
            {author}</Link>
            </p>
            </Paragraph>
        }
        <DetailsContainer>
            {github_source_url &&
            <Github>
                <a href={github_source_url} target="blank">
                    <svg id='Capa_1' xmlns='http://www.w3.org/2000/svg' width='438.549' height='438.549' viewBox='0 0 438.549 438.549'>
                    <path d='M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365 c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63 c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996 c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136 c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559 c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559 c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997 c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851 c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136 c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41 c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126 c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817 c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994 c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849 c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24 c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979 c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146 c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995 c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906 C438.536,184.851,428.728,148.168,409.132,114.573z'/>
                    </svg>
                    Source
                </a>
            </Github>
            }
            {gitlab_source_url &&
            <Gitlab>
                <a href={gitlab_source_url} target="blank">
                    <svg id='logo_art' data-name='logo art' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 586 559'>
                        <defs />
                        <path className='cls-1' d='M461.48,298.35,443.7,243.72a7.72,7.72,0,0,0-.43-1.47L407.6,132.45a14.18,14.18,0,0,0-13.54-9.67,13.94,13.94,0,0,0-13.38,9.75l-34,104.63H239.37L205.32,132.53A13.94,13.94,0,0,0,192,122.78h-.08a14.22,14.22,0,0,0-13.5,9.76L142.72,242.47c0,.1-.08.18-.11.28l-18.1,55.61a20.29,20.29,0,0,0,7.37,22.71L288.26,434.7a8,8,0,0,0,9.45-.05l0,0L454.12,321.07A20.28,20.28,0,0,0,461.48,298.35ZM227.73,253.22l43.59,134.16L166.68,253.22Zm87,134.19,41.8-128.62,1.8-5.57h61.1L324.76,374.5Zm79.47-244.58,30.63,94.33H363.52ZM341.49,253.16l-30.37,93.46L293,402.28,244.58,253.16ZM191.85,142.83l30.69,94.33H161.27Zm-50.56,165.3a4.31,4.31,0,0,1-1.56-4.83L153.17,262l98.57,126.37Zm303.43,0L334.26,388.34l.37-.48L432.83,262l13.44,41.28A4.31,4.31,0,0,1,444.72,308.12Z' />
                    </svg>
                    Source
                </a>
            </Gitlab>
            }
            {npm_source_url &&
            <Npm>
                <a href={npm_source_url} target="blank">
                <svg xmlns='http://www.w3.org/2000/svg'>
                    <g>
                        <polygon id='svg_2' points='1,5 3,5 3,2 4,2 4,5 5,5 5,1 1,1' fill='#FFF'
                        />
                        <path id='svg_3' d='m6,1l0,5l2,0l0,-1l2,0l0,-4l-4,0zm3,3l-1,0l0,-2l1,0l0,2z'
                        fill='#FFF' />
                        <polygon id='svg_4' points='11,1 11,5 13,5 13,2 14,2 14,5 15,5 15,2 16,2 16,5 17,5 17,1'
                        fill='#FFF' />
                    </g>
                </svg>
                    Source
                </a>
            </Npm>
            }
            {discord_server &&
            <Discord>
            <a href={discord_server} target="blank">
                <svg id='Layer_1' xmlns='http://www.w3.org/2000/svg' height="30" viewBox="0 0 250 240" width="30">
                    <path className='st0' d='M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z'
                    />
                    <path className='st0' d='M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z'
                    />
                </svg>
                Server</a>
            </Discord>
            }
            {tags &&
            <TagsContainer>
                {tagsGrouped.map(tag => (
                <ATag to={`/plugins/tag/${kebabCase(tag.fieldValue)}/`} key={tag.fieldValue}>
                {tag.fieldValue} <span>{tag.totalCount}</span>
                </ATag>
                ))}
            </TagsContainer>
            }
        </DetailsContainer>
        {SoftwaresGrouped &&
        <SoftwaresContainer>
            {SoftwaresGrouped.map(software => (
            <Softwaree to={`/plugins/softwares/${kebabCase(software.fieldValue)}/`} key={software.fieldValue}>
                {software.fieldValue}
            </Softwaree>
            ))}
        </SoftwaresContainer>
        }
        {author &&
            <StatusContainer alt={status}>
                {status ?
                    <AStatus>
                        <div className={status}>{status}</div>
                    </AStatus>
                :
                <AStatus>
                    <div className="unknown">Unknown</div>
                </AStatus>
                }
            </StatusContainer>
        }
        </Container>
        <Options>
            {download &&
                <div>
                    {auto ?
                        <DownloadBtn href={'https://minhaskamal.github.io/DownGit/#/home?url=' + download} target="blank">
                            {download && 
                            <span>
                                <svg xmlns='http://www.w3.org/2000/svg' id='Capa_1' width='512' height='512'
                                viewBox='0 0 433.5 433.5'>
                                <path d='M395.25,153h-102V0h-153v153h-102l178.5,178.5L395.25,153z M38.25,382.5v51h357v-51H38.25z'
                                fill='#FFF' id='file-download' />
                            </svg>
                            Download</span>
                            }
                        </DownloadBtn>
                    :
                        <DownloadBtn href={download} target="blank">
                            {download && 
                            <span>
                                <svg xmlns='http://www.w3.org/2000/svg' id='Capa_1' width='512' height='512'
                                viewBox='0 0 433.5 433.5'>
                                <path d='M395.25,153h-102V0h-153v153h-102l178.5,178.5L395.25,153z M38.25,382.5v51h357v-51H38.25z'
                                fill='#FFF' id='file-download' />
                                </svg>
                                Download</span>
                            }
                        </DownloadBtn>
                    }
                </div>
            }
        {npm_i &&
            <NpmBtn>
                <span><svg id='Capa_1' xmlns='http://www.w3.org/2000/svg' width='451.846' height='451.847' viewBox='0 0 451.846 451.847'> <path d='M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744 L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284 c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z'/></svg> 
                npm i {npm_i}</span>
            </NpmBtn>
        }
        <div>
            {support && 
            <SupportBtn href={support} target="blank">Doesn't Work?</SupportBtn>
            }
        </div>
        </Options>
    </Hero>
)

export default pluginsHero

const Container = styled.div`
`
const Header = styled.h2`
`
const Paragraph = styled.div`
`
const DetailsContainer = styled.div`
`
const Github = styled.div`
`
const Gitlab = styled.div`
`
const Npm = styled.div`
`
const Discord = styled.div`
`
const TagsContainer = styled.div`
`
const ATag = styled(Link)`
`
const SoftwaresContainer = styled.div`
`
const Softwaree = styled(Link)`
`
const Options= styled.div`
`
const DownloadBtn = styled.a`
`
const NpmBtn = styled.div`
`
const DemoBtn = styled.a`
`
const SupportBtn = styled.a`
`
const StatusContainer = styled.div`
`
const AStatus = styled.div`
`
const Hero = styled.div`
    order: 1;
    background: transparent;
    border-bottom: 2px solid #f0f0f0;
    display: block;
    color: #ffffff;
    text-align: center;
    position: relative;
    z-index: 99;
    padding: 20px 0px 20px 0px;
    background-size: cover;
    @media (min-width: 850px) {
        display: flex;
    }
    &[alt="Upload a Plugin"] {
        ${SoftwaresContainer}, ${DetailsContainer} {
            display: none !important;
        }
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
    ${Container} {
        max-width: calc(100% - 25px);
        margin: 0 auto;
        position: relative;
        padding: 0;
        text-align: left;
        flex: 2;
        display: flex;
        flex-direction: column;
        @media (min-width: 450px) {
            max-width: calc(100% - 75px);
            padding: 0 10px;
        }
        @media (min-width: 850px) {
            padding: 0 20px;
        }
        ${Header} {
            font-size: .9em;
            font-weight: 400;
            color: #282828;
            margin-bottom: unset;
        }
        ${Paragraph} {
            margin-top: 0.2rem;
            p {
                color: #999;
                font-size: 0.5em;
                margin-bottom: unset;
                    a {
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
                        color: #fff;
                        opacity: 1;
                        background-color: transparent;
                        &::after {
                            height: 110%;
                            width: 110%;
                        }
                    }
                }
            }
        }
        ${DetailsContainer} {
            display: flex;
            margin-top: 0.3rem;
            ${Github} {
                margin-right: 10px;
                a {
                    &:hover {
                        svg {
                            fill: #0a0a0a;
                        }
                    }
                }
                svg {
                    height: 0.6rem;
                    width: 0.6rem;
                    opacity: 1;
                    transition: 800ms ease-in-out;
                    position: relative;
                    left: -4px;
                    top: 2px;
                    fill: #fff;
                }
                a {
                    background-color: #0a0a0a;
                    color: #fff;
                    font-size: 0.55rem;
                    padding: 0.15rem 0.35rem;
                    border-radius: 2px;
                    border: 1px solid #0a0a0a;
                    transition: all 300ms linear;
                    &:hover {
                        color: #0a0a0a;
                        background-color: #fff;
                        border: 1px solid #0a0a0a;
                    }
                }
                &::after {
                    content: "|";
                    color: #d2d2d2;
                    position: relative;
                    top: 2px;
                    left: 5px;
                }
            }
            ${Gitlab} {
                margin-right: 10px;
                a {
                    &:hover {
                        svg {
                            fill: #0a0a0a;
                        }
                    }
                }
                svg {
                    height: 0.9rem;
                    width: 1rem;
                    opacity: 1;
                    transition: 800ms ease-in-out;
                    position: relative;
                    left: 0px;
                    top: 7px;
                    fill: #fff;
                }
                a {
                    background-color: #0a0a0a;
                    color: #fff;
                    font-size: 0.55rem;
                    padding: 0.15rem 0.4rem 0.2rem 0rem;
                    border-radius: 2px;
                    border: 1px solid #0a0a0a;
                    transition: all 300ms linear;
                    &:hover {
                        color: #0a0a0a;
                        background-color: #fff;
                        border: 1px solid #0a0a0a;
                    }
                }
                &::after {
                    content: "|";
                    color: #d2d2d2;
                    position: relative;
                    top: 2px;
                    left: 5px;
                }
            }
            ${Npm} {
                margin-right: 10px;
                    a {
                        &:hover {
                            svg {
                                polygon, path {
                                    fill: #0a0a0a;
                                }
                            }
                        }
                    }
                    svg {
                        height: 0.3rem;
                        width: 0.75rem;
                        opacity: 1;
                        transition: 800ms ease-in-out;
                        position: relative;
                        left: -3px;
                        top: 0px;
                    path, polygon {
                        fill: #fff;
                    }
                }
                a {
                    background-color: #0a0a0a;
                    color: #fff;
                    font-size: 0.55rem;
                    padding: 0.15rem 0.4rem 0.2rem 0.3rem;
                    border-radius: 2px;
                    border: 1px solid #0a0a0a;
                    transition: all 300ms linear;
                    &:hover {
                        color: #0a0a0a;
                        background-color: #fff;
                        border: 1px solid #0a0a0a;
                    }
                }
                &::after {
                    content: "|";
                    color: #d2d2d2;
                    position: relative;
                    top: 2px;
                    left: 5px;
                }
            }
            ${Discord} {
                margin-right: 10px;
                a {
                    &:hover {
                        svg {
                            fill: #7289DA;
                        }
                    }
                }
                svg {
                    height: 0.8rem;
                    width: 0.8rem;
                    opacity: 1;
                    transition: 800ms ease-in-out;
                    position: relative;
                    left: -4px;
                    top: 5px;
                    fill: #fff;
                }
                a {
                    background-color: #7289DA;
                    color: #fff;
                    font-size: 0.55rem;
                    padding: 0.15rem 0.35rem;
                    border-radius: 2px;
                    border: 1px solid #7289DA;
                    transition: all 300ms linear;
                    &:hover {
                        color: #7289DA;
                        background-color: #fff;
                        border: 1px solid #7289DA;
                    }
                }
                &::after {
                    content: "|";
                    color: #d2d2d2;
                    position: relative;
                    top: 2px;
                    left: 5px;
                }
            }
            ${TagsContainer} {
                display: -webkit-box;
                ${ATag} {
                    margin-left: 7px;
                    background-color: #fff;
                    padding: 0.2rem 0.5rem;
                    border-radius: 25px;
                    color: #5f6368;
                    font-size: 0.45em;
                    transition-duration: 800ms;
                    border: 1px solid #eff2f6;
                    &:first-child {
                        margin-left: unset;
                    }
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
        ${SoftwaresContainer} {
            margin-top: 0.3rem;
            display: -webkit-box;
            ${Softwaree} {
                margin-left: 7px;
                background-color: #fff;
                padding: 0.2rem 0.5rem;
                border-radius: 25px;
                color: #5f6368;
                font-size: 0.45em;
                transition-duration: 800ms;
                border: 1px solid #eff2f6;
                position: relative;
                &:hover {
                    background-color: #dddddd;
                    border-bottom-left-radius: 0px;
                    box-shadow: 0 10px 90px rgba(0, 0, 0, 0.08);
                    &::after {
                        opacity: 1;
                    }
                }
                &:active, &:focus {
                    background-color: ${rgba(variable.SiteColor, 0.1)};
                    box-shadow: rgba(60, 64, 67, 0.15) 0px 1px 3px 1px, rgba(60, 64, 67, 0.3) 0px 1px 2px 0px;
                    border-bottom-left-radius: 0px;
                    color: ${variable.SiteColor};
                    outline: unset;
                    border-color: transparent;
                }
                &:first-child {
                    margin-left: unset;
                }
                &::after {
                    content: "Supported";
                    display: block;
                    background-color: #0a0a0a;
                    color: #fff;
                    position: absolute;
                    top: -37px;
                    left: 9px;
                    margin: 0 auto;
                    padding: 0.25rem 0.4rem;
                    border-radius: 2px;
                    text-align: center;
                    box-shadow: 0 2px 25px rgba(0, 0, 0, 0.4) !important;
                    transition: .2s linear all;
                    opacity: 0;
                    pointer-events: none;
                }
            }
        }
        ${StatusContainer} {
            margin-top: 0.3rem;
            &[alt="Outdated"] {
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
            ${AStatus} {
                color: #4e4e4e;
                display: -webkit-box;
                div {
                    background: #fff;
                    border-radius: 25px;
                    color: #fff;
                    padding: 0.2rem 0.45rem;
                    /* position: relative; */
                    /* top: 0px; */
                    font-size: 0.45em;
                    display: -webkit-inline-box;
                    font-weight: bold;
                    border: 1px solid;
                }
                div[class="Updated"] {
                    border-color: #00b167;
                    color: #00b167;
                    background-color: rgba(#00b167,0.04);
                }
                div[class="Outdated"] {
                    border-color: #a70a0a;
                    color: #a70a0a;
                }
                .unknown {
                    border-color: #005180;
                    color: #005180;
                }
            }
        }
    }
    ${Options} {
        flex: 1 1;
        display: flex;
        text-align: left;
        max-width: calc(100% - 25px);
        margin: 0 auto;
        margin-top: 10px;
        flex-direction: row;
        position: relative;
        @media (min-width: 450px) {
            max-width: calc(100% - 75px);
        }
        @media (min-width: 850px) {
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
            padding-left: 12px;
            @media (min-width: 850px) {
                margin: 0 auto;
                margin-top: unset;
                margin-bottom: 5px;
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
        ${NpmBtn} {
            background-color: #fff;
            border: 1px solid #b3b3b3;
            border-left: 3px solid #b3b3b3;
            padding: 0.6em 0.6rem;
            border-radius: 2px;
            color: #0a0a0a;
            margin-bottom: 5px;
            transition: 300ms ease-in-out;
            display: -webkit-inline-box;
            font-size: 0.67rem;
            &::after {
                content: "Copy Me!";
                display: block;
                background-color: #0a0a0a;
                color: #fff;
                position: absolute;
                top: 2.1rem;
                left: 0;
                z-index: 150;
                margin: 0 auto;
                padding: 0.25rem 0.4rem;
                border-radius: 2px;
                text-align: center;
                box-shadow: 0 2px 25px rgba(0, 0, 0, 0.4) !important;
                transition: .2s linear all;
                opacity: 0;
                pointer-events: none;
                font-size: 0.5rem;
            }
            @media (min-width: 850px) {
                margin: 0 auto;
                margin-top: unset;
                &::after {
                    top: 0.28rem;
                    left: -0.8rem;
                }
            }
            svg {
                height: 0.5rem;
                width: 0.4rem;
                top: 1px;
                right: 4px;
                position: relative;
            }
            &:hover {
                background-color: #f7f7f7;
                &::after {
                    opacity: 1;
                }
            }
            &:active, &:focus {
                background-color: #f0f0f0;
            }
        }
        ${DemoBtn} {
            background-color: #fff;
            margin-bottom: 5px;
            margin-left: 10px;
            padding: 0.3rem 0.6rem;
            border-radius: 2px;
            color: ${variable.SiteColor};
            border: 1px solid;
            transition: 300ms ease-in-out;
            display: -webkit-inline-box;
            font-size: 0.67rem;
            @media (min-width: 850px) {
                margin: 0 auto;
                margin-top: 10px;
            }
            /*@media (max-width: 450px) {
                margin-left: unset;
            }*/
            &:hover {
                background-color: ${variable.SiteColor};
                color: #fff;
            }
            &:active, &:focus {
                opacity: 0.7;
            }
            &[alt="disabled"] {
                border-color: grey;
                color: grey;
                &:hover {
                    background-color: grey;
                    color: #fff;
                }
            }
        }
        ${SupportBtn} {
            background-color: transparent;
            margin-left: 5px;
            padding: 0.4rem 0.6rem;
            border-radius: 2px;
            color: #da002f;
            transition: 300ms ease-in-out;
            display: -webkit-inline-box;
            font-size: 0.67rem;
            @media (min-width: 850px) {
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
    }
`