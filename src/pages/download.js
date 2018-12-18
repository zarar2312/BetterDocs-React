import React from 'react'

import style from '../styles/download.module.scss'
import Layout from '../components/layout'

const DownloadPage = () => (
  <Layout>
    <div className={style.wrapper}
    >
    <a className={style.card} target="blank" alt="BandagedBD" href="https://github.com/rauenzi/BetterDiscordApp/releases"
    >
    <div className={style.header}
    >
    BandagedBD
    </div>
    <div className={style.body}>
    Most Recommended (Page WIP)
    </div>
    </a>
    <a className={style.card} target="blank" alt="EnhancedDiscord" href="https://enhanceddiscord.com/"
    >
    <div className={style.header}
    >
    EnhancedDiscord
    </div>
    <div className={style.body}>
    
    </div>
    </a>
    <a className={style.card} target="blank" alt="DiscordInjections" href="https://github.com/DiscordInjections/DiscordInjections"
    >
    <div className={style.header}
    >
    DiscordInjections
    </div>
    <div className={style.body}>
    
    </div>
    </a>
    <a className={style.card} target="blank" alt="BeautifulDiscord" href="https://sites.google.com/view/thatawesomeguy173web/beautifuldiscord"
    >
    <div className={style.header}
    >
    BeautifulDiscord
    </div>
    <div className={style.body}>
    
    </div>
    </a>
    <a className={style.card} target="blank" alt="PowerCord" href="https://github.com/aetheryx/powercord"
    >
    <div className={style.header}
    >
    PowerCord
    </div>
    <div className={style.body}>
    
    </div>
    </a>
    <a className={style.card} target="blank" alt="BetterDiscord" href="https://github.com/Jiiks/BetterDiscordApp/releases"
    >
    <div className={style.header}
    >
    BetterDiscord
    </div>
    <div className={style.body}>
    
    </div>
    </a>
    </div>
  </Layout>
)

export default DownloadPage
