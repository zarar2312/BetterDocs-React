import React from 'react'
import Layout from 'src/components/layout-mobile-footer'
import theme from 'src/styles/themes.module.scss'
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet";
import Missing from 'src/images/missing_image_2.png'
import Stars from 'src/images/stars.svg'
import kebabCase from "lodash/kebabCase"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const FeaturedThemes = (props) => {
  const tags = props.data.tags;
  const featuredList = props.data.featured;
  const { totalCount } = featuredList;
  const listCount = `${totalCount}`
  
  return (
  <Layout>
    <Helmet>
        <meta charSet="utf-8" />
        <title>BetterDocs | #1 Featured Discord Themes</title>
        <meta property="og:site_name" content="BetterDocs"/>
        <meta property="og:title" content="BetterDocs | #1 Discord Themes"/>
        <meta property="og:description" content="List of free high quality Discord themes by our community! Customize Discord to your own liking with transparent themes and modern themes!"/>
        <meta property="og:url" content="https://betterdocs.us/themes/" />
    </Helmet>
    <div className={theme.themesContainer}
    >
    <section className={theme.contentSection}
    >
    <div className={theme.titleBar}>
      <div className={theme.count}>Themes <span>{listCount} featured themes</span></div>
      <input className={theme.input} placeholder="Search Themes library (WIP)" ></input>
    </div>

      <div className={theme.mainContent}
        >
          <div className={theme.wrapper}
          >
          {featuredList.edges.map(({ node }, i) => (
            <div 
            className={theme.cardWrapper}
            key={node.id}
            >
              { node.frontmatter.thumbnail ?
              <div className={theme.imgContainer}
              >
                <img className={theme.img} alt={node.frontmatter.title} src={node.frontmatter.thumbnail} style={{backgroundImage :  `url(${node.frontmatter.thumbnail})` }}/>
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
    <AniLink 
    className={theme.backButton}
    to="/themes/"
    cover
    bg="#262626"
    >
      <svg xmlns='http://www.w3.org/2000/svg' id='Capa_1' viewBox='0 0 240.823 240.823' width='512' height='512'>
        <path id='Chevron_Right' d='M57.633,129.007L165.93,237.268c4.752,4.74,12.451,4.74,17.215,0c4.752-4.74,4.752-12.439,0-17.179 l-99.707-99.671l99.695-99.671c4.752-4.74,4.752-12.439,0-17.191c-4.752-4.74-12.463-4.74-17.215,0L57.621,111.816 C52.942,116.507,52.942,124.327,57.633,129.007z' fill='#FFF' />
      </svg>
    </AniLink>
  </Layout>
)
}

export default FeaturedThemes;

export const allFeaturedThemesQuery = graphql`
query allFeaturedThemesQuery {
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
          github
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
          demo
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