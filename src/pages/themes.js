import React from 'react'
import Layout from '../components/layout-mobile-footer'
import theme from '../styles/themes.module.scss'
import featured from '../styles/theme-featured-section.module.scss'
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet";
import Missing from "../images/missing_image_2.png"
import Star from "../images/star.svg"
//import Stars from "../images/stars.svg"
//import kebabCase from "lodash/kebabCase"
import LazyLoad from "react-lazyload"
import Headroom from 'react-headroom';
import '../styles/theme.css'
import '../styles/tooltips.css'
import Card from '../components/themes-card'

// Pass image as css instead of a dom element (img) style={{backgroundImage :  `url(${node.frontmatter.thumbnail})` }}

const Themes = (props) => {
  const themeList = props.data.allMarkdownRemark;
  //const tags = props.data.tags;
  const featuredList = props.data.featured;
  const { totalCount } = props.data.allMarkdownRemark;
  const listCount = `${totalCount}`
  
  return (
  <Layout>
    <Helmet>
        <meta charSet="utf-8" />
        <title>BetterDocs | #1 Discord Themes</title>
        <meta property="og:site_name" content="BetterDocs"/>
        <meta property="og:title" content="BetterDocs | #1 Discord Themes"/>
        <meta property="og:description" content="List of free high quality Discord themes by the community! Customize Discord to your own liking with transparent themes and modern themes!"/>
        <meta property="og:url" content="https://betterdocs.us/themes/" />
    </Helmet>
    <div className={theme.themesContainer}
    >
    <section className={featured.featuredSection}>
      <div className={featured.topBar}>
        <div className={featured.firstSection}>
          <div className={featured.headerContainer}>
            <div className={featured.header}>Featured Themes</div>
          </div>
          <div className={featured.linkContainer}>
            <Link 
            to="/themes/featured/"
            className={featured.link}>View All -></Link>
          </div>
        </div>
        <div className={featured.secondSection}>
        <div className={featured.paragraph}>
          <p>Want to get featured?</p>
        </div>
        <div className={featured.btnContainer}>
          <Link 
          className={featured.mainBtn}
          to="/themes/upload-a-theme/">Publish your theme</Link>
        </div>
        </div>
      </div>
      
      <div className={featured.container}>
      {featuredList.edges.map(({ node }, i) => (
        <Link 
        className={featured.cardWrapper}
        key={node.id}
        to={"/themes" + node.fields.slug}>
          <div className={featured.imgWrapper}>
            {node.frontmatter.thumbnail ?
            <LazyLoad once={true} height="100%"
              placeholder={<img className={theme.img} alt={node.frontmatter.title} title="Missing Thumbnail" src={Missing} style={{backgroundImage :  `url(${Missing})` }}/>}>
            <img className={theme.img} alt={node.frontmatter.title + " Preview by " + node.frontmatter.author} src={node.frontmatter.thumbnail}/>
            </LazyLoad>
            :
            <img className={theme.img} alt={node.frontmatter.title} title="Missing Thumbnail" src={Missing} style={{backgroundImage :  `url(${Missing})` }}/>
            }
          </div>
        <div className={featured.title}>{node.frontmatter.title}</div>
        </Link>
        ))}
        <Link 
        className={featured.cardWrapper}
        to="/themes/featured/">
          <div className={featured.imgWrapper}>
            <img src={Star} alt="View All Featured Themes"></img>
            <div className={featured.title}>View all featured themes</div>
          </div>
        </Link>
      </div>
    </section>
    
    <section className={theme.contentSection}
    >
    <Headroom>
      <div className={theme.titleBar}>
        <div className={theme.count}>#Themes <span>({listCount})</span></div>
        <input className={theme.input} placeholder="Search Themes library (WIP)" ></input>
        <a target="blank" href="https://www.youtube.com/watch?v=j_Uc0wZPJSY" data-balloon="Need help with theme installation?" data-balloon-pos="left" className={theme.help}>?</a>
        <Link className={theme.upload}
        data-balloon="Want to publish your theme?" data-balloon-pos="left"
        to="/themes/upload-a-theme/">
          <svg id='Capa_1' xmlns='http://www.w3.org/2000/svg' width='433.5' height='433.5'
          viewBox='0 0 433.5 433.5'>
              <g id='file-upload'>
                  <polygon points='140.25,331.5 293.25,331.5 293.25,178.5 395.25,178.5 216.75,0 38.25,178.5 140.25,178.5'
                  />
                  <rect x='38.25' y='382.5' width='357' height='51' />
              </g>
          </svg>
        </Link>
      </div>
    </Headroom>
      <div className={theme.mainContent}
        >
          <div className={theme.wrapper}
          >
          {themeList.edges.map(({ node }, i) => (
            <Card
            title={node.frontmatter.title} 
            thumbnail={node.frontmatter.thumbnail}
            slug={node.fields.slug}
            status={node.frontmatter.status}
            tags={node.frontmatter.tags}
            author={node.frontmatter.author}
            excerpt={node.excerpt}
            demo={node.frontmatter.demo}
            style={node.frontmatter.style}
            key={node.id}
            featured= {node.frontmatter.featured}
            />
          ))}
        </div>
      </div>

    </section>

    </div>
    <div className={theme.uploadContainer}>
        <Link to="/themes/upload-a-theme/" className={theme.uploadBtn}>
        +
        </Link>
    </div>
    <div className={theme.helpContainer}>
        <a data-balloon="Need help with theme installation?" data-balloon-pos="left" href="https://www.youtube.com/watch?v=j_Uc0wZPJSY" className={theme.btn} target="blank">?</a>
    </div>
  </Layout>
)
}

export default Themes;

export const allThemesQuery = graphql`
query allThemesQuery {
  allMarkdownRemark(filter: {collection: {eq: "themes"} } sort: { fields: [frontmatter___title], order: ASC}) {
    group(field: collection) {
      fieldValue
      totalCount
    }
    totalCount
    edges {
      node {
        excerpt
        html
        id
        frontmatter {
          title
          sub
          author
          thumbnail
          github_profile_url
          download
          support
          style
          demo
          layout
          description
          date
          featured
          tags
        }
        fields {
          slug
        }
      }
    }
  }
  featured: allMarkdownRemark(filter: {collection: {eq: "themes"} frontmatter: { featured: { eq: true } } } sort: { fields: [frontmatter___title], order: ASC} limit: 8 ) {
    group(field: collection) {
      fieldValue
      totalCount
    }
    totalCount
    edges {
      node {
        excerpt
        html
        id
        frontmatter {
          title
          sub
          author
          thumbnail
          github_profile_url
          download
          support
          layout
          description
          date
          featured
          tags
        }
        fields {
          slug
        }
      }
    }
  }
}
`