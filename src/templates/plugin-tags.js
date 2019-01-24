import React from "react"
import PropTypes from "prop-types"
import Layout from '../components/layout-mobile-footer'
import plugin from '../styles/plugin-tags.module.scss'
import { graphql, Link } from "gatsby"
import kebabCase from "lodash/kebabCase"
import SoftwareBar from '../components/plugins-software-bar'
import LazyLoad from "react-lazyload"
import Missing from "../images/missing_image_2.png"
import Mobile from "../images/mobile_missing.png"
import { Helmet } from "react-helmet";

const Tagss = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} plugin${
    totalCount === 1 ? "" : "s"
  } with the tag "${tag}"`

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>BetterDocs | #1 Discord Plugins</title>
        <meta property="og:site_name" content="BetterDocs"/>
          <meta property="og:title" content="BetterDocs | #1 Discord Plugins"/>
          <meta property="og:description" content="List of free high quality Discord plugins by the community! Modify your Discord to your own liking with advanced plugins!"/>
          <meta property="og:url" content="https://betterdocs.us/plugins/" />
      </Helmet>
      <div className={plugin.pluginsContainer}
      >
  
      <section className={plugin.contentWrapper}
      >
        <SoftwareBar/>
        <div className={plugin.hero}>
            <div className={plugin.heroTitle}>{tagHeader}</div>
            <div className={plugin.inputContainer}>
              <input placeholder="Search the marketplace" className={plugin.input} />
              <button className={plugin.btn}>Search</button>
            </div>
        </div>
        
        <div className={plugin.content}
          >
          <div className={plugin.cardsContainer}
          >
          {edges.map(({ node }) => (
            <div className={plugin.pluginCard} key={node.id} title={node.frontmatter.title}>
            {node.frontmatter.status ?
              <div className={plugin.topStatus} title={"Status of " + node.frontmatter.title + ": " + node.frontmatter.status}>{node.frontmatter.status}</div>
            :
              <div className={plugin.topStatus} title={"Status of " + node.frontmatter.title + ": Unknown"}>Unknown</div>
            }
              {node.frontmatter.thumbnail ?
                <Link to={"plugins/" + node.fields.slug}  className={plugin.imgContainer}>
                  <LazyLoad once={true} height="100%"
                  placeholder={<img className={plugin.img} alt={node.frontmatter.title} src={Mobile} style={{backgroundImage :  `url(${Missing})` }}/>}>
                    <img src={node.frontmatter.thumbnail} alt={node.frontmatter.title + "'s thumbnail"} title={node.frontmatter.title + "'s thumbnail"} />
                  </LazyLoad>
                </Link>
                :
                <Link to={"plugins/" + node.fields.slug} className={plugin.missingImgContainer}>
                  <img className={plugin.missingImg} src={Mobile} alt="Missing Plugin Thumbnail" title="Missing Plugin Thumbnail" />
                </Link>
                }
                <div className={plugin.titleContainer}>
                  <Link to={"plugins/" + node.fields.slug} className={plugin.title}>{node.frontmatter.title}</Link>
                </div>
                <div className={plugin.authorDetails}>
                  <Link title={"Made by " + node.frontmatter.author} to={"/profile/" + node.frontmatter.author} className={plugin.author}>{node.frontmatter.author + " /"}</Link>
                </div>
                <div className={plugin.description}>
                  <p className={plugin.p}>{node.excerpt}</p>
                </div>
                {node.frontmatter.tags &&
                  <div className={plugin.tagsContainer}>
                    {node.frontmatter.tags.map(tag => (
                      <Link to={`/plugins/tags/${kebabCase(tag)}/`} key={tag} className={plugin.tag}>
                        #{tag}
                      </Link>
                    ))}
                  </div>
                }
            </div>
          ))}
          </div>
        </div>
  
      </section>
  
      </div>
      <div className={plugin.uploadContainer}>
          <Link title="Want to publish your plugin?" to="/plugins/upload-a-plugin/" className={plugin.uploadBtn}>
          +
          </Link>
      </div>
      <div className={plugin.helpContainer}>
          <Link data-balloon="Want to publish your plugin?" data-balloon-pos="left" to="/plugins/upload-a-plugin" className={plugin.btn} target="blank">?</Link>
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
    allMarkdownRemark( filter: { frontmatter: { tags: { in: [$tag] } } collection: { eq: "plugins" } } sort: { fields: [frontmatter___title], order: ASC} ) {
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
            status
            support
            layout
            tags
          }
        }
      }
    }
  }
`