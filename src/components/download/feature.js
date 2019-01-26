import React from 'react'
import style from 'src/styles/download.module.scss'
import 'src/styles/tooltips.css'
import Tooltip from 'src/components/download/tooltip'

const downloadThemes = ({name, tooltiptext, disabled, tooltip}) => (
    <div className={style.feature} disabled={disabled === "true" && "true"}>{name}
    {tooltip === true &&
        <Tooltip
        text={tooltiptext}/> 
    }</div>
)

export default downloadThemes