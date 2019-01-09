import React from 'react'
import Layout from '../components/layout-mobile-footer'
import theme from '../styles/themes.module.scss'
import featured from '../styles/themes-featured.module.scss'
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet";
import Missing from "../images/missing_image_2.png"
import Star from "../images/star.svg"
import Stars from "../images/stars.svg"
import kebabCase from "lodash/kebabCase"
import LazyLoad from "react-lazyload"
import Headroom from 'react-headroom';
import '../styles/theme.css'

// Pass image as css instead of a dom element (img) style={{backgroundImage :  `url(${node.frontmatter.thumbnail})` }}

const Themes = (props) => {
  const themeList = props.data.allMarkdownRemark;
  const tags = props.data.tags;
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
          to="/themes/upload-a-theme/">Submit your theme</Link>
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
            <LazyLoad once={true} height="100%"
              placeholder={<img className={theme.img} alt={node.frontmatter.title} src={Missing} style={{backgroundImage :  `url(${Missing})` }}/>}>
            <img className={theme.img} alt={node.frontmatter.title + " Preview by " + node.frontmatter.author} src={node.frontmatter.thumbnail}/>
            </LazyLoad>
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
        <div className={theme.count}>Themes <span>({listCount})</span></div>
        <input className={theme.input} placeholder="Search Themes library (WIP)" ></input>
      </div>
    </Headroom>
      <div className={theme.mainContent}
        >
          <div className={theme.wrapper}
          >
          {themeList.edges.map(({ node }, i) => (
            <div 
            className={theme.cardWrapper}
            key={node.id}
            >
              { node.frontmatter.thumbnail ?
              <div className={theme.imgContainer}
              >
                <LazyLoad once={true} height="100%"
                  placeholder={<img className={theme.img} alt={node.frontmatter.title} src={Missing} style={{backgroundImage :  `url(${Missing})` }}/>}>
                <img className={theme.img} alt={node.frontmatter.title} src={node.frontmatter.thumbnail}/>
                </LazyLoad>
                
                { node.frontmatter.featured &&
                  <Link 
                  to="/themes/featured/"
                  className={theme.icon}>
                    <img src={Stars} alt="Featured Theme icon"></img>
                  </Link>
                }
                <div className={theme.options}>
                  <div className={theme.optionsWrapper}>
                    <a 
                    className={theme.btn}
                    href={node.frontmatter.thumbnail}
                    target="blank"
                    >Full Thumbnail</a>
                    {node.frontmatter.demo &&
                    <a 
                    href={'http://betterdocs.netlify.com/demo/' + node.frontmatter.style + '.html?theme=' + node.frontmatter.demo}
                    className={theme.btn}
                    target="blank">Quick Demo</a>
                    }
                  </div>
                </div>
              </div>
              :
              <div className={theme.imgContainer}
              >
                <img className={theme.img} alt={node.frontmatter.title} src={Missing} style={{backgroundImage :  `url(${Missing})` }}/>
              </div>
              }
                <div>
                  <Link 
                  className={theme.author}
                  to={"/profile/" + node.frontmatter.author}
                  >{node.frontmatter.author} /</Link>
                </div>
                <div className={theme.title}
                >
                <Link 
                to={"themes" + node.fields.slug}
                className={theme.titleLink}>
                {node.frontmatter.title}
                </Link>
                </div>
                {node.frontmatter.tags ?
                <div>
                <div className={theme.description}
                >
                  <p className={theme.p}
                  >{node.excerpt}</p>
                </div>
                <div className={theme.tagContainer}>
                  {tags.group.map(tag => (
                    <Link to={`/themes/tags/${kebabCase(tag.fieldValue)}/`} key={tag.fieldValue} className={theme.tag}>
                      #{tag.fieldValue}
                    </Link>
                  ))}
                </div>
                </div>
                :
                <div className={theme.descriptionAlt}
                >
                  <p className={theme.p}
                  >{node.excerpt}</p>
                </div>
              }
            </div>
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
  },
  tags: allMarkdownRemark(filter: {collection: {eq: "themes"} } sort: { fields: [frontmatter___title], order: ASC} limit: 8 ) {
    group(field: frontmatter___tags) {
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