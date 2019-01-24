import React from 'react'
import style from 'src/styles/hero.module.scss'
import preview from 'src/images/discord-comparison.png'
import 'src/styles/hero.css'
import { Link } from 'gatsby'

const Hero = ({ siteTitle }) => (
  <section
    className={style.hero}
  >
    <div
      className={style.textContainer}
    >
        <h1 
        className={style.header1}
        >The Discord Enhancement Project.
        </h1>
        <div className={style.paragraph}
        >
        <h2 className={style.p}
        >
        Custom CSS themes + JS plugins, BTTV & FFZ twitch emotes and lots of extra tools.</h2>
        </div>
        <div className={style.button}
        > 
            <Link className={style.btn} to="/download/" target="blank"
            >Download
            </Link> 
        </div>
    </div>
    <div className={style.heroImage}
    >
    <img className={style.heroImg} src={preview} alt="Discord Themes Preview"
    ></img>
    </div>
  </section>
)

export default Hero