import React from "react"
import PropTypes from "prop-types"
import Layout from '../components/layout-mobile-footer'
import style from '../styles/themes-tags.module.scss'
import { graphql, Link } from "gatsby"
import '../styles/theme-tags.css'
import Headroom from 'react-headroom';
import '../styles/tooltips.css'
import Card from '../components/themes/tags-card'

// Pass image as css instead of a dom element (img) style={{backgroundImage :  `url(${node.frontmatter.thumbnail})` }}

const Tagss = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.list
  //const tags = data.tags;
  const tagHeader = `${totalCount} theme${
    totalCount === 1 ? "" : "s"
  } with the tag "${tag}"`

  return (
    <Layout>
    <div className={style.themesContainer}
    >
    <section className={style.contentSection}
    >
    <Headroom>
      <div className={style.titleBar}>
        <div className={style.count}>#Themes <span>{tagHeader}</span></div>
        <input className={style.input} placeholder="Search Themes library (WIP)" ></input>
        <a target="blank" href="https://www.youtube.com/watch?v=j_Uc0wZPJSY" data-balloon="Need help with theme installation?" data-balloon-pos="left" className={style.help}>?</a>
        <Link className={style.upload}
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

      <div className={style.mainContent}
        >
          <div className={style.wrapper}
          >
          {edges.map(({ node }) => {
          return (
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
    <div className={style.helpContainer}>
        <a data-balloon="Need help with theme installation?" data-balloon-pos="left"href="https://www.youtube.com/watch?v=j_Uc0wZPJSY" className={style.btn} target="blank">?</a>
    </div>
    </Layout>
  )
}

Tagss.propTypes = {
    pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    list: PropTypes.shape({
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
    list: allMarkdownRemark( filter: { frontmatter: { tags: { in: [$tag] } } collection: { eq: "themes" } } sort: { fields: [frontmatter___title], order: ASC} ) {
      ...themeFragment
    }
  }
`