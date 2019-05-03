import React from 'react'
import Layout from '../components/layout-mobile-footer'
//import style from '../styles/theme-page.module.scss'
import { graphql, Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import kebabCase from "lodash/kebabCase"
import Helmet from 'react-helmet'
import AdSense from 'react-adsense';
//import alert from '../styles/alerts.module.scss'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import Hero from '../components/themes/hero'
import "../styles/tooltips.css"
import styled from 'styled-components';
import * as variable from '../styles/variables'
import { darken, rgba } from "polished"
import Alerts from '../components/themes/page-alert'
import { createGlobalStyle } from 'styled-components'
import ContributionArea from '../components/themes/page-contributors-area'
import InformationArea from '../components/themes/page-info-area'
import TagsArea from '../components/themes/page-tags-area'
import mydate from 'current-date'
import MoreCard from '../components/themes/more-card'
import Comments from '../components/reviews'

const Mydate = mydate('date');

/*
{node.frontmatter.profile_picture ?
  <div data-balloon={node.frontmatter.author + "'s Avatar"} data-balloon-pos="right" className={hero.profileWrapper}>
    <img src={node.frontmatter.profile_picture} alt={node.frontmatter.author + "'s Profile Picture"} />
  </div>
:
  <div data-balloon="Missing Avatar" data-balloon-pos="right" className={hero.profileWrapper} alt="missing">
    <img src={Missing} alt="Missing Profile Avatar"/>
  </div>
}
*/

const Themes = ({ pageContext, data }) => {
  const themeList = data.listThemes;
  const previewList = data.previewsList;
  const contributorList = data.contributorlist;
  const git = data.github;
  /*const { authorid } = pageContext*/

  return (
  <Layout>
    <GlobalStyle />
    {themeList.edges.map(({ node }, i) => (
    <Helmet
      key={node.id}
      title={ node.frontmatter.title + ' by ' + node.frontmatter.author_id + ' | Discord Source '}
      meta={[
        { name: 'description', content: node.frontmatter.description },
        { name: 'keywords', content: 'Discord, BetterDiscord, EnhancedDiscord, TwitchCord, Discord Hacks, Hacks, Mods, Discord Themes, Themes, Discord Plugins, Plugins, Discord Bots, Bots, Discord Servers, Discord Style, Styles' },
      ]}>
      <meta property="og:site_name" content="Discord Source"/>
      {node.frontmatter.author_id ?
      <meta property="og:title" content={node.frontmatter.title + ' by ' + node.frontmatter.author_id}/>
      :
      <meta property="og:title" content={node.frontmatter.title}/>
      }
      <meta property="og:description" content={node.frontmatter.description}/>
      {node.frontmatter.thumbnail ?
      <meta property="og:image" content={node.frontmatter.thumbnail}/>
      :
      null
      }
      <meta property="og:url" content={"https://discordsource.com/themes" + node.fields.slug} />
      <html lang="en" />
    </Helmet>
    ))}
    <Container>
    {themeList.edges.map(({ node }) => (
      <Wrapper key={node.id}>
        <Hero
        title={node.frontmatter.title}
        author={node.frontmatter.author_id}
        status={node.frontmatter.status}
        download={node.frontmatter.download}
        thumbnail={node.frontmatter.thumbnail}
        sub={node.frontmatter.sub}
        date={node.frontmatter.date}
        github_source_url={node.frontmatter.github_source_url}
        gitlab_source_url={node.frontmatter.gitlab_source_url}
        discord_server={node.frontmatter.discord_server}
        tags={themeList.group}
        auto={node.frontmatter.auto}
        demo={node.frontmatter.demo}
        github_issue_url={node.frontmatter.github_issue_url}
        style={node.frontmatter.style}
        />
        {previewList.edges.map(({ node }) => (
        <Tabbs style={{order: "3"}} key={node.id}>
          <TabListt>
            <Tabb>Overview</Tabb>
            {node.frontmatter.previews &&
              <Tabb>Screenshots</Tabb>
            }
            <Tabb>Reviews</Tabb>
          </TabListt>
          <TabPanell>
            <ContentContainer>
              <Alerts
              status={node.frontmatter.status}
              title={node.frontmatter.title}
              issue={node.frontmatter.github_issue_url}
              />
              <SubHeader>Does this still work? {node.frontmatter.author_id} </SubHeader>
              <ReportButtons>
                <WorkingBtn target="_blank" rel="noopener noreferrer" href={"https://github.com/MrRobotjs/BetterDocs-React/issues/new?title=" + node.frontmatter.title + " - Theme - [Status: Working]&labels=theme,working&body=This%20is%20ONLY%20to%20report%20that%20this%20theme%20(as%20of%20" + Mydate + ")%20IS%20working!" }>
                <svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M481,332c0-16.5-13.5-30-30-30c16.5,0,30-13.5,30-30s-13.5-30-30-30H328.001C346.3,187.099,346,169.6,346,136 c0-24.961-20.466-45-45-45h-9c-5.7,0-12.9,4.501-14.401,11.4C262.758,160.181,239.555,226.484,181,239.914v217.062l51.899,17.223 c15.3,5.099,31.201,7.8,47.401,7.8H421C437.569,482,451,468.567,451,452c0-16.569-13.431-30-30-30h30c16.5,0,30-13.5,30-30 s-13.5-30-30-30C467.5,362,481,348.5,481,332z"
                    />
                    <path d="M106,212H46c-8.291,0-15,6.709-15,15v270c0,8.291,6.709,15,15,15h60c24.814,0,45-20.186,45-45V257 C151,232.186,130.814,212,106,212z M106,452c-8.284,0-15-6.716-15-15c0-8.286,6.716-15,15-15s15,6.714,15,15 C121,445.284,114.284,452,106,452z"
                    />
                    <path d="M237.353,66.142l-21.211-21.211c-5.859-5.859-15.352-5.859-21.211,0c-5.859,5.859-5.859,15.352,0,21.211l21.211,21.211 c5.859,5.859,15.351,5.859,21.211,0C243.212,81.494,243.212,72.001,237.353,66.142z"
                    />
                    <path d="M407.069,44.931c-5.859-5.859-15.352-5.859-21.211,0l-21.211,21.211c-5.859,5.859-5.859,15.352,0,21.211 c5.859,5.859,15.352,5.859,21.211,0l21.211-21.211C412.928,60.283,412.928,50.79,407.069,44.931z"
                    />
                    <path d="M301,0c-8.401,0-15,6.599-15,15v31c0,8.401,6.599,15,15,15s15-6.599,15-15V15C316,6.599,309.401,0,301,0z"
                    />
                </svg>
                <AlertLink>It Works</AlertLink>
                </WorkingBtn>
                <DeprecatedBtn target="_blank" rel="noopener noreferrer" href={"https://github.com/MrRobotjs/BetterDocs-React/issues/new?title=" + node.frontmatter.title + " - Theme - [Status: Broken]&labels=theme,broken&body=This%20is%20ONLY%20to%20report%20that%20this%20theme%20(as%20of%20" + Mydate + ")%20IS%20NOT%20working!" }>
                <svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" width="456.824" height="456.824"
                viewBox="0 0 456.824 456.824">
                    <path d="M100.5,45.683H18.276c-4.949,0-9.231,1.809-12.851,5.426C1.809,54.724,0,59.007,0,63.954v182.729 c0,4.948,1.809,9.233,5.426,12.847c3.616,3.614,7.898,5.425,12.851,5.425H100.5c4.948,0,9.229-1.811,12.847-5.425 c3.616-3.613,5.424-7.898,5.424-12.847V63.954c0-4.947-1.809-9.229-5.424-12.845C109.73,47.491,105.449,45.683,100.5,45.683z M67.665,113.351c-3.616,3.617-7.898,5.424-12.847,5.424c-5.14,0-9.471-1.807-12.99-5.424c-3.521-3.617-5.281-7.898-5.281-12.85 c0-5.137,1.759-9.469,5.281-12.991c3.52-3.521,7.85-5.28,12.99-5.28c4.949,0,9.231,1.759,12.847,5.28 c3.621,3.521,5.426,7.854,5.426,12.991C73.091,105.449,71.282,109.73,67.665,113.351z"
                    />
                    <path d="M441.106,204.141c2.861-8.376,4.281-15.608,4.261-21.693c0.575-14.466-3.519-27.504-12.279-39.114 c3.237-10.66,3.237-21.797,0-33.407c-2.847-10.85-7.994-19.792-15.413-26.835c1.711-21.32-2.95-38.543-13.99-51.678 c-12.183-14.465-30.929-21.892-56.246-22.27h-10.28h-21.696h-4.853c-12.56,0-26.269,1.475-41.114,4.425 c-14.838,2.952-26.405,5.713-34.68,8.282c-8.28,2.568-19.75,6.328-34.403,11.276c-23.413,8.183-38.45,12.371-45.111,12.56 c-4.949,0.193-9.231,2.046-12.847,5.569c-3.617,3.518-5.426,7.755-5.426,12.703V246.97c0,4.757,1.718,8.898,5.142,12.416 c3.424,3.524,7.517,5.476,12.275,5.858c4.565,0.384,11.799,5.996,21.698,16.844c9.9,10.849,19.511,22.368,28.836,34.551 c12.944,16.553,22.558,27.973,28.837,34.256c3.424,3.422,6.37,7.99,8.848,13.702c2.472,5.708,4.142,10.324,5.004,13.846 c0.855,3.519,2.135,9.274,3.856,17.275c1.328,7.419,2.519,13.227,3.569,17.412c1.047,4.188,2.898,9.137,5.564,14.845 c2.67,5.716,5.903,10.469,9.712,14.274c3.614,3.62,7.898,5.431,12.847,5.431c8.761,0,16.604-0.999,23.559-2.998 c6.947-1.998,12.655-4.469,17.131-7.419c4.477-2.957,8.282-6.803,11.424-11.566c3.142-4.757,5.424-9.042,6.851-12.848 c1.431-3.812,2.574-8.562,3.426-14.27c0.855-5.716,1.338-10,1.431-12.854c0.093-2.854,0.144-6.563,0.144-11.136 c0-7.228-0.948-14.51-2.851-21.84c-1.909-7.323-3.72-12.895-5.428-16.707c-1.711-3.806-4.281-9.227-7.706-16.269 c-0.575-1.144-1.523-2.861-2.854-5.144c-1.328-2.283-2.382-4.381-3.142-6.283c-0.763-1.902-1.522-4.186-2.279-6.852h79.086 c14.843,0,27.645-5.428,38.397-16.279c10.756-10.848,16.228-23.694,16.419-38.54C456.811,229.931,451.575,215.75,441.106,204.141z"
                    />
                </svg>
                  <AlertLink>It's Broken</AlertLink>
                </DeprecatedBtn>
              </ReportButtons>
              <Area>
                <CardHeader>Description</CardHeader>
                <AreaDescriptionCard
                dangerouslySetInnerHTML={{ __html: node.html }}>
                </AreaDescriptionCard>
              </Area>
              <AreaFlex>
                <ContributionArea
                author={node.frontmatter.author.frontmatter.author_id}
                maintainer={node.frontmatter.maintainer_name}
                contributor={contributorList.group}
                title={node.frontmatter.title}
                areaHeader="Contributors"
                slug={node.fields.slug}
                />
                <InformationArea
                status={node.frontmatter.status}
                date={node.frontmatter.date}
                github={node.frontmatter.github_source_url}
                gitlab={node.frontmatter.gitlab_source_url}
                npm={node.frontmatter.npm_source_url}
                areaHeader="Information"
                />
              </AreaFlex>
              {node.frontmatter.tags &&
                <TagsArea
                tagsGrouped={themeList.group}
                areaHeader="Tags"
                />
              }
              {variable.Ads === true &&
                <Ad>
                  <AdSense.Google
                      client='ca-pub-1998206533560539'
                      slot='6545618600'
                      style={{ display: 'block' }}
                      format='auto'
                      responsive='true'
                    />
                </Ad>
              }
              <Options>
                {node.frontmatter.download &&
                  <>
                    {node.frontmatter.auto ?
                    <Download href={'https://minhaskamal.github.io/DownGit/#/home?url=' + node.frontmatter.download} target="blank">
                      Download
                    </Download>
                    :
                    <Download href={node.frontmatter.download} target="blank">
                      Download
                    </Download>
                    }
                  </>
                }
                {node.frontmatter.demo && 
                  <DemoBtn href={'https://discordsource.com/preview/' + node.frontmatter.style + '.html?theme=' + node.frontmatter.demo + "?no-cache=1"} target="blank" title="Demo Temporarily Disabled">Demo</DemoBtn>
                }
                {node.frontmatter.github_issue_url &&
                <Report href={node.frontmatter.github_issue_url + "/new?title=" + node.frontmatter.title + " - Discord Source - [Issue Report]&labels=report"} rel="noopener noreferrer" target="_blank">
                  Report an issue
                </Report>
                }
              </Options>
            </ContentContainer>
          </TabPanell>
          {node.frontmatter.previews &&
          <TabPanell style={{margin: "0 auto"}}>
          <ContentContainer>
            <CardHeader>Screenshots</CardHeader>
            <ScreenshotContainer>
              {previewList.group.map(image => (
                <ScreenshotWrapper key={image.fieldValue}>
                  <ImageContainer>
                    <img src={image.fieldValue} alt={node.frontmatter.title + " made by " + node.frontmatter.author.frontmatter.author_id}/>
                    <ImageOptions>
                      <OptionsWrapper>
                        <Linkka
                        href={image.fieldValue}
                        target="blank"
                        >Image Source</Linkka>
                      </OptionsWrapper>
                    </ImageOptions>
                  </ImageContainer>
                </ScreenshotWrapper>
              ))}
            </ScreenshotContainer>
            </ContentContainer>
          </TabPanell>
          }
          <TabPanell>
            <ContentContainer>
              <CommentsArea>
              <Top>
                <CommentsHeader>Reviews</CommentsHeader>
                  {themeList.edges.map(({ node }, i) => (
                    <PostBtn href={ "https://github.com/MrRobotjs/BetterDocs-React/issues/" + node.frontmatter.ghcommentid} target="blank">Post a review</PostBtn>
                  ))}
                </Top>
              <CommentsContainer>
                {themeList.edges.map(({ node }, i) => (
                  <ReviewText>Reviews for the theme <b>{node.frontmatter.title}</b></ReviewText>
                ))}
                {git.repository.issue.comments.edges.map(({ node }) => (
                  <Comments
                  username={node.author.login}
                  body={node.body}
                  key={node.id}
                  avatar={node.author.avatarUrl}
                  userUrl={node.author.url}
                  reactions={node.reactionGroups}
                  lastEditDate={node.lastEditedAt}
                  createdAt={node.createdAt}
                  commentLink={node.url}
                  />
                ))}
              </CommentsContainer>
            </CommentsArea>
          </ContentContainer>
        </TabPanell>
        </Tabbs>
        ))}
        <MoreHeader><Link to={"profile/" + node.frontmatter.author.frontmatter.author_id}>{node.frontmatter.author.frontmatter.author_id}'s</Link> Themes</MoreHeader>
          <MoreArea>
            <MoreCard
            author={node.frontmatter.author.frontmatter.author_id}
            />
          </MoreArea>
      </Wrapper>
      ))}

    </Container>
    <MobileBackBtn
    to="/themes/"
    cover
    bg="#0a0a0a">
      <svg xmlns='http://www.w3.org/2000/svg' id='Capa_1' viewBox='0 0 240.823 240.823' width='512' height='512'>
        <path id='Chevron_Right' d='M57.633,129.007L165.93,237.268c4.752,4.74,12.451,4.74,17.215,0c4.752-4.74,4.752-12.439,0-17.179 l-99.707-99.671l99.695-99.671c4.752-4.74,4.752-12.439,0-17.191c-4.752-4.74-12.463-4.74-17.215,0L57.621,111.816 C52.942,116.507,52.942,124.327,57.633,129.007z' fill='#FFF' />
      </svg>
    </MobileBackBtn>
    {themeList.edges.map(({ node }, i) => (
    <EditBtn key={node.id}>
        <a data-balloon="Edit this page" data-balloon-pos="left" href={`https://github.com/MrRobotjs/BetterDocs-React/edit/master/src/themes/${kebabCase(node.fields.slug)}.md`} target="blank">
          <svg id='Capa_1' xmlns='http://www.w3.org/2000/svg' width='459' height='459' viewBox='0 0 459 459'>
              <path d='M0,362.1V459h96.9l280.5-283.05l-96.9-96.9L0,362.1z M451.35,102c10.2-10.2,10.2-25.5,0-35.7L392.7,7.649 c-10.2-10.2-25.5-10.2-35.7,0l-45.9,45.9l96.9,96.9L451.35,102z' id='create' />
          </svg>
        </a>
    </EditBtn>
    ))}
    {themeList.edges.map(({ node }, i) => (
    <MobileHeader key={node.id}>
      <Text>{node.frontmatter.title}</Text>
    </MobileHeader>
    ))}
  </Layout>
)
}
//<Sidebar />

export default Themes;

export const themesQuery = graphql`
  query themesQuery(
    $slug: String!
    $ghcommentid: Int!
    ) {
    listThemes:allMarkdownRemark(
      filter: { 
        collection: { 
          eq: "themes" 
        } 
        fields: {
          slug: {
            eq: $slug
          }
        }
      }
      ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
      ...themeDateFormatFragment
    },
    contributorlist:allMarkdownRemark(
      filter: { 
        collection: { 
          eq: "themes" 
        } 
        fields: {
          slug: {
            eq: $slug
          }
        }
      }
      ) {
      group(field: frontmatter___contributor_name) {
        fieldValue
        totalCount
      }
      ...themeFragment
    },
    previewsList:allMarkdownRemark(
      filter: { 
        collection: { 
          eq: "themes" 
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
      ...themeFragment
    },
    currentThemes:markdownRemark(collection: { eq: "themes" }) {
    ...themeDateSingleFragment
  },
  github: github {
    repository(owner: "MrRobotjs", name: "BetterDocs-React") {
      id
      createdAt
      description
      issue(number: $ghcommentid) {
        title
        author {
          login
          url
          avatarUrl
        }
        comments(first:20) {
          edges {
            node {
              author {
                login
                url
                avatarUrl
              }
              url
              lastEditedAt
              createdAt
              body
              reactionGroups {
                content
                users {
                  totalCount
                }
            	}
            }
          }
        }
      }
    },
  }
}
`
const Wrapper = styled.section`
`
const Tabbs = styled(Tabs)`
`
const TabListt = styled(TabList)`
`
const Tabb = styled(Tab)`
`
const TabPanell = styled(TabPanel)`
`
const ContentContainer = styled.div`
`
const Options = styled.div`
`
const Download = styled.a`
`
const ReviewText = styled.p`
`
const Report = styled.a`
`
const PostBtn = styled.a`
`
const DemoBtn = styled.div`
`
const ScreenshotContainer = styled.div`
`
const ScreenshotWrapper = styled.div`
`
const ImageContainer = styled.div`
`
const OptionsWrapper = styled.div`
`
const ImageOptions = styled.div`
`
const Text = styled.div`
`
const Ad = styled.div`
`
const AreaDescriptionCard = styled.div`
`
const CardHeader = styled.h1`
`
const SubHeader = styled.h1`
`
const Area = styled.div`
`
const AreaFlex = styled.div`
`
const ReportButtons = styled.div`
`
const WorkingBtn = styled.a`
`
const AlertLink = styled.div`
`
const DeprecatedBtn = styled.a`
`
const MoreHeader = styled.h2`
`
const Linkka = styled.a`
`
const CommentsArea = styled.div`
`
const CommentsContainer = styled.div`
`
const MoreArea = styled.div`
`
const CommentsHeader = styled.h1`
`
const Top = styled.div`
`
const MobileBackBtn= styled(AniLink)`
  position: fixed;
  top: 22px;
  left: 17px;
  z-index: 101;
  display: block;
  @media ${variable.MidPoint} {
      display: none;
  }
  svg {
      height: 20px;
      width: 20px;
  }
`
const EditBtn = styled.div`
  position: fixed;
  right: 1rem;
  bottom: 2.5rem;
  z-index: 150;
  @media ${variable.MidPoint} {
      right: 1.5rem;
      bottom: 1rem;
  }
  a {
      display: block;
      width: 2.5rem;
      height: 2.5rem;
      background-color: ${variable.SiteColor};
      color: #fff;
      text-align: center;
      line-height: 2.5rem;
      border-radius: 50%;
      transition: all linear 250ms;
      box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.5), inset 0px 2px 3px -2px #ffffff;
      font-size: 1.3rem;
      &:hover {
          box-shadow: 0px 5px 9px 1px rgba(0, 0, 0, 0.4), inset 0px 2px 3px -2px #ffffff;
          background-color: ${darken(0.1,variable.SiteColor)};
      }
      svg {
          height: 17px;
          width: 17px;
          fill: #fff;
          margin: 0 auto;
          top: -3px;
          position: relative;
      }
  }
`
const MobileHeader = styled.div`
  position: fixed;
  top: 0px;
  z-index: 100;
  display: block;
  color: #fff;
  background-color: #0a0a0a;
  width: 100%;
  padding: 1rem 0;
  text-align: center;
  box-shadow: -4px 0px 8px 0px black;
  div {
      width: calc(100% - 4rem);
      display: block;
      margin: 0 auto;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 0.7rem;
  }
  @media ${variable.MidPoint} {
      display: none;
  }
`

const Container = styled.div`
  display: block;
  flex-direction: column;
  background-color: #f1f1f1;
  @media ${variable.MidPoint} {
      display: flex;
      flex-direction: row;
  }
  ${Wrapper} {
    order: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding-left: unset;
    @media ${variable.MidPoint} {
        flex: 4;
        padding-left: 14.8rem;
        padding-left: unset;

    }
    ${CommentsHeader} {
      font-size: 1.55rem;
      word-break: keep-all;
      margin-bottom: 0;
      background-color: transparent;
      a:not([class*="anchor"]) {
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
          bottom: -9px;
          left: 50%;
          transform: translateX(-50%);
          content: '';
          width: 100%;
          height: 3px;
          background-color: ${variable.SiteColor};
          transition: all 250ms;
        }
        &:hover {
          color: #fff;
          opacity: 1;
          background-color: transparent;
        &::after {
            height: 160%;
            width: 110%;
          }
        }
      }
    }
    ${MoreHeader} {
      order: 5;
      font-size: 1.55rem;
      word-break: keep-all;
      margin-bottom: 0;
      background-color: #e6e6e6;
      padding: 0.7rem 2rem;
      padding-bottom: 1.2rem;
      a:not([class*="anchor"]) {
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
          bottom: -9px;
          left: 50%;
          transform: translateX(-50%);
          content: '';
          width: 100%;
          height: 3px;
          background-color: ${variable.SiteColor};
          transition: all 250ms;
        }
        &:hover {
          color: #fff;
          opacity: 1;
          background-color: transparent;
        &::after {
            height: 160%;
            width: 110%;
          }
        }
      }
    }
    ${MoreArea} {
      order: 6;
      /*display: flex;*/
      padding: 2rem;
      margin-bottom: 2.1rem;
      padding-top: 0;
      padding-bottom: 1rem;
      background-color: #e6e6e6;
      word-break: break-all;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-around;
      overflow-x: auto;
      display: -webkit-box;
      -webkit-overflow-scrolling: touch;
      &::-webkit-scrollbar-button { 
          display: none; 
          height: 10px; 
          border-radius: 0px; 
      } 
      &::-webkit-scrollbar-thumb { 
          background-color: ${rgba(variable.SiteColor, 0.3)};
          transition: background-color .2s ease-in-out;
      } 
      &::-webkit-scrollbar-thumb:hover { 
          background-color: ${variable.SiteColor}; 
      } 
      &::-webkit-scrollbar-track { 
          background-color: ${rgba(variable.SiteColor, 0.06)};
      }
      &::-webkit-scrollbar { 
          width: 8px;
          height: 10px;
      }
      a:not(.icon):not(.anchor):not([class*="Btn"]):not(.imgContainer):not([class*="FeaturedIcon"]):not([class*="ImageContainer"]):not([class*="ThumbnailLink"]) {
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
      @media ${variable.MidPoint} {
        margin-bottom: unset;
        padding-bottom: 0.2rem;
      }
    }
    ${Tabbs} {
      order: 3;
      ${TabListt} {
        display: flex;
        justify-content: center;
        border-bottom: unset;
        margin-bottom: unset;
        margin-left: unset;
        ${Tabb} {
          transform: all 250ms linear;
          margin: calc(1.45rem / 2) 0;
          padding: .35rem .75rem;
          text-shadow: 0 1px rgba(255,255,255,0.5);
          border-radius: 100px;
          border: 1px solid transparent;
          font-size: .575rem;
          font-weight: bold;
          color: #5f6368;
          list-style: none;
          cursor: pointer;
          text-shadow: unset;
          &:nth-child(2) {
            margin-left: 10px;
          }
          &:only-child {
            display: none;
          }
          &:hover {
              color: ${variable.SiteColor};
          }
          &:focus {
              outline: unset;
              border: 1px solid ${darken(0.1,variable.SiteColor)};
              box-shadow: unset;
          }
          &:focus::after {
              display: none;
          }
          &[class*="selected"] {
            color: ${variable.SiteColor};
            box-shadow: unset;
            text-shadow: unset;
            background-color: #fff;
            box-shadow: 0 1px 3px 1px rgba(60,64,67,0.15), 0 1px 2px 0 rgba(60,64,67,0.3);
          }
        }
      }
      ${TabPanell} {
        /*width: calc(100% - 75px);*/
        margin: 0 auto;
        @media ${variable.MidPoint} {
          /*width: calc(100% - 300px);*/
        }
        ${CommentsArea} {
          order: 4;
          ${Top} {
            display: flex;
            flex-wrap: wrap;
            ${PostBtn} {
              align-self: center;
              background-color: ${variable.SiteColor};
              padding: 0.4rem 0.7rem;
              font-size: 0.8rem;
              color: #fff;
              transition: 210ms all linear;
              border-radius: 5px;
              &:hover {
                box-shadow: 0px 3px 10px 0px rgba(0,0,0,.2);
                background-color: ${darken(0.14,variable.SiteColor)};
              }
              &:active, &:focus {
                background-color: ${darken(0.2,variable.SiteColor)};
              }
            }
            ${CommentsHeader} {
              margin-right: 0.8rem;
            }
          }
          ${MoreHeader} {
            font-size: 1.55rem;
            word-break: keep-all;
            margin-bottom: 0;
            background-color: #e6e6e6;
            padding: 0.7rem 2rem;
            padding-bottom: 1.2rem;
            a:not([class*="anchor"]) {
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
                bottom: -9px;
                left: 50%;
                transform: translateX(-50%);
                content: '';
                width: 100%;
                height: 3px;
                background-color: ${variable.SiteColor};
                transition: all 250ms;
              }
              &:hover {
                color: #fff;
                opacity: 1;
                background-color: transparent;
              &::after {
                  height: 160%;
                  width: 110%;
                }
              }
            }
          }
          ${CommentsContainer} {
            margin: 1rem 0rem 0.5rem;
            background: #fff;
            padding: 0.8rem 1.1rem;
            box-shadow: rgb(153, 153, 153) 2px 2px 40px -12px;
            border-radius: 20px;
            padding: 0.8rem 1.1rem;
            border-width: 1px;
            border-style: solid;
            border-color: rgb(236, 236, 236);
            ${ReviewText} {
              font-size: 0.8rem;
              margin-bottom: 0.7rem;
            }
          }
        }
        ${ContentContainer} {
          display: flex;
          order: 4;
          flex-direction: column;
          max-height: 100%;
          overflow: auto;
          -webkit-overflow-scrolling: touch;
          padding-bottom: 3.1rem;
          margin: 0 auto;
          padding-left: 1rem;
          padding-right: 1rem;
          padding-top: 1rem;
          word-break: break-all;
          font-size: 0.6rem;
          @media ${variable.MidPoint} {
            padding-bottom: unset;
          }
          a:not([class*="anchor"]):not([class*="PostBtn"]):not([class*="View"]):not([class*="Reaction-"]):not([class*="DeprecatedBtn"]):not([class*="WorkingBtn"]):not([class*="Download"]):not([class*="Report"]):not([class*="Tag-"]):not([class*="Softwaree-"]) {
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
              color: #fff;
              opacity: 1;
              background-color: transparent;
            &::after {
                height: 110%;
                width: 110%;
              }
            }
          }
          ${Linkka} {
            &::after {
              height: 0% !important;
              width: 0% !important;
            }
            &:hover {
              &::after {
                height: 0% !important;
                width: 0% !important;
              }
            }
          }
          ${SubHeader} {
            font-size: 1.05rem;
            word-break: keep-all;
            margin-bottom: 0.3rem;
          }
          ${ReportButtons} {
            display: flex;
            margin-bottom: 1.25rem;
            ${DeprecatedBtn} {
              border-radius: 25px;
              background-color: #fff;
              position: relative;
              margin-left: 0.2rem;
              transition: 300ms ease-in-out;
              display: flex;
              &:hover {
                background-color: ${variable.DeprecatedColor};
                box-shadow: 2px 2px 40px -12px #999;
                &::after {
                  height: 100%;
                  width: 100%;
                }
                ${AlertLink} {
                  color: #fff;
                }
                svg {
                  path {
                    fill: #fff;
                  }
                }
              }
              &:focus, &:active {
                box-shadow: 0 1px 3px 1px rgba(60,64,67,0.15), 0 1px 2px 0 rgba(60,64,67,0.3);
                background-color: ${darken(0.1,variable.DeprecatedColor)};
              }
              ${AlertLink} {
                height: 100%;
                text-align: center;
                padding: 0.22rem 0.6rem;
                padding-left: 0.22rem;
                width: 100%;
                border-radius: 25px;
                color: ${variable.DeprecatedColor};
                z-index: 1;
                &::after {
                  display: none;
                }
              }
              svg {
                width: 0.8rem;
                height: 0.8rem;
                align-self: center;
                margin-left: 0.55rem;
                path {
                  fill: ${variable.DeprecatedColor};
                }
              }
              &::after {
                content: "";
                position: absolute;
                height: 100%;
                width: 100%;
                background-color: ${rgba(variable.DeprecatedColor, 0.1)};
                top: 0;
                border-radius: 25px;
                border: 1px solid ${rgba(variable.DeprecatedColor, 0.15)};
              }
            }
            ${WorkingBtn} {
              border-radius: 25px;
              background-color: #fff;
              position: relative;
              transition: 300ms ease-in-out;
              display: flex;
              &:hover {
                background-color: ${variable.UpdatedColor};
                box-shadow: 2px 2px 40px -12px #999;
                &::after {
                  height: 100%;
                  width: 100%;
                }
                ${AlertLink} {
                  color: #fff;
                }
                svg {
                  path {
                    fill: #fff;
                  }
                }
              }
              &:focus, &:active {
                box-shadow: 0 1px 3px 1px rgba(60,64,67,0.15), 0 1px 2px 0 rgba(60,64,67,0.3);
                background-color: ${darken(0.1,variable.UpdatedColor)};
              }
              ${AlertLink} {
                height: 100%;
                text-align: center;
                padding: 0.22rem 0.6rem;
                padding-left: 0.22rem;
                width: 100%;
                border-radius: 25px;
                color: ${variable.UpdatedColor};
                z-index: 1;
                &::after {
                  display: none;
                }
              }
              svg {
                width: 0.9rem;
                height: 0.9rem;
                align-self: center;
                margin-left: 0.55rem;
                position: relative;
                top: -1px;
                left: 1px;
                path {
                  fill: ${variable.UpdatedColor};
                }
              }
              &::after {
                content: "";
                position: absolute;
                height: 100%;
                width: 100%;
                background-color: ${rgba(variable.UpdatedColor, 0.1)};
                border: 1px solid ${rgba(variable.UpdatedColor, 0.15)};
                top: 0;
                border-radius: 25px;
              }
            }
          }
          ${AreaFlex} {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
          }
          ${Area} {
            margin-bottom: 1.25rem;
            ${AreaDescriptionCard} {
              display: block;
              word-break: break-word;
              background-color: #fff;
              border-radius: 20px;
              box-shadow: 2px 2px 40px -12px #999;
              padding: 0.8rem 1.1rem;
              border: 1px solid #ececec;
              a[href*="imgur.com"] {
                &::after {
                  display: none !important;
                }
              }
              code {
                font-size: 0.67rem;
                /*line-height: unset;*/
                &~ code {
                  margin-left: 0.18rem;
                }
              }
              pre {
                line-height: unset;
                padding: 0.95rem;
                padding-top: 0.6rem;
                code {
                  font-size: 0.67rem;
                  padding: unset;
                  line-height: unset;
                }
              }
              p {
                color: #666;
              }
              p:only-child, ul:last-child {
                margin-bottom: unset;
              }
              h1 {
                font-size: 1.75rem; /*2.25rem*/
                margin-bottom: 0.7rem; /*1.45*/
                color: #000;
              }
              h2 {
                font-size: 1.22rem; /*1.62671rem*/
                margin-bottom: 0.7rem;
                color: #000;
              }
              table {
                font-size: 0.8rem;
              }
            }
            ${CardHeader} {
              font-size: 1.55rem;
              word-break: keep-all;
              margin-bottom: 0.8rem;
            }
          }
          ${Options} {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            margin-bottom: 1.6rem;
            @media ${variable.MidPoint} {
              flex-direction: row;
              justify-content: flex-start;
              ${Download}, ${DemoBtn} {
                margin-top: 0.5rem;
                margin-right: 0.4rem;
              }
            }
            ${DemoBtn} {
              background-color: grey;
              border-radius: 25px;
              padding: 0.5rem 1rem;
              font-size: 0.8rem;
              color: #fff;
              margin-top: 0.5rem;
              box-shadow: 2px 2px 40px -12px #000;
              transition: 300ms ease-in-out all;
              /*background: linear-gradient(90deg,${variable.SiteColor},${darken(0.3, variable.SiteColor)});*/
              &::after {
                height: 0;
              }
              &:hover {
                box-shadow: 2px 10px 40px -12px ${darken(0.2, "grey")};
                background-color: ${darken(0.1, "grey")};
                &::after {
                  height: 0;
                }
              }
            }
            ${Download} {
              background-color: ${variable.SiteColor};
              border-radius: 25px;
              padding: 0.5rem 1rem;
              font-size: 0.8rem;
              color: #fff;
              box-shadow: 2px 2px 40px -12px #000;
              transition: 300ms ease-in-out all;
              background: linear-gradient(90deg,${variable.SiteColor},${darken(0.3, variable.SiteColor)});
              &::after {
                height: 0;
              }
              &:hover {
                box-shadow: 2px 10px 40px -12px ${darken(0.3, variable.SiteColor)};
                &::after {
                  height: 0;
                }
              }
            }
            ${Report} {
              background-color: #da002f;
              border-radius: 25px;
              padding: 0.5rem 1rem;
              font-size: 0.8rem;
              margin-top: 0.5rem;
              color: #fff;
              box-shadow: 2px 2px 40px -12px #000;
              transition: 300ms ease-in-out all;
              background: linear-gradient(90deg,#da002f, #9e0022);
              position: relative;
              &:after {
                height: 0;
              }
              &:hover {
                box-shadow: 2px 10px 40px -12px #da002f;
                &::after {
                  height: 0;
                }
              }
            }
          }
        }
        ${ScreenshotContainer} {
          background-color: #fff;
          border-radius: 20px;
          box-shadow: 2px 2px 40px -12px #999;
          padding: 0.8rem 1.1rem;
          border: 1px solid #ececec;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          align-content: center;
          margin-bottom: 1rem;
          @media ${variable.MidPoint} {
              justify-content: space-between;
          }
          ${ScreenshotWrapper} {
            display: block;
            width: 16.7rem;
            box-shadow: rgba(102, 51, 153, 0.1) 0px 4px 10px;
            border-radius: 2px;
            transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
            position: relative;
            height: 100%;
            flex-basis: 11rem;
            margin-bottom: 1rem;
            &:hover {
              ${ImageContainer} {
                &::before {
                  opacity: 1;
                  pointer-events: all;
                }
                ${ImageOptions} {
                  opacity: 1;
                  ${OptionsWrapper} {
                    pointer-events: all;
                  }
                }
              }
            }
            ${ImageContainer} {
              display: flex;
              &::before {
                content: "";
                display: block;
                background: rgba(0, 0, 0, 0.6);
                position: absolute;
                width: 100%;
                height: 100%;
                opacity: 0;
                pointer-events: none;
                transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
                z-index: 1;
              }
              img {
                height: 100%;
                width: 100%;
                border-radius: 2px;
                margin: unset;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
              }
            }
            ${ImageOptions} {
              position: absolute;
              top: 0px;
              width: 100%;
              height: 100%;
              z-index: 1;
              flex-direction: column;
              justify-content: center;
              transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
              display: flex;
              opacity: 0;
              pointer-events: none;
              ${OptionsWrapper} {
                  display: flex;
                  flex-direction: column;
                  a {
                      margin: 0 auto;
                      text-align: center;
                      display: -webkit-inline-box;
                      flex: 1 1;
                      background-color: ${variable.SiteColor};
                      border-radius: 25px;
                      padding: .3rem .6rem;
                      font-weight: 400;
                      color: #fff;
                      font-size: .7rem;
                      transition: 250ms linear background-color;
                      &:hover {
                          background-color: ${darken(0.1,variable.SiteColor)};
                      }
                      &:first-child {
                          margin-bottom: 15px;
                      }
                      &:nth-child(2) {
                          background-color: grey;
                          cursor: not-allowed;
                      }
                  }
              }
          }
          }
        }
      }
    }
  }
  ${Ad} {
    order: 3;
    display: block;
  }
`

const GlobalStyle = createGlobalStyle`
[mode="dark"] {
  ${Container} {
    background-color: #36393f;
    ${Wrapper} {
      ${CommentsArea} {
        ${CommentsContainer} {
          background: rgba(0, 0, 0, 0.22);
          border-color: rgba(0, 0, 0, 0.08);
          box-shadow: rgb(0, 0, 0) 2px 2px 40px -12px;
          ${ReviewText} {
            color: #eee;
          }
        }
      }
      ${MoreHeader} {
        background-color: #2f3238;
        color: #eee;
        a {
          color: #fff;
        }
      }
      ${MoreArea} {
        background-color: #2f3238;
      }
      ${CommentsHeader} {
        background-color: transparent;
        color: #eee;
        a {
          color: #fff;
        }
      }
      ${Tabbs} {
        ${TabListt} {
          ${Tabb} {
            color: #5f6368;
            &:hover {
                  color: ${variable.SiteColor};
            }
            &:focus {
                outline: unset;
                border: 1px solid ${darken(0.1,variable.SiteColor)};
                box-shadow: unset;
            }
            &[class*="selected"] {
              background-color: rgba(0,0,0,0.2);
              color: ${variable.SiteColor};
              box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.15), 0 1px 2px 0 rgba(0, 0, 0, 0.3);
            }
          }
        }
        ${TabPanell} {
          ${ContentContainer} {
            ${SubHeader} {
              color: #fff;
            }
            ${ReportButtons} {
              ${WorkingBtn} {
                background-color: rgba(0,0,0,0.2);
                border-color: rgba(0,0,0,0.25);
                &:hover {
                  background-color: ${variable.UpdatedColor};
                  box-shadow: 2px 2px 40px -12px #000;
                  ${AlertLink} {
                  }
                  svg {
                    path {
                    }
                  }
                }
                &:focus, &:active {
                  box-shadow: 0 1px 3px 1px rgba(60,64,67,0.15), 0 1px 2px 0 rgba(60,64,67,0.3);
                  background-color: ${darken(0.1,variable.UpdatedColor)};
                }
              }
              ${DeprecatedBtn} {
                background-color: rgba(0,0,0,0.2);
                border-color: rgba(0,0,0,0.25);
                &:hover {
                  background-color: ${variable.DeprecatedColor};
                  box-shadow: 2px 2px 40px -12px #000;
                  ${AlertLink} {
                  }
                  svg {
                    path {
                    }
                  }
                }
                &:focus, &:active {
                  box-shadow: 0 1px 3px 1px rgba(60,64,67,0.15), 0 1px 2px 0 rgba(60,64,67,0.3);
                  background-color: ${darken(0.1,variable.DeprecatedColor)};
                }
              }
            }
            ${CardHeader} {
              color: #fff;
            }
            ${ScreenshotContainer} {
              background-color: rgba(0,0,0,0.2);
              box-shadow: 2px 2px 40px -12px #000;
              border-color: rgba(0,0,0,0.25);
            }
            ${AreaDescriptionCard} {
              background-color: rgba(0,0,0,0.2);
              border-color: rgba(0,0,0,0.25);
              box-shadow: 2px 2px 40px -12px #000;
              p {
                color: #cecece;
              }
              h1, h2, h3, h4, h5, h6, table, ol {
                color: #fff;
              }
              strong {
                color: #ececec;
              }
              ul {
                color: #cecece;
              }
              a {
                color: #fff;
              }
              code {
                background-color: rgba(0,0,0,0.2);
                color: #fff;
              }
              pre {
                background-color: rgba(0,0,0,0.2);
                code {
                  background-color: transparent;
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
