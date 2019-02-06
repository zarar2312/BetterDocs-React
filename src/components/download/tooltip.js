import React from 'react'
//import style from 'src/styles/download.module.scss'
import 'src/styles/tooltips.css'
import styled from 'styled-components';
import * as variable from 'src/styles/variables'

const tooltip = ({text}) => (
    <Tooltipp data-balloon={text} data-balloon-pos="left">?</Tooltipp>
)

export default tooltip

const Tooltipp = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    border-radius: 50%;
    font-size: 0.4rem;
    line-height: 0.8rem;
    height: 0.8rem;
    width: 0.8rem;
    transition: 250ms linear;
    &:hover {
        background-color: ${variable.SiteColor};
    }
`