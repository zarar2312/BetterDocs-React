import React from 'react'
import style from '../styles/plugins-software-bar.module.scss'
import { Link, StaticQuery, graphql } from 'gatsby'
import kebabCase from "lodash/kebabCase"

const pluginSoftware = ({ siteTitle }) => (
    <StaticQuery
    query={ graphql`
    query pluginSoftware {
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
            title={"List of plugins compatible with " + software.fieldValue}>   
                <p>{software.fieldValue}</p> <div>{software.totalCount}</div>
            </Link>
            ))}
        </div>
        )}
    />
)

export default pluginSoftware