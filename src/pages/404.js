import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components';
import * as variable from 'src/styles/variables'
import { createGlobalStyle } from 'styled-components'

const NotFoundPage = () => (
  <Layout>
    <GlobalStyle />
    <Container>
      <h1>404</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Container>
  </Layout>
)

export default NotFoundPage

const Container = styled.div`
padding: 2rem;
h1 {
  color: ${variable.SiteColor};
  text-align: center;
  font-size: 6rem;
  word-break: keep-all;
}
p {
  text-align: center;
}
`
const GlobalStyle = createGlobalStyle`
  [mode="dark"] {
    ${Container} {
        p {
          color: #fff;
        }
    }
  }
`