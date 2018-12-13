import React from 'react'
import Layout from '../components/layout-mobile-footer'
import theme from '../styles/themes.module.scss'
import featured from '../styles/themes-featured.module.scss'
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet";
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Missing from "../images/missing_image_2.png"
import Star from "../images/star.svg"

const Themes = (props) => {
  const themeList = props.data.allMarkdownRemark;
  const featuredList = props.data.featured;
  const { totalCount } = props.data.allMarkdownRemark;
  const listCount = `${totalCount}`
  
  return (
  <Layout>
    <Helmet>
        <meta charSet="utf-8" />
        <title>BetterDocs | #1 Discord Themes</title>
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
            to="/themes/"
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
          to="/themes/upload_a_theme/">Submit your theme</Link>
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
            <img src={node.frontmatter.thumbnail} alt={node.frontmatter.title + " Preview by " + node.frontmatter.author}></img>
          </div>
        <div className={featured.title}>{node.frontmatter.title}</div>
        </Link>
        ))}
        <Link 
        className={featured.cardWrapper}
        to="/themes/">
          <div className={featured.imgWrapper}>
            <img src={Star} alt="View All Featured Themes"></img>
            <div className={featured.title}>View all featured themes</div>
          </div>
        </Link>
      </div>
    </section>
    
    <section className={theme.contentSection}
    >
    <div className={theme.titleBar}>
      <div className={theme.count}>Themes <span>({listCount})</span></div>
      <input className={theme.input} placeholder="Search Themes library" ></input>
    </div>

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
                <img className={theme.img} alt={node.frontmatter.title} src={node.frontmatter.thumbnail} style={{backgroundImage :  `url(${node.frontmatter.thumbnail})` }}/>
              </div>
              :
              <div className={theme.imgContainer}
              >
                <img className={theme.img} alt={node.frontmatter.title} src={Missing} style={{backgroundImage :  `url(${node.frontmatter.thumbnail})` }}/>
              </div>
              }
                <div>
                  <a 
                  className={theme.author}
                  href={node.frontmatter.github}
                  target="blank"
                  >{node.frontmatter.author} /</a>
                </div>
                <div className={theme.title}
                >
                <AniLink 
                to={"themes" + node.fields.slug}
                className={theme.titleLink}
                cover
                bg="#262626"
                duration={0.65}>
                {node.frontmatter.title}
                </AniLink>
                </div>
              <div className={theme.description}
              >
                <p className={theme.p}
                >{node.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>

    </div>
  </Layout>
)
}

export default Themes;

export const allThemesQuery = graphql`
query allThemesQuery {
  allMarkdownRemark(filter: {collection: {eq: "themes"}} sort: { fields: [frontmatter___title], order: ASC}) {
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
          github
          download
          support
          layout
          description
          date
          tags
        }
        fields {
          slug
        }
      }
    }
  }
  featured: allMarkdownRemark(filter: {collection: {eq: "themes"} frontmatter: { featured: { eq: true } } } ) {
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
          github
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