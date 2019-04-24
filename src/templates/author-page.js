import React from "react"
import PropTypes from "prop-types"
import Layout from '../components/layout'
//import style from '../styles/author-page.module.scss'
import { graphql, Link } from "gatsby"
import Helmet from 'react-helmet'
import styled from 'styled-components';
import * as variable from '../styles/variables'
import { darken } from 'polished'
import { createGlobalStyle } from 'styled-components'
import Contentcard from '../components/theme-plugin-cards'

const Updated = "#00b167";
const Deprecated = "#eb0505";
const Unknownn = "#00a2ff";

const Author = ({ pageContext, data }) => {
  const { authors } = pageContext
  //const { totalCount } = data.all
  //const tagHeader = `${totalCount} Asset${
  //  totalCount === 1 ? "" : "s"
  //} from "${authors}"`

  return (
    <Layout>
    <GlobalStyle />
        {data.authors.edges.map(({ node }) => (
            <Helmet
                key={node.id}
                title={ node.frontmatter.author_id + `'s Profile | Discord Source` }
                meta={[
                { name: 'keywords', content: 'Discord, BetterDiscord, EnhancedDiscord, TwitchCord, Discord Hacks, Hacks, Mods, Discord Themes, Themes, Discord Plugins, Plugins, Discord Bots, Bots, Discord Servers, Discord Style, Styles' },
                ]}>
                <meta property="og:site_name" content="Discord Source"/>
                <meta property="og:title" content={node.frontmatter.author_id + `'s Profile`}/>
                <meta property="og:description" content={"Find all of " + node.frontmatter.author_id + `'s themes and plugins here. Follow on Github and even join the Discord server!`}/>
                <meta property="description" content={"Find all of " + node.frontmatter.author_id + `'s themes and plugins here. Follow on Github and even join the Discord server!`}/>
                <meta property="og:url" content={"https://discordsource.com/profile/" + node.frontmatter.author_id} />
                <html lang="en" />
            </Helmet>
        ))}
    <Container>
      <Titlebar>
        {data.themes &&
          <Counter>Total <span>{data.all.totalCount}</span></Counter>
        }
        {data.themes &&
          <Counter>Theme{ data.themes.totalCount === 1 ? "" : "s"} <span>{data.themes.totalCount}</span></Counter>
        }
        {data.plugins &&
          <Counter>Plugin{ data.plugins.totalCount === 1 ? "" : "s"} <span>{data.plugins.totalCount}</span></Counter>
        }
      </Titlebar>
      <Flex>
    {data.authors ?
      <ProfileContainer>
      {data.authors.edges.map(({ node }) => (
        <ProfileColumn key={node.id}>
          <ProfileRow>
            <ProfileSection>
              <Details>
                {node.frontmatter.avatar_url &&
                    <ProfileWrapper>
                        <Avatar src={node.frontmatter.avatar_url} title={node.frontmatter.author_id + "'s Profile Avatar"} />
                    </ProfileWrapper>
                }
                {node.frontmatter.author_id &&
                    <Name>
                        {node.frontmatter.author_id}
                    </Name>
                }
                <Roles>
                  {node.frontmatter.theme_developer &&
                  <Role>Theme Developer</Role>
                  }
                  {node.frontmatter.plugin_developer &&
                  <Role>Plugin Developer</Role>
                  }
                </Roles>
              </Details>
            </ProfileSection>
            <ProfileSection>
              <LinksContainer>
                <Header>Links</Header> 
                <Links>
                  {node.frontmatter.github_profile_url &&
                    <Url href={node.frontmatter.github_profile_url} target="blank">
                      <svg id='Capa_1' xmlns='http://www.w3.org/2000/svg' width='438.549' height='438.549' viewBox='0 0 438.549 438.549'>
                      <path d='M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365 c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63 c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996 c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136 c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559 c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559 c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997 c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851 c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136 c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41 c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126 c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817 c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994 c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849 c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24 c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979 c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146 c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995 c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906 C438.536,184.851,428.728,148.168,409.132,114.573z'/>
                      </svg>
                      <p>Github</p>
                    </Url>
                  }
                  {node.frontmatter.gitlab_profile_url && 
                  <Url href={node.frontmatter.gitlab_profile_url} target="blank">
                    <svg id='logo_art' data-name='logo art' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 586 559'>
                        <defs />
                        <path className='cls-1' d='M461.48,298.35,443.7,243.72a7.72,7.72,0,0,0-.43-1.47L407.6,132.45a14.18,14.18,0,0,0-13.54-9.67,13.94,13.94,0,0,0-13.38,9.75l-34,104.63H239.37L205.32,132.53A13.94,13.94,0,0,0,192,122.78h-.08a14.22,14.22,0,0,0-13.5,9.76L142.72,242.47c0,.1-.08.18-.11.28l-18.1,55.61a20.29,20.29,0,0,0,7.37,22.71L288.26,434.7a8,8,0,0,0,9.45-.05l0,0L454.12,321.07A20.28,20.28,0,0,0,461.48,298.35ZM227.73,253.22l43.59,134.16L166.68,253.22Zm87,134.19,41.8-128.62,1.8-5.57h61.1L324.76,374.5Zm79.47-244.58,30.63,94.33H363.52ZM341.49,253.16l-30.37,93.46L293,402.28,244.58,253.16ZM191.85,142.83l30.69,94.33H161.27Zm-50.56,165.3a4.31,4.31,0,0,1-1.56-4.83L153.17,262l98.57,126.37Zm303.43,0L334.26,388.34l.37-.48L432.83,262l13.44,41.28A4.31,4.31,0,0,1,444.72,308.12Z' />
                    </svg>
                    <p>Gitlab</p>
                  </Url>
                  }
                  {node.frontmatter.npm_profile_url && 
                  <Url href={node.frontmatter.npm_profile_url} target="blank">
                    <svg id='logo_art' data-name='logo art' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 586 559'>
                        <defs />
                        <path className='cls-1' d='M461.48,298.35,443.7,243.72a7.72,7.72,0,0,0-.43-1.47L407.6,132.45a14.18,14.18,0,0,0-13.54-9.67,13.94,13.94,0,0,0-13.38,9.75l-34,104.63H239.37L205.32,132.53A13.94,13.94,0,0,0,192,122.78h-.08a14.22,14.22,0,0,0-13.5,9.76L142.72,242.47c0,.1-.08.18-.11.28l-18.1,55.61a20.29,20.29,0,0,0,7.37,22.71L288.26,434.7a8,8,0,0,0,9.45-.05l0,0L454.12,321.07A20.28,20.28,0,0,0,461.48,298.35ZM227.73,253.22l43.59,134.16L166.68,253.22Zm87,134.19,41.8-128.62,1.8-5.57h61.1L324.76,374.5Zm79.47-244.58,30.63,94.33H363.52ZM341.49,253.16l-30.37,93.46L293,402.28,244.58,253.16ZM191.85,142.83l30.69,94.33H161.27Zm-50.56,165.3a4.31,4.31,0,0,1-1.56-4.83L153.17,262l98.57,126.37Zm303.43,0L334.26,388.34l.37-.48L432.83,262l13.44,41.28A4.31,4.31,0,0,1,444.72,308.12Z' />
                    </svg>
                    <p>NPM</p>
                  </Url>
                  }
                  {node.frontmatter.discord_server &&
                  <Url href={node.frontmatter.discord_server} target="blank">
                    <svg id='Layer_1' xmlns='http://www.w3.org/2000/svg' height="30" viewBox="0 0 250 240" width="30">
                    <path className='st0' d='M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z'
                    />
                    <path className='st0' d='M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z'
                    />
                    </svg>
                    <p>Discord</p>
                  </Url>
                  }
                </Links> 
              </LinksContainer>
            </ProfileSection>
          </ProfileRow>
        </ProfileColumn>
      ))}
      </ProfileContainer>
      :
      <ProfileContainer>
        <ProfileColumn>
          <ProfileRow>
            <ProfileSection>
              <Details>
                {authors &&
                    <Name>
                        {authors}
                    </Name>
                }
                <Roles>
                  {data.themes &&
                  <Role>Theme Developer</Role>
                  }
                  {data.plugins &&
                  <Role>Plugin Developer</Role>
                  }
                </Roles>
              </Details>
            </ProfileSection>
            <ProfileSection>
              <LinksContainer>
                <Header>Links</Header> 
                <Links>
                </Links> 
              </LinksContainer>
            </ProfileSection>
          </ProfileRow>
        </ProfileColumn>
      </ProfileContainer>
    }

      <Showcase>
        <ShowcaseContainer>
        {data.authors.edges.map(({ node }) => (
            <>
                <Contentcard
                author={node.frontmatter.author_id}
                />
            </>
        ))}
          </ShowcaseContainer>
      </Showcase>
      </Flex>
    </Container>
    </Layout>
  )
}

Author.propTypes = {
    pageContext: PropTypes.shape({
    authors: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              github_profile_url: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Author

export const authorQuery = graphql`
  query($authors: String) {
    all:allMarkdownRemark( filter: { frontmatter: { author_id: { in: [$authors] } } } sort: { fields: [frontmatter___title], order: ASC}) {
      ...themeFragment
    },
    themes:allMarkdownRemark( filter: { collection: { eq: "themes" } frontmatter: { author: { in: [$authors] } } } sort: { fields: [frontmatter___title], order: ASC}) {
      ...themeFragment
    },
    plugins:allMarkdownRemark( filter: { collection: { eq: "plugins" } frontmatter: { author: { in: [$authors] } } } sort: { fields: [frontmatter___title], order: ASC}) {
      ...pluginFragment
    },
    authors:allMarkdownRemark( filter: { collection: { eq: "profiles" } frontmatter: { author_id: { in: [$authors] } } } limit: 1 ) {
      ...profileFragment
    },
  }
`
const Titlebar = styled.div`
`
const Counter = styled.div`
`
const ProfileContainer = styled.section`
`
const Flex = styled.div`
`
const ProfileColumn = styled.div`
`
const ProfileRow = styled.div`
`
const ProfileSection = styled.div`
`
const Details = styled.div`
`
const Name = styled.p`
`
const Showcase = styled.div`
`
const ShowcaseContainer = styled.div`
`
const Card = styled.div`
`
const Roles = styled.div`
`
const Role = styled.p`
`
const Follow = styled.div`
`
const LinksContainer = styled.div`
`
const Header = styled.div`
`
const Links = styled.div`
`
const Url = styled.a`
`
const ThemeCard = styled(Link)`
`
const Title = styled.div`
`
const Excerpt = styled.div`
`
const Unknown = styled.div`
`
const ImageContainer = styled.div`
`
const ProfileWrapper = styled.div`
`
const Avatar = styled.img`
`
const PluginCard = styled(Link)`
`
const Container = styled.div`
  display: block;
  height: 100%;
  background-color: #f4f4f4;
  @media ${variable.MidPoint} {
      display: flex;
      flex-direction: column;
  }
  ${Titlebar} {
      border-bottom: 1px solid #e5e5e5;
      background-color: rgba(255,255,255,0.6);
      display: flex;
      justify-content: center;
      padding: 0.62rem 0.82rem;
      ${Counter} {
          margin-left: 10px;
          font-weight: 500;
          color: #444;
          display: -webkit-inline-box;
          font-size: 0.67rem;
          span {
              background-color: #eeeeee;
              color: #5f6368;
              border-radius: 50%;
              min-width: 20px;
              min-height: 20px;
              line-height: 20px;
              text-align: center;
              font-size: 0.8em;
              margin-left: 6px;
              display: block;
          }
      }
  }
  ${Flex} {
      display: block;
      @media ${variable.MidPoint} {
          display: flex;
      }
      ${ProfileContainer} {
          display: flex;
          flex: 1;
          flex-direction: column;
          ${ProfileColumn} {
              display: block;
              flex-direction: row;
              justify-content: center;
              padding: 0px 1rem;
              @media ${variable.MidPoint} {
                  display: flex;
                  padding: unset;
              }
              ${ProfileRow} {
                  display: flex;
                  flex-direction: column;
                  margin: 2rem 0;
                  box-shadow: 0 1px 2px rgba(0,0,0,0.07);
                  ${ProfileSection} {
                      border-bottom: 1px solid #eee;
                      background: #fff;
                      padding: 20px 30px;
                      ${Details} {
                          display: flex;
                          flex-direction: column;
                          ${ProfileWrapper} {
                              width: 5rem;
                              height: 5rem;
                              border-radius: 3px;
                              margin: 0 auto;
                              margin-bottom: 0.5rem;
                              img {
                                  border-radius: 3px;
                                  height: 100%;
                                  height: 100%;
                              }
                          }
                          ${Name} {
                              margin: unset;
                              font-size: 0.8rem;
                              font-weight: bold;
                              letter-spacing: -.01em;
                              color: #444;
                              text-align: center;
                              margin-bottom: 0;
                          }
                          ${Roles} {
                              display: flex;
                              margin: 0.3rem auto;
                              margin-bottom: unset;
                              ${Role} {
                                  margin: unset;
                                  font-size: 0.45rem;
                                  margin-left: 0.2rem;
                                  background-color: #f4f4f4;
                                  border: 1px solid #e4e4e4;
                                  padding: 0.18rem 0.5rem;
                                  border-radius: 25px;
                                  text-align: center;
                                  &:only-child {
                                      margin-left: unset;
                                  }
                              }
                          }
                          ${Follow} {
                              display: -webkit-inline-box;
                              a {
                                  color: ${variable.SiteColor};
                                  background-color: #fff;
                                  padding: 0.17rem 0.7rem;
                                  font-size: 0.5em;
                                  text-align: center;
                                  margin: 0 auto;
                                  display: block;
                                  border-radius: 2px;
                                  border: 1px solid ${variable.SiteColor};
                                  transition: 250ms linear;
                                  &:hover, &:focus, &:active {
                                      outline: unset;
                                      background-color: ${variable.SiteColor};
                                      color: #fff;
                                  }
                              }
                          }
                          .tagsWrapper {
                              display: flex;
                              .themeDeveloper {
                                  background-color: #08aa81;
                                  padding: 5px 10px;
                                  color: #fff;
                                  border-radius: 2px;
                              }
                          }
                      }
                      ${LinksContainer} {
                          display: flex;
                          flex-direction: column;
                          ${Header} {
                              color: #747474;
                              font-weight: bold;
                              font-size: 0.7rem;
                          }
                          ${Links} {
                              display: flex;
                              flex-direction: column;
                              margin-top: 10px;
                              ${Url} {
                                  display: flex;
                                  margin: 5px 0;
                                  font-size: 0.57rem;
                                  svg {
                                      height: 1.4em;
                                      width: 1.4em;
                                      fill: #747474;
                                      margin-right: 5px;
                                  }
                                  p {
                                      color: #747474;
                                      margin: unset;
                                      display: block;
                                      align-self: center;
                                  }
                              }
                          }
                      }
                  }
              }
          }
      }
      ${Showcase} {
          display: flex;
          flex: 2;
          flex-direction: column;
          padding: 0px 1rem;
          @media ${variable.MidPoint} {
              padding: 20px 40px 0px 0px;
          }
          ${ShowcaseContainer} {
              padding: 20px 0px;
              display: flex;
              justify-content: space-between;
              flex-wrap: wrap;
              a:not(.icon):not(.anchor):not([class*="Btn"]):not(.imgContainer):not([class*="FeaturedIcon"]):not([class*="ImageContainer"]):not([class*="ThumbnailLink"]):not([class*="MissingContainer"]) {
                display: inline-block;
                transition: color 250ms, text-shadow 250ms;
                color: #000;
                text-decoration: none;
                cursor: pointer;
                position: relative;
                z-index: 0;
                line-height: 1rem;
                    &:after {
                    position: absolute;
                    z-index: -1;
                    bottom: -1px;
                    left: 50%;
                    transform: translateX(-50%);
                    content: '';
                    width: 100%;
                    height: 3px;
                    background-color: ${variable.SiteColor};
                    transition: all 250ms;
                    }
                    &:hover {
                    color: #fff !important;
                    opacity: 1;
                    background-color: transparent;
                        &::after {
                            height: 110% !important;
                            width: 110% !important;
                        }
                    }
                }
              ${Card} {
                  flex-basis: 12rem;
                  margin-bottom: 20px;
                  position: relative;
                  &[alt="theme"] {
                      flex-basis: 16rem;
                  }
                  &:hover {
                      ${ThemeCard} {
                          ${Title} {
                              p {
                                  color: #000;
                              }
                          }
                      }
                  }
                  ${ThemeCard} {
                      background-color: #fff;
                      padding: 10px;
                      border-radius: 2px;
                      display: block;
                      box-shadow: 0 1px 2px rgba(0,0,0,0.07);
                      transition: 300ms linear;
                      &:hover {
                          box-shadow: 0 10px 70px rgba(0, 0, 0, 0.08);
                          ${Excerpt} {
                              opacity: 1;
                          }
                      }
                      ${ImageContainer} {
                          transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
                          position: relative;
                          box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 10px;
                          img {
                              height: 6rem;
                              width: 100%;
                              margin: 0 auto;
                              display: -webkit-box;
                              border-radius: 2px;
                              background-size: cover;
                          }
                      }
                      ${Excerpt} {
                          position: absolute;
                          color: #777;
                          background-color: rgba(255,255,255, 0.95);
                          height: 100%;
                          opacity: 0;
                          transition: 250ms linear;
                          padding: 0.5rem;
                          word-break: keep-all;
                          font-size: 1rem;
                          top: 0;
                          width: 100%;
                          @media ${variable.MidPoint} {
                              font-size: 0.6rem;
                          }
                      }
                      ${Title} {
                          margin-top: 8px;
                          p {
                              margin: unset;
                              text-align: left;
                              font-size: 0.57rem;
                              color: rgba(0,0,0, 0.5);
                              transition: 300ms linear;
                          }
                      }
                      [class$="-themeStatus"] {
                          font-size: 0.4rem;
                          padding: 5px 5px;
                          color: #fff;
                          border-radius: 0px 0px 0px 3px;
                          position: absolute;
                          top: 0;
                          right: 0;
                          &[class^="Updated-"] {
                              background-color: #00b167;
                          }
                          &[class^="Deprecated-"] {
                              background-color: #eb0505;
                          }
                      }
                      ${Unknown} {
                          font-size: 0.4rem;
                          padding: 5px 5px;
                          color: #fff;
                          border-radius: 0px 0px 0px 3px;
                          position: absolute;
                          top: 0;
                          right: 0;
                          background-color: #00a2ff;
                      }
                  }
                  ${PluginCard} {
                      background-color: #fff;
                      border-radius: 2px;
                      display: flex;
                      flex-direction: column;
                      border-radius: 8px;
                      transition: 300ms linear;
                      box-shadow: 0 1px 2px rgba(0,0,0,0.07);
                      border: 1px solid transparent;
                      &:active, &:focus {
                          background-color: #d6d6d6;
                          outline: unset;
                          box-shadow: 0 10px 70px rgba(0, 0, 0, 0.08);
                          border-bottom-left-radius: 0px;
                      }
                      &:hover {
                          border-bottom-left-radius: 0px;
                          box-shadow: 0 10px 70px rgba(0, 0, 0, 0.08);
                          border-color: #eff2f6;
                      }
                      &[alt="Updated"] {
                        ${Title} {
                              background-color: ${darken(0.1,Updated)};
                          }
                      }
                      &[alt="Deprecated"] {
                        ${Title} {
                              background-color: ${darken(0.1,Deprecated)}; /*"#eb0505"*/
                          }
                      }
                      &[alt="Unknown"] {
                        ${Title} {
                              background-color: ${darken(0.1,Unknownn)}; /*"#00a2ff"*/
                          }
                      }
                      ${Title} {
                          background-color: #0a0a0a;
                          color: #fff;
                          padding: 0.4rem 0.8rem;
                          border-top-left-radius: 8px;
                          border-top-right-radius: 8px;
                          text-align: left;
                          font-size: 0.6rem;
                      }
                      ${Excerpt} {
                          padding: 0.5rem;
                          color: rgba(0, 0, 0, 0.6);
                          font-size: 0.6rem;
                      }
                      [class$="-pluginStatus"] {
                          font-size: 0.4rem;
                          padding: 5px 5px;
                          color: #fff;
                          border-radius: 0px 0px 0px 3px;
                          position: absolute;
                          top: 0;
                          right: 0;
                          &[class^="Updated-"] {
                              background-color: #00b167;
                          }
                          &[class^="Deprecated-"] {
                              background-color: #eb0505;
                          }
                      }
                      [class*="unknown-"] {
                          font-size: 0.4rem;
                          padding: 5px 5px;
                          color: #fff;
                          border-radius: 0px 0px 0px 3px;
                          position: absolute;
                          top: 0;
                          right: 0;
                          background-color: #00a2ff;
                      }
                      [class$="-pluginStatus"] {
                          top: 1px;
                          right: 1px;
                          border-radius: 0px 5px 0px 3px;
                      }
                  }
              }
          }
      }
  }
`

const GlobalStyle = createGlobalStyle`
  [mode="dark"] {
    ${Container} {
        background-color: #36393f;
        ${Titlebar} {
            border-bottom: 1px solid #111215;
            background-color: rgba(0, 0, 0, 0.6);
            ${Counter} {
                color: #c7c7c7;
            }
        }
        ${Flex} {
            ${ProfileContainer} {
                ${ProfileColumn} {
                    ${ProfileRow} {
                        ${ProfileSection} {
                            background-color: #222327;
                            border-color: #19191b;
                            ${Details} {
                                ${ProfileWrapper} {
                                }
                                ${Name} {
                                    color: #fff;
                                }
                                ${Roles} {
                                    ${Role} {
                                        background-color: #161719;
                                        border: 1px solid #36393f;
                                        color: #c7c7c7;
                                    }
                                }
                            }
                            ${LinksContainer} {
                                ${Header} {
                                    color: #fff;
                                }
                                ${Links} {
                                    a {
                                        p {
                                            color: #c7c7c7;
                                        }
                                        svg {
                                            fill: #fff;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
  }
`