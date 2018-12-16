import React from 'react'
import mystyles from '../styles/hero.module.scss'
import preview from '../images/discord-comparison.png'

const Hero = ({ siteTitle }) => (
  <section
    className={mystyles.hero}
  >
    <div
      className={mystyles.textContainer}
    >
        <h1 
        className={mystyles.header1}
        >The Discord Enhancement Project.
        </h1>
        <div className={mystyles.paragraph}
        >
        <h2 className={mystyles.p}
        >
        Custom CSS themes + JS plugins, BTTV & FFZ twitch emotes and lots of extra tools.</h2>
        </div>
        <div className={mystyles.button}
        > 
            <a className={mystyles.btn} href="https://github.com/rauenzi/BetterDiscordApp/releases" target="blank"
            >Download
            </a> 
        </div>
    </div>
    <div className={mystyles.heroImage}
    >
    <img className={mystyles.heroImg} src={preview} alt="Discord Themes Preview"
    ></img>
    </div>
  </section>
)

export default Hero