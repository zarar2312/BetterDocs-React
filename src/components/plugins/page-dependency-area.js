import React from 'react'
//import { Link } from 'gatsby'
import 'src/styles/tooltips.css'
import * as variable from 'src/styles/variables'
import { darken } from 'polished'
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'

const pluginDependency = ({dependenciesList, title,areaHeader}) => (
    <Area>
        <GlobalStyle />
        <CardHeader>{areaHeader}</CardHeader>
        <AreaCard>
            <SubText>You need this extra Plugin file(s) known as a dependency so the Plugin "{title}"  can work properly.</SubText>
            {dependenciesList.map(dependency => (
            <Dependencies>
                <Button href={dependency.fieldValue} target="_blank" key={dependency.fieldValue}>
                    <Text>Download</Text>
                </Button>
            </Dependencies>
            ))}
        </AreaCard>
    </Area>
)

export default pluginDependency

const CardHeader = styled.h1`
`
const AreaCard = styled.div`
`
const SubText = styled.p`
`
const Dependencies = styled.div`
`
const Text = styled.div`
`
const Button = styled.a`
`
const Area = styled.div`
margin-bottom: 1.25rem;
${CardHeader} {
    font-size: 1.55rem;
    margin-bottom: 0.8rem;
    word-break: keep-all;
}
${AreaCard} {
    flex-direction: column;
    word-break: break-word;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 2px 2px 40px -12px #999;
    padding: 0.8rem 1.1rem;
    border: 1px solid #ececec;
    ${SubText} {
        font-weight: bold;
        margin: unset;
        font-size: 0.58rem;
        line-height: 0.9rem;
        color: #969696;
    }
    ${Dependencies} {
        display: flex;
        counter-reset: dependency;
        margin-top: 0.3rem;
            ${Button} {
                margin-left: 10px;
                &:first-child {
                    margin-left: unset;
                }
                &::after {
                    display: none !important;
                }
                &:hover {
                    &::after {
                        display: none !important;
                    }
                }
                ${Text} {
                    display: block;
                    background-color: ${variable.SiteColor};
                    color: #fff;
                    border-radius: 25px;
                    padding: 0.3rem 0.6rem;
                    font-size: 0.6rem;
                    transition: 250ms all linear;
                    position: relative;
                    &:hover {
                        background: ${darken(0.1,variable.SiteColor)};
                    }
                    &::before {
                        counter-increment: dependency;
                        position: absolute;
                        top: -8px;
                        left: -8px;
                        background-color: ${darken(0.1,variable.SiteColor)};
                        padding: 4px 7px;
                        font-size: 0.5rem;
                        border-radius: 50%;
                        content: counter(dependency);
                        margin-right: 4px;
                    }
                    &:only-child {
                        &::before {
                            content: unset;
                        }
                    }
                }
            }
        }
    }
`

const GlobalStyle = createGlobalStyle`
[mode="dark"] {
    ${Area} {
        ${SubText} {
            color: #e4e4e4;
        }
        ${CardHeader} {
            color: #fff;
        }
        ${AreaCard} {
            background-color: rgba(0,0,0,0.2);
            border-color: rgba(0,0,0,0.25);
            box-shadow: 2px 2px 40px -12px #000;
        }
    }
}
`
