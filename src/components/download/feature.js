import React from 'react'
//import style from 'src/styles/download.module.scss'
import 'src/styles/tooltips.css'
import Tooltip from 'src/components/download/tooltip'
import styled from 'styled-components';

const downloadThemes = ({name, tooltiptext, disabled, tooltip}) => (
    <Feature disabled={disabled === "true" && true}>{name}
    {tooltip === "true" &&
        <Tooltip
        text={tooltiptext}/> 
    }</Feature>
)

export default downloadThemes

const Feature = styled.div`
  font-weight: bold;
  letter-spacing: 0.03rem;
  text-align: center;
  line-height: 1.65rem;
  font-size: 0.74rem;
  display: flex;
  margin: 0 auto;
    &[disabled] {
        color: rgba(0,0,0,0.3) !important;
    }
    &:last-child {
        border-bottom: unset;
    }
`