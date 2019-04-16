const path = require('path')
const _ = require("lodash")
const { createFilePath } = require(`gatsby-source-filesystem`)
const { fmImagesToRelative } = require('gatsby-remark-relative-images');
let gatsbyNodeModules = require('fs').realpathSync('node_modules/gatsby')
gatsbyNodeModules = require('path').resolve(gatsbyNodeModules, '..')

exports.createPages = ({actions, graphql}) => {
const { createPage } = actions;
const pluginTemplate = path.resolve('src/templates/plugin-page.js');  
const pluginTagTemplate = path.resolve("src/templates/plugin-tags.js");
const pluginsSoftwareTemplate = path.resolve("src/templates/plugin-software.js");
const themeTagTemplate = path.resolve("src/templates/theme-tags.js");
const themeTemplate = path.resolve('src/templates/theme-page.js');
const authorTemplate = path.resolve('src/templates/author-page.js');

return graphql(`{
    plugins:allMarkdownRemark(filter: { collection: { eq: "plugins" } }) {
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
            fields {
              slug
            }
            frontmatter {
              author {
                frontmatter {
                  avatar_url
                  github_profile_url
                  discord_server
                  theme_developer
                  author_id
                }
              }
              tags
              software
              featured
              ghcommentid
            }
          }
        }
      },
      themes:allMarkdownRemark(filter: { collection: { eq: "themes" } }) {
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
            fields {
              slug
            }
            frontmatter {
              author {
                frontmatter {
                  avatar_url
                  github_profile_url
                  discord_server
                  theme_developer
                  author_id
                }
              }
              tags
              software
              featured
              ghcommentid
            }
          }
        }
      },
      allMarkdownRemark {
        edges {
          node {
            excerpt
            html
            id
            fields {
              slug
            }
            frontmatter {
              author {
                frontmatter {
                  avatar_url
                  github_profile_url
                  discord_server
                  theme_developer
                  author_id
                }
              }
              ghcommentid
            }
          }
        }
      }
    }`)
    .then(res => {
    if(res.errors) {
        return Promise.reject(res.errors);
    } 

    const themes = res.data.themes.edges
    const plugins = res.data.plugins.edges
    const all = res.data.allMarkdownRemark.edges

    // plugins/tags/software pages:
    let software = []
    // Iterate through each post, putting all found softwares into `tags`
    _.each(plugins, edge => {
      if (_.get(edge, "node.frontmatter.software")) {
        software = software.concat(edge.node.frontmatter.software)
      }
    })
    // Eliminate duplicate softwares
    software = _.uniq(software)

    // Make software tag pages
    software.forEach(softwares => {
      createPage({
        path: `/plugins/softwares/${_.kebabCase(softwares)}/`,
        component: pluginsSoftwareTemplate,
        context: {
          softwares,
        },
      })
    })

    //Next set
    // Theme Tag pages:
    let tags = []
    // Iterate through each post, putting all found tags into `tags`
    _.each(themes, edge => {
      if (_.get(edge, "node.frontmatter.tags")) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })
    // Eliminate duplicate tags
    tags = _.uniq(tags)

    // Make tag pages
    tags.forEach(tag => {
      createPage({
        path: `/themes/tag/${_.kebabCase(tag)}/`,
        component: themeTagTemplate,
        context: {
          tag,
        },
      })
    })

    //Next set
    // Plugin Tag pages:
    let plugintags = []
    // Iterate through each post, putting all found tags into `tags`
    _.each(plugins, edge => {
      if (_.get(edge, "node.frontmatter.tags")) {
        plugintags = plugintags.concat(edge.node.frontmatter.tags)
      }
    })
    // Eliminate duplicate tags
    plugintags = _.uniq(plugintags)

    // Make tag pages
    plugintags.forEach(tag => {
      createPage({
        path: `/plugins/tag/${tag.toString().toLowerCase()}/`,
        component: pluginTagTemplate,
        context: {
          tag,
        },
      })
    })

    //Next set
    // Author pages:
    let authors = []
    // Iterate through each post, putting all found tags into `tags`
    _.each(all, edge => {
      if (_.get(edge, "node.frontmatter.author.frontmatter.author_id")) {
        authors = authors.concat(edge.node.frontmatter.author.frontmatter.author_id)
      }
    })
    // Eliminate duplicate tags
    authors = _.uniq(authors)

    // Make profile pages
    authors.forEach(authors => {
      createPage({
        path: `/profile/${authors}/`,
        component: authorTemplate,
        context: {
          authors,
        },
      })
    })

    // Make profile pages
    authors.forEach(authors => {
      createPage({
        path: `/profile/${authors.toString().toLowerCase()}/`,
        component: authorTemplate,
        context: {
          authors,
        },
      })
    })

    res.data.plugins.edges.forEach(({ node }) => {
            createPage({
            path: '/plugin' + node.fields.slug,
            component: pluginTemplate,
            context: {
              slug: node.fields.slug,
              ghcommentid: node.frontmatter.ghcommentid,
            }, // additional data can be passed via context
            })
        })

    res.data.themes.edges.forEach(({ node }) => {
        createPage({
        path: '/theme' + node.fields.slug,
        component: themeTemplate,
        context: {
          slug: node.fields.slug,
          ghcommentid: node.frontmatter.ghcommentid,
          authorid: node.frontmatter.author.frontmatter.author_id,
        }, // additional data can be passed via context
        })
    })

    })
}
// Adds 'collection' to node
exports.onCreateNode =({ node, getNode, actions }) => {
    const { createNodeField, createNode } = actions;

    fmImagesToRelative(node);

    if (node.internal.type === `MarkdownRemark`) {
        node.collection = getNode(node.parent).sourceInstanceName;

        const slug = createFilePath({ node, getNode, basePath: `pages` })
        // Creates new query'able field with name of 'slug'
        createNodeField({
          node,
          name: "slug",
          value: slug,
        })
    }
}

exports.onCreateWebpackConfig = ({ stage, actions }) => {

  actions.setWebpackConfig({
    resolve: {
      modules: [gatsbyNodeModules, 'node_modules'],
    },
  })
  
}