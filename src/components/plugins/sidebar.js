import React from 'react'
import style from 'src/styles/plugin-sidebar.module.scss'
import { StaticQuery, graphql, Link } from 'gatsby'
import Tags from 'src/components/plugins/sidebar-software'
import Headroom from 'react-headroom';

const Sidebar = () => (
  <StaticQuery
    query={ graphql`
    query pluginsSidebarQuery {
      listPlugins:allMarkdownRemark(filter: { collection: { eq: "plugins" } } sort: { fields: [frontmatter___title], order: ASC}) {
        group(field: collection) {
          fieldValue
          totalCount
        }
        ...pluginFragment
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
          placeholder='Search Plugins library (WIP)'
          >
          </input>
          <div className={style.searchOutput}>
            {data.listPlugins.totalCount + ' Plugins'}
          </div>
          <Tags />
        </div>
        <div className={style.Results}
        >
        {data.listPlugins.edges.map(({ node }, i) => (
          <Link 
          className={style.resultCard}
          activeClassName={style.active}
          to={'plugins' + node.fields.slug}
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
              <p className={style.p}
              >
                {node.excerpt}
              </p>
            </div>
            {node.frontmatter.status ?
              <div className={style.status} alt={node.frontmatter.status}>{node.frontmatter.status}</div>
            :
              <div className={style.status} alt="Unknown">Unknown</div>
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
