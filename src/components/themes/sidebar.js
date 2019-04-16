import React from 'react'
import style from 'src/styles/theme-sidebar.module.scss'
import { StaticQuery, graphql, Link } from 'gatsby'
//import Stars from "../images/stars.svg"
import LazyLoad from "react-lazyload"
import Missing from "src/images/missing_image_2.png"
import Headroom from 'react-headroom'
import 'src/styles/theme-sidebar.css'

const Sidebar = () => (
  <StaticQuery
    query={ graphql`
    query themeSidebarQuery {
      listThemes:allMarkdownRemark(filter: { collection: { eq: "themes" } } sort: { fields: [frontmatter___title], order: ASC}) {
        group(field: collection) {
          fieldValue
          totalCount
        }
        ...themeFragment
      }
  }
  `}
    render={data => (
      <>
    <Headroom downTolerance={5}>
      <section className={style.sidebarSearch}
      >
        <div className={style.searchContainer}
        >
          <input 
          className={style.input}
          placeholder={'Search ' + data.listThemes.totalCount + ' Themes'}
          >
          </input>
          <div className={style.submitDescription}>
            Want your theme featured?
          </div>
          <Link 
          to="/theme/upload-a-theme/"
          className={style.submitBtn}
          >
          Submit a Theme
          </Link>
        </div>
        <div className={style.Results}
        >
        {data.listThemes.edges.map(({ node }, i) => (
          <Link 
          className={style.resultCard}
          activeClassName={style.active}
          to={'themes' + node.fields.slug}
          key={node.id}
          >
            <div className={style.header}
            >
              <span className={style.title}
              >
              {node.frontmatter.title}
              </span>
              <span className={style.author}
              >
              {node.frontmatter.author}
              </span>
            </div>
            <div className={style.description}
            >
            {node.frontmatter.featured ?
              <p className={style.pMargin}
              >
                {node.excerpt}
              </p>
              :
              <p className={style.p}
              >
                {node.excerpt}
              </p>
            }
            {node.frontmatter.thumbnail &&
            <div className={style.imgWrapper}>
              <LazyLoad once={true} height="100%" overflow={true}
              placeholder={<img src={Missing} alt="Missing"/>}>
              <img src={node.frontmatter.thumbnail} alt={node.frontmatter.title + " Preview"}/>
              </LazyLoad>
            </div>
            }
            </div>
            {node.frontmatter.featured &&
              <Link 
                to="/themes/featured/"
                className={style.featured}>
                Featured
              </Link>
            }
          </Link>
          ))}
        </div>
      </section>
    </Headroom>
      </>
    )}
  />
)

export default Sidebar
/* Featured Icon
{ node.frontmatter.featured &&
  <Link 
    to="/themes/featured/"
    className={style.icon}>
    <img src={Stars} alt="Featured Theme icon"></img>
  </Link>
}
*/