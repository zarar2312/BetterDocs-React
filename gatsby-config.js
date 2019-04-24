const path = require('path');
const manifestConfig = require('./manifest-config');
const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://betterdocs-react.netlify.com',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Discord Source | #1 Discord Themes & Plugins`,
    siteUrl: `https://discordsource.com`,
    announcement: `Keep in mind if any client mod breaks then just reinstall to repair!`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-netlify-cache`,
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: "https://discordsource.com",
        sitemap: "https://discordsource.com/sitemap.xml",
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*' }]
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          }
        }
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#7289DA`, // Setting a color is optional.
        showSpinner: false, // Disable the loading spinner.
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        refetchInterval: 60,
        typeName: "GitHub",
        fieldName: "github",
        // Url to query from
        url: "https://api.github.com/graphql",
        // HTTP headers
        headers: {
          // Learn about environment variables: https://gatsby.dev/env-vars
          Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
        },
        // Additional options to pass to node-fetch
        fetchOptions: {},
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-65593962-3",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/demo/**", "/demo/", "/demo/*"],
        // Enables Google Optimize using your container Id
        //optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Any additional create only fields (optional)
      },
    },
    /*{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `media`,
        path: `${__dirname}/static/media`,
      },
    },*/
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `themes`,
        path: `${__dirname}/src/themes/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `plugins`,
        path: `${__dirname}/src/plugins/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `profiles`,
        path: `${__dirname}/src/profiles/`,
      },
    },/*
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `profiles`,
        path: `${__dirname}/src/profiles/`,
      },
    },*/
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
          },
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: `media` // Must match the source name ^
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {	
              maxWidth: 930,
              backgroundColor: 'transparent',
            },
          },
        ],
      },
    },
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
        //allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        //mergeSecurityHeaders: true, // boolean to turn off the default security headers
        //mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        //mergeCachingHeaders: true, // boolean to turn off the default caching headers
        //transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        //generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-image`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: manifestConfig,
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sourceMap: true,
        outFile: `./src/styles/main.css`,
        includePaths: [`src/styles`],
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here.
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: [`Roboto`],
          variants: [`100`,`200`,`300`,`400`,`500`,`600`,`700`,`800`]
        }
      }
    },
    `gatsby-plugin-offline`,
  ],
  mapping: {
    'MarkdownRemark.frontmatter.author': `MarkdownRemark.frontmatter.author_id`,
  },
}
