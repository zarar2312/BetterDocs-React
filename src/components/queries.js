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
          collection
          fields {
            slug
          }
          frontmatter {
            title
            author {
              frontmatter {
                avatar_url
                github_profile_url
                discord_server
                theme_developer
                author_id
              }
            }
            description
            download
            github_profile_url
            github_source_url
            gitlab_profile_url
            gitlab_source_url
            npm_profile_url
            npm_source_url
            maintainer_name
            contributor_name
            github_issue_url
            discord_server
            demo
            thumbnail
            previews
            status
            auto
            featured
            snippet
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
            author {
              frontmatter {
                avatar_url
                github_profile_url
                discord_server
                theme_developer
                author_id
              }
            }
            description
            download
            github_profile_url
            github_source_url
            gitlab_profile_url
            gitlab_source_url
            npm_profile_url
            npm_source_url
            github_issue_url
            discord_server
            demo
            thumbnail
            previews
            status
            auto
            featured
            snippet
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
        author {
          frontmatter {
            avatar_url
            github_profile_url
            discord_server
            theme_developer
            author_id
          }
        }
        description
        download
        github_profile_url
        github_source_url
        gitlab_profile_url
        gitlab_source_url
        npm_profile_url
        npm_source_url
        github_issue_url
        discord_server
        demo
        thumbnail
        snippet
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
            author {
              frontmatter {
                avatar_url
                github_profile_url
                discord_server
                theme_developer
                author_id
              }
            }
            description
            download
            github_profile_url
            github_source_url
            gitlab_profile_url
            gitlab_source_url
            npm_profile_url
            npm_source_url
            npm_i
            maintainer_name
            contributor_name
            github_issue_url
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
            date(formatString: "DD/MM/YYYY")
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
            author {
              frontmatter {
                avatar_url
                github_profile_url
                discord_server
                theme_developer
                author_id
              }
            }
            description
            download
            github_profile_url
            github_source_url
            gitlab_profile_url
            gitlab_source_url
            npm_profile_url
            npm_source_url
            npm_i
            maintainer_name
            contributor_name
            github_issue_url
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
    },
    
    fragment profileFragment on MarkdownRemarkConnection {
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
            author_id
            bio
            avatar_url
            github_profile_url
            gitlab_profile_url
            npm_profile_url
            discord_server
            theme_developer
            plugin_developer
            profile
          }
        }
      }
    },
    
    fragment GithubBio on GitHub {
      viewer {
        name
        login
        bio
        updatedAt
        createdAt
        avatarUrl
        isHireable
        websiteUrl
        status {
          message
        }
      }
      rateLimit {
        limit
        cost
        resetAt
        remaining
      }
    },  
  `}
    render={data => (
        <section>
        
        </section>      
    )}
  />
)}}

export default Features
