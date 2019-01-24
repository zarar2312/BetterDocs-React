import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const pluginPageInfo = () => (
  <StaticQuery
    query={ graphql`
    query pluginPageInfo {
        markdownRemark(frontmatter: { title: { eq: "Upload a Plugin"}}) {
              excerpt
              html
              id
              frontmatter {
                title
                author
                github_profile_url
                download
                support
                layout
              }
            }
          }
  `}
    render={data => (
      <>
        <div
            key={ data.markdownRemark.id }
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html}}
        />        
      </>
    )}
  />
)

export default pluginPageInfo
