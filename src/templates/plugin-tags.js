import React from "react"
import PropTypes from "prop-types"
import Layout from '../components/layout-mobile-footer'
import plugin from '../styles/plugin-tags.module.scss'
import { graphql, Link } from "gatsby"
import SoftwareBar from '../components/plugins/software-bar'
import { Helmet } from "react-helmet";
import Card from '../components/plugins/card'

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
            <Card 
            title={node.frontmatter.title} 
            thumbnail={node.frontmatter.thumbnail}
            slug={node.fields.slug}
            status={node.frontmatter.status}
            tags={node.frontmatter.tags}
            author={node.frontmatter.author}
            excerpt={node.excerpt}
            softwares={node.frontmatter.software}
            key={node.id}/>
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
      ...pluginFragment
    }
  }
`