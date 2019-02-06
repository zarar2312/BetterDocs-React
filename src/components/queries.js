import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

class Features extends React.Component {

  componentDidMount () {

  }

  render () {
    return (
  <StaticQuery
    query={ graphql`
    fragment themeFragment on MarkdownRemarkConnection {
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
              description
              download
              github_profile_url
              github_source_url
              gitlab_profile_url
              gitlab_source_url
              npm_profile_url
              npm_source_url
              support
              discord_server
              demo
              thumbnail
              previews
              status
              auto
              featured
              style
              tags
              date
              ghcommentid
              layout
              sub
            }
          }
        }
      },
    fragment themeDateFormatFragment on MarkdownRemarkConnection {
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
              description
              download
              github_profile_url
              github_source_url
              gitlab_profile_url
              gitlab_source_url
              npm_profile_url
              npm_source_url
              support
              discord_server
              demo
              thumbnail
              previews
              status
              auto
              featured
              style
              tags
              date(formatString: "DD/MM/YYYY")
              ghcommentid
              layout
              sub
            }
          }
        }
      },
    fragment themeDateSingleFragment on MarkdownRemark {
        excerpt
        html
        id
        fields {
            slug
        }
        frontmatter {
            title
            author
            description
            download
            github_profile_url
            github_source_url
            gitlab_profile_url
            gitlab_source_url
            npm_profile_url
            npm_source_url
            support
            discord_server
            demo
            thumbnail
            previews
            status
            auto
            featured
            style
            tags
            date(formatString: "DD/MM/YYYY")
            ghcommentid
            layout
            sub
        }
      },
    fragment pluginFragment on MarkdownRemarkConnection {
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
                description
                download
                github_profile_url
                github_source_url
                gitlab_profile_url
                gitlab_source_url
                npm_profile_url
                npm_source_url
                support
                discord_server
                thumbnail
                previews
                dependency
                software
                status
                auto
                featured
                style
                tags
                date
                ghcommentid
                layout
            }
          }
        }
      },
    fragment pluginExcerptLimit on MarkdownRemarkConnection {
        totalCount
        edges {
          node {
            excerpt(pruneLength: 65)
            html
            id
            fields {
              slug
            }
            frontmatter {
                title
                author
                description
                download
                github_profile_url
                github_source_url
                gitlab_profile_url
                gitlab_source_url
                npm_profile_url
                npm_source_url
                support
                software
                discord_server
                thumbnail
                previews
                dependency
                status
                auto
                featured
                style
                tags
                date
                ghcommentid
                layout
            }
          }
        }
      }               
  `}
    render={data => (
        <section>
        
        </section>      
    )}
  />
)}}

export default Features
