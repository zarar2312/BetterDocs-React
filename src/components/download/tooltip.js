import React from 'react'
import style from 'src/styles/download.module.scss'
import 'src/styles/tooltips.css'

const tooltip = ({text}) => (
    <div className={style.help} data-balloon={text} data-balloon-pos="left">?</div>
)

export default tooltip