import React from 'react'
import { Link } from 'gatsby'
import style from 'src/styles/themes.module.scss'
import Missing from "src/images/missing_image_2.png"
import kebabCase from "lodash/kebabCase"
import LazyLoad from "react-lazyload"
import Stars from "src/images/stars.svg"

const themeCard = ({title, thumbnail, slug, status, tags, excerpt, author, featured, demo, mode}) => (
    <div 
    className={style.cardWrapper}>
        { thumbnail ?
        <Link to={"themes" + slug} className={style.imgContainer} alt={featured && "featured"}
        >
        <LazyLoad once={true} height="100%"
            placeholder={<img className={style.img} alt={title} src={Missing} style={{backgroundImage :  `url(${Missing})` }}/>}>
        <img className={style.img} alt={title} src={thumbnail}/>
        </LazyLoad>
        
        { featured &&
            <Link 
            to="/themes/featured/"
            className={style.icon}
            data-balloon="Featured" data-balloon-pos="left"
            >
            <img src={Stars} alt="Featured Theme icon"></img>
            </Link>
        }
        <div className={style.options}>
            <div className={style.optionsWrapper}>
            <a 
            className={style.btn}
            href={thumbnail}
            target="blank"
            >Full Thumbnail</a>
            {demo &&
            <div
            href={'http://betterdocs.netlify.com/demo/' + mode + '.html?theme=' + demo}
            className={style.btn}
            target="blank">Quick Demo</div>
            }
            </div>
        </div>
        </Link>
        :
        <div className={style.imgContainer}
        >
        <img className={style.img} alt={title} src={Missing} style={{backgroundImage :  `url(${Missing})` }}/>
        </div>
        }
        <div>
            <Link 
            className={style.author}
            to={"/profile/" + author}
            >{author} /</Link>
        </div>
        <div className={style.title}
        >
        <Link 
        to={"themes" + slug}
        className={style.titleLink}>
        {title}
        </Link>
        </div>
        {tags ?
        <div>
        <div className={style.description}
        >
            <p className={style.p}
            >{excerpt}</p>
        </div>
        <div className={style.tagContainer}>
            {tags.map(tag => (
            <Link to={`/themes/tags/${kebabCase(tag)}/`} key={tag} className={style.tag}>
                #{tag}
            </Link>
            ))}
        </div>
        </div>
        :
        <div className={style.descriptionAlt}
        >
            <p className={style.p}
            >{excerpt}</p>
        </div>
        }
    </div>
)

export default themeCard