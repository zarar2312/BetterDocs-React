import React from 'react'
import style from 'src/styles/tags.module.scss'
import { Link, StaticQuery, graphql } from 'gatsby'
import kebabCase from "lodash/kebabCase"

const sidebarSoftware = () => (
    <StaticQuery
    query={ graphql`
    query pluginSoftwareInfo {
        allMarkdownRemark(filter: {collection: {eq: "plugins"}}) {
        group(field: frontmatter___software) {
            fieldValue
            totalCount
        }
          edges {
            node {
              frontmatter {
                title
                software
              }
            }
          }
        }
      }      
  `}
    render={data => (
        <div className={style.tagsContainer}>
            <Link 
            className={style.tag}
            activeClassName={style.active}
            to="/plugins/"
            >All</Link>
            {data.allMarkdownRemark.group.map(software => (
                <Link 
                className={style.tag}
                activeClassName={style.active}
                to={`/plugins/softwares/${kebabCase(software.fieldValue)}/`}
                key={software.fieldValue}
                ><p>{software.fieldValue}</p> <div>{software.totalCount}</div>
                </Link>
            ))}
        </div>
        )}
    />
)

export default sidebarSoftware