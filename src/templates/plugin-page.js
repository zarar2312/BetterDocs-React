import React from 'react'
import Layout from '../components/layout-mobile-footer'
import hero from '../styles/altHero.module.scss'
import style from '../styles/plugin-page.module.scss'
import { graphql, Link } from 'gatsby'
import Sidebar from '../components/plugin-sidebar'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import kebabCase from "lodash/kebabCase"
import Helmet from 'react-helmet'
import AdSense from 'react-adsense';
import ad from '../styles/ad.module.scss'
import alert from '../styles/alerts.module.scss'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import "../styles/plugin-page.css"

const Plugins = (props) => {
  const pluginList = props.data.listPlugins;
  const previewList = props.data.previewsList;
  const dependenciesList = props.data.dependencyList;

  return (
  <Layout>
    {pluginList.edges.map(({ node }, i) => (
    <Helmet
      key={node.id}
      title={ node.frontmatter.title + ' by ' + node.frontmatter.author + ' | BetterDocs' }
      meta={[
        { name: 'description', content: node.frontmatter.description },
        { name: 'keywords', content: 'Discord, BetterDiscord, EnhancedDiscord, TwitchCord, Discord Hacks, Hacks, Mods, Discord Themes, Themes, Discord Plugins, Plugins, Discord Bots, Bots, Discord Servers, Discord Style, Styles' },
      ]}>
      <meta property="og:site_name" content="BetterDocs"/>
      {node.frontmatter.author ?
      <meta property="og:title" content={node.frontmatter.title + ' by ' + node.frontmatter.author}/>
      :
      <meta property="og:title" content={node.frontmatter.title}/>
      }
      <meta property="og:description" content={node.frontmatter.description}/>
      {node.frontmatter.thumbnail ?
      <meta property="og:image" content={node.frontmatter.thumbnail}/>
      :
      null
      }
      <meta property="og:url" content={"https://betterdocs.us/plugins" + node.fields.slug} />
      <html lang="en" />
    </Helmet>
    ))}
    <div className={style.pluginsPageContainer}
    >
    {pluginList.edges.map(({ node }, i) => (
      <section className={style.contentWrapper}
      key={node.id}
      >
      {node.frontmatter.status === "Outdated" &&
        <a target="blank" href={`https://github.com/MrRobotjs/BetterDocs-React/edit/master/src/plugins/${kebabCase(node.fields.slug)}.md`} className={alert.alert} alt="Warning">
          <p><b>Warning:</b> This plugin is currently outdated. Only use for development purposes. If this is a mistake please make a PR by clicking me.</p>
        </a>
      }
      {node.frontmatter.status === null &&
        <a target="blank" href={`https://github.com/MrRobotjs/BetterDocs-React/edit/master/src/plugins/${kebabCase(node.fields.slug)}.md`} className={alert.alert} alt="Info">
          <p><b>Info:</b> The plugin "{node.frontmatter.title}" status is currently <b>Unknown</b>. Please be careful, this may or may not break your discord client. If this is a mistake please make a PR by clicking me.</p>
        </a>
      }
        <div className={hero.heroPlugins}
        alt={node.frontmatter.title}
        >
          <div className={hero.container}
          >
            {node.frontmatter.title && <h2 className={hero.h2}>{node.frontmatter.title}</h2>}
            {node.frontmatter.author &&
              <div className={hero.paragraph}
              >
                <p className={hero.p}>
                made by <Link to={"/profile/" + node.frontmatter.author} target="blank">
                {node.frontmatter.author}</Link>
                </p>
              </div>
            }
            <div className={hero.detailsContainer}>
              {node.frontmatter.github_source_url &&
              <div className={hero.gitContainer} >
                <a href={node.frontmatter.github_source_url} target="blank">
                  <svg id='Capa_1' xmlns='http://www.w3.org/2000/svg' width='438.549' height='438.549' viewBox='0 0 438.549 438.549'>
                    <path d='M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365 c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63 c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996 c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136 c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559 c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559 c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997 c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851 c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136 c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41 c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126 c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817 c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994 c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849 c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24 c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979 c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146 c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995 c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906 C438.536,184.851,428.728,148.168,409.132,114.573z'/>
                  </svg>
                  Source
                </a>
              </div>
              }
              {node.frontmatter.gitlab_source_url &&
              <div className={hero.gitlabContainer} >
                <a href={node.frontmatter.gitlab_source_url} target="blank">
                  <svg id='logo_art' data-name='logo art' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 586 559'>
                      <defs />
                      <path className='cls-1' d='M461.48,298.35,443.7,243.72a7.72,7.72,0,0,0-.43-1.47L407.6,132.45a14.18,14.18,0,0,0-13.54-9.67,13.94,13.94,0,0,0-13.38,9.75l-34,104.63H239.37L205.32,132.53A13.94,13.94,0,0,0,192,122.78h-.08a14.22,14.22,0,0,0-13.5,9.76L142.72,242.47c0,.1-.08.18-.11.28l-18.1,55.61a20.29,20.29,0,0,0,7.37,22.71L288.26,434.7a8,8,0,0,0,9.45-.05l0,0L454.12,321.07A20.28,20.28,0,0,0,461.48,298.35ZM227.73,253.22l43.59,134.16L166.68,253.22Zm87,134.19,41.8-128.62,1.8-5.57h61.1L324.76,374.5Zm79.47-244.58,30.63,94.33H363.52ZM341.49,253.16l-30.37,93.46L293,402.28,244.58,253.16ZM191.85,142.83l30.69,94.33H161.27Zm-50.56,165.3a4.31,4.31,0,0,1-1.56-4.83L153.17,262l98.57,126.37Zm303.43,0L334.26,388.34l.37-.48L432.83,262l13.44,41.28A4.31,4.31,0,0,1,444.72,308.12Z' />
                  </svg>
                  Source
                </a>
              </div>
              }
              {node.frontmatter.npm_source_url &&
              <div className={hero.npmContainer} >
                <a href={node.frontmatter.npm_source_url} target="blank">
                <svg xmlns='http://www.w3.org/2000/svg'>
                    <g>
                        <polygon id='svg_2' points='1,5 3,5 3,2 4,2 4,5 5,5 5,1 1,1' fill='#FFF'
                        />
                        <path id='svg_3' d='m6,1l0,5l2,0l0,-1l2,0l0,-4l-4,0zm3,3l-1,0l0,-2l1,0l0,2z'
                        fill='#FFF' />
                        <polygon id='svg_4' points='11,1 11,5 13,5 13,2 14,2 14,5 15,5 15,2 16,2 16,5 17,5 17,1'
                        fill='#FFF' />
                    </g>
                </svg>
                  Source
                </a>
              </div>
              }
              {node.frontmatter.discord_server &&
              <div className={hero.discordContainer} >
                <a href={node.frontmatter.discord_server} target="blank">
                <svg id='Layer_1' xmlns='http://www.w3.org/2000/svg' height="30" viewBox="0 0 250 240" width="30">
                    <path className='st0' d='M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z'
                    />
                    <path className='st0' d='M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z'
                    />
                </svg>
                Server</a>
              </div>
              }
              {node.frontmatter.tags &&
              <div className={hero.tagContainer}>
              {pluginList.group.map(tag => (
              <Link to={`/plugins/tags/${kebabCase(tag.fieldValue)}/`} key={tag.fieldValue} className={hero.tag}>
                {tag.fieldValue} <span>{tag.totalCount}</span>
              </Link>
              ))}
              </div>
              }
            </div>
            <div className={hero.softwareContainer}>
              {props.data.softwareList.group.map(software => (
                <Link to={`/plugins/softwares/${kebabCase(software.fieldValue)}/`} key={software.fieldValue} className={hero.software}>
                  {software.fieldValue}
                </Link>
              ))}
            </div>
            {node.frontmatter.author &&
              <div className={hero.statusContainer} alt={node.frontmatter.status}>
                {node.frontmatter.status ?
                  <div className={hero.status}>
                    <div className={node.frontmatter.status}>{node.frontmatter.status}</div>
                  </div>
                :
                <div className={hero.status}>
                  <div className={hero.unknown}>Unknown</div>
                </div>
                }
              </div>
            }
          </div>
          <div className={hero.options} key={node.id}>
          {node.frontmatter.download &&
            <div>
              {node.frontmatter.auto ?
                <a href={'https://minhaskamal.github.io/DownGit/#/home?url=' + node.frontmatter.download} className={hero.downloadBtn} target="blank">
                  {node.frontmatter.download && 
                    <span>Download</span>
                  }
                </a>
                :
                <a href={node.frontmatter.download} className={hero.downloadBtn} target="blank">
                  {node.frontmatter.download && 
                    <span>Download</span>
                  }
                </a>
              }
            </div>
            }
            {node.frontmatter.npm_i &&
              <div className={hero.npmBtn}>
                <span><svg id='Capa_1' xmlns='http://www.w3.org/2000/svg' width='451.846' height='451.847' viewBox='0 0 451.846 451.847'> <path d='M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744 L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284 c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z'/></svg> 
                npm i {node.frontmatter.npm_i}</span>
              </div>
            }
            {node.frontmatter.support && 
            <a href={node.frontmatter.support} className={hero.supportBtn} target="blank">Doesn't Work?</a>
            }
          </div>
        </div>
        {node.frontmatter.dependency &&
        <div className={style.dependency}>
        <div className={style.Lh2}><b>Required</b> Dependency(ies)</div>
          <div className={style.dependencyWrapper}>
            {dependenciesList.group.map(dependency => (
              <a className={style.dependencyBtn} href={dependency.fieldValue} target="blank" key={dependency.fieldValue}>
                <div className={style.dependencyContent}>Download</div>
              </a>
            ))}
          </div>
        </div>
        }
        <div className={ad.ad}>
          <AdSense.Google
              client='ca-pub-1998206533560539'
              slot='6545618600'
              style={{ display: 'block' }}
              format='auto'
              responsive='true'
            />
        </div>
        {previewList.edges.map(({ node }, i) => (
        <Tabs style={{order: "3"}} key={node.id}>
          <TabList style={{display: "flex", justifyContent: "center", borderBottom: "unset", marginBottom: "unset"}}>
            {node.frontmatter.previews ?
              <Tab style={{ transition: "all 250ms linear", marginBottom: "unset", marginTop: "calc(1.45rem / 2)", padding: ".35rem .75rem", textShadow: "0 1px rgba(255,255,255,0.5)", borderRadius: "100px", border: "unset", fontSize: ".575rem", fontWeight: "bold", color: "#5f6368"}}>Overview</Tab>
            :
              <Tab style={{ display: "none", transition: "all 250ms linear", marginBottom: "0.25rem", marginTop: "calc(1.45rem / 2)", padding: ".35rem .75rem", textShadow: "0 1px rgba(255,255,255,0.5)", borderRadius: "100px", border: "unset", fontSize: ".575rem", fontWeight: "bold", color: "#5f6368"}}>Overview</Tab>
            }            {node.frontmatter.previews &&
              <Tab style={{ transition: "all 250ms linear", marginBottom: "0.25rem", marginTop: "calc(1.45rem / 2)", padding: ".35rem .75rem", textShadow: "0 1px rgba(255,255,255,0.5)", borderRadius: "100px", border: "unset", fontSize: ".575rem", fontWeight: "bold", color: "#5f6368"}}>Screenshots</Tab>
            }
            </TabList>

        <TabPanel>
          <div className={style.content}
            >
              <div className={style.wrapper}
              >
              {node.frontmatter.thumbnail &&
              <a href={node.frontmatter.thumbnail} target="blank" className={style.imgContainer}>
                <img className={style.img} src={node.frontmatter.thumbnail} alt={node.frontmatter.title} />
              </a>
              }
                <div
                className={style.childWrapper}
                dangerouslySetInnerHTML={{ __html: node.html }}>
                </div>
                <div
                className={style.footer}
                >
                  {node.frontmatter.date && 
                  <div
                  className={style.date}
                  >
                  Last edit: {node.frontmatter.date}
                  </div>
                  }
                  <a
                  className={style.edit}
                  target="blank" 
                  href={`https://github.com/MrRobotjs/BetterDocs-React/edit/master/src/plugins/${kebabCase(node.fields.slug)}.md`}
                  >
                  <svg id='Capa_1' xmlns='http://www.w3.org/2000/svg' width='459' height='459' viewBox='0 0 459 459'>
                      <path d='M0,362.1V459h96.9l280.5-283.05l-96.9-96.9L0,362.1z M451.35,102c10.2-10.2,10.2-25.5,0-35.7L392.7,7.649 c-10.2-10.2-25.5-10.2-35.7,0l-45.9,45.9l96.9,96.9L451.35,102z' id='create' />
                  </svg> Edit this page
                  </a>
                </div>
              </div>
          </div>
        </TabPanel>
        {node.frontmatter.previews &&
          <TabPanel className="previewPanel" style={{margin: "0 auto"}}>
            <h2>Previews (wip)</h2>
            {previewList.group.map(image => (
              <img src={image.fieldValue} alt={image.fieldValue} key={node.id}/>
            ))}
          </TabPanel>
        }
        </Tabs>
        ))}
      </section>
      ))}
      <Sidebar />

    </div>
    <AniLink 
    className={style.backButton}
    to="/plugins/"
    cover
    bg="#0a0a0a"
    >
      <svg xmlns='http://www.w3.org/2000/svg' id='Capa_1' viewBox='0 0 240.823 240.823' width='512' height='512'>
        <path id='Chevron_Right' d='M57.633,129.007L165.93,237.268c4.752,4.74,12.451,4.74,17.215,0c4.752-4.74,4.752-12.439,0-17.179 l-99.707-99.671l99.695-99.671c4.752-4.74,4.752-12.439,0-17.191c-4.752-4.74-12.463-4.74-17.215,0L57.621,111.816 C52.942,116.507,52.942,124.327,57.633,129.007z' fill='#FFF' />
      </svg>
    </AniLink>
    {pluginList.edges.map(({ node }, i) => (
    <div className={style.mHeader} key={node.id}>
      <div className={style.p}>{node.frontmatter.title}</div>
    </div>
    ))}
  </Layout>
)
}

export default Plugins;

export const pluginsQuery = graphql`
  query pluginsQuery($slug: String!) {
    listPlugins:allMarkdownRemark(
      filter: {
        collection: { 
          eq: "plugins" 
        }
        fields: {
          slug: {
            eq: $slug
          }
        }
      }) {
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
                title
                description
                author
                github_profile_url
                github_source_url
                gitlab_profile_url
                gitlab_source_url
                npm_source_url
                npm_profile_url
                npm_i
                download
                thumbnail
                dependency
                discord_server
                support
                status
                auto
                software
                tags
                ghcommentid
                date(formatString: "DD/MM/YYYY")
                }
            fields {
                slug
              }
            }
        }
    },
    previewsList:allMarkdownRemark(
      filter: { 
        collection: { 
          eq: "plugins" 
        } 
        fields: {
          slug: {
            eq: $slug
          }
        }
      }
      ) {
      group(field: frontmatter___previews) {
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
            previews
            thumbnail
            title
            date
          }
          fields {
            slug
          }
        }
      }
    },
    softwareList:allMarkdownRemark(
      filter: {
        collection: { 
          eq: "plugins" 
        }
        fields: {
          slug: {
            eq: $slug
          }
        }
      }) {
      group(field: frontmatter___software) {
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
              software
            }
          }
        }
    },
    dependencyList:allMarkdownRemark(
      filter: {
        collection: { 
          eq: "plugins" 
        }
        fields: {
          slug: {
            eq: $slug
          }
        }
      }) {
      group(field: frontmatter___dependency) {
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
              dependency
            }
          }
        }
    }
  }
`