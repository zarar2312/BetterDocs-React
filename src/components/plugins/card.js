import React from 'react'
import { Link } from 'gatsby'
import style from 'src/styles/plugins-card.module.scss'
import Missing from "src/images/missing_image_2.png"
import Mobile from "src/images/mobile_missing.png"
import MissingSecond from 'src/images/missing_image.png'
import kebabCase from "lodash/kebabCase"
import LazyLoad from "react-lazyload"
import 'src/styles/tooltips.css'

const pluginCard = ({title, thumbnail, slug, status, tags, excerpt, author, softwares}) => (
    <div className={style.pluginCard} title={title}>
        {status ?
            <div className={style.topStatus} title={"Status of " + title + ": " + status}>{status}</div>
        :
            <div className={style.topStatus} title={"Status of " + title + ": Unknown"}>Unknown</div>
        }
        {thumbnail ?
            <Link to={"plugins/" + slug}  className={style.imgContainer}>
                <LazyLoad once={true} height="100%" placeholder={
                    <img className={style.img} alt={title} src={MissingSecond} style={{backgroundImage :  `url(${Missing})` }}/>
                    }>
                    <img src={thumbnail} alt={title + "'s thumbnail"} title={title + "'s thumbnail"} />
                </LazyLoad>
            </Link>
        :
            <Link to={"plugins/" + slug} className={style.missingImgContainer}>
                <img className={style.missingImg} src={Mobile} alt="Missing Plugin Thumbnail" title="Missing Plugin Thumbnail" />
            </Link>
        }
        <div className={style.titleContainer}>
            <Link to={"plugins/" + slug} className={style.title}>{title}</Link>
        </div>
        {author &&
            <div className={style.authorDetails}>
                <div className={style.authorWrapper}>
                    <Link title={"Made by " + author} to={"/profile/" + author} className={style.author}>{author + " /"}</Link>
                </div>
                {softwares &&
                <div className={style.softwaresWrapper}>
                    {softwares.map(softwaree => (
                        <Link title={"This plugin supports " + softwaree} to={`/plugins/softwares/${kebabCase(softwaree)}/`} alt={softwaree} key={softwaree} className={style.softwareIcon}>
                            
                        </Link>
                    ))}
                </div>
                }
            </div>
        }
        <div className={style.description}>
            <p className={style.p}>{excerpt}</p>
        </div>
        {tags &&
            <div className={style.tagsContainer}>
                {tags.map(tag => (
                    <Link to={`/plugins/tags/${kebabCase(tag)}/`} key={tag} className={style.tag}>
                        #{tag}
                    </Link>
                ))}
            </div>
        }
    </div>
)

export default pluginCard