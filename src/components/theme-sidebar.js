import React from 'react'
import style from '../styles/theme-sidebar.module.scss'
import { StaticQuery, graphql, Link } from 'gatsby'
//import Stars from "../images/stars.svg"

const Sidebar = () => (
  <StaticQuery
    query={ graphql`
    query themeSidebarQuery {
      listThemes:allMarkdownRemark(filter: { collection: { eq: "themes" } } sort: { fields: [frontmatter___title], order: ASC}) {
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
              fields {
                slug
              }
              frontmatter {
                  title
                  author
                  github_profile_url
                  download
                  support
                  featured
                  layout
                  }
              }
          }
      }
  }
  `}
    render={data => (
      <>
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
          to="/themes/upload-a-theme/"
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