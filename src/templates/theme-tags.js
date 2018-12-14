import React from "react"
import PropTypes from "prop-types"
import Layout from '../components/layout-mobile-footer'
import style from '../styles/theme-tags.module.scss'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { graphql, Link } from "gatsby"
import Missing from "../images/missing_image_2.png"
import Stars from "../images/stars.svg"

const Tagss = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} theme${
    totalCount === 1 ? "" : "s"
  } with the tag "${tag}"`

  return (
    <Layout>
    <div className={style.themesContainer}
    >
    <section className={style.contentSection}
    >
    <div className={style.titleBar}>
      <div className={style.count}>Themes <span>{tagHeader}</span></div>
      <input className={style.input} placeholder="Search Themes library (WIP)" ></input>
    </div>

      <div className={style.mainContent}
        >
          <div className={style.wrapper}
          >
          {edges.map(({ node }) => {
          return (
            <div 
            className={style.cardWrapper}
            key={node.id}
            >
              { node.frontmatter.thumbnail ?
              <div className={style.imgContainer}
              >
                <img className={style.img} alt={node.frontmatter.title} src={node.frontmatter.thumbnail} style={{backgroundImage :  `url(${node.frontmatter.thumbnail})` }}/>
                { node.frontmatter.featured &&
                  <div className={style.icon}>
                    <img src={Stars} alt="Featured Theme icon"></img>
                  </div>
                }
              </div>
              :
              <div className={style.imgContainer}
              >
                <img className={style.img} alt={node.frontmatter.title} src={Missing} style={{backgroundImage :  `url(${node.frontmatter.thumbnail})` }}/>
              </div>
              }
                <div>
                  <a 
                  className={style.author}
                  href={node.frontmatter.github}
                  target="blank"
                  >{node.frontmatter.author} /</a>
                </div>
                <div className={style.title}
                >
                <AniLink 
                to={"themes" + node.fields.slug}
                className={style.titleLink}
                cover
                bg="#262626"
                duration={0.65}>
                {node.frontmatter.title}
                </AniLink>
                </div>
              <div className={style.description}
              >
                <p className={style.p}
                >{node.excerpt}</p>
              </div>
            </div>
          )
        })}
        </div>
      </div>

    </section>

    </div>
    <div className={style.uploadContainer}>
        <Link to="/themes/upload-a-theme/" className={style.uploadBtn}>
        +
        </Link>
    </div>
    </Layout>
  )
}

Tagss.propTypes = {
    pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tagss

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark( filter: { frontmatter: { tags: { in: [$tag] } } collection: { eq: "themes" } } sort: { fields: [frontmatter___title], order: ASC} ) {
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
            github
            download
            support
            thumbnail
            featured
            layout
            tags
          }
        }
      }
    }
  }
`